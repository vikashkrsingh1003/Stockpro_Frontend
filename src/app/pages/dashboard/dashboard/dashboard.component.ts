import { Component } from "@angular/core";
import { AlertService, AnalyticsService, ProductService, roleFromToken } from "../../../core/api";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardPage {
  metrics: any = {};
  unread = 0;
  utilization: any[] = [];
  topMoving: any[] = [];
  supplierSpend: any[] = [];
  productsById: Record<string, any> = {};
  productsBySku: Record<string, any> = {};
  selectedWarehouse = "";
  loading = false;
  lastUpdated = new Date();
  role = roleFromToken();
  quickLinks = [
    { label: "Manage Catalog", desc: "Update products and stock specs", path: "/products", icon: "▣" },
    { label: "Node Explorer", desc: "View warehouse nodes", path: "/warehouses", icon: "▤" },
    { label: "Purchase Orders", desc: "Procurement lifecycle", path: "/purchase-orders", icon: "🛒" },
    { label: "Alert Centre", desc: "Review active alerts", path: "/alerts", icon: "!" },
    { label: "Analytics & Reports", desc: "Reports and CSV exports", path: "/reports", icon: "〽" }
  ];

  constructor(
    private analytics: AnalyticsService,
    private alerts: AlertService,
    private products: ProductService
  ) {
    this.load();
  }

  load() {
    this.loading = true;
    this.analytics.dashboard().subscribe({
      next: (data) => {
        this.metrics = data || {};
        this.lastUpdated = new Date();
        this.loading = false;
      },
      error: () => {
        this.metrics = {};
        this.loading = false;
      }
    });
    this.alerts.unreadCount().subscribe({ next: (data) => this.unread = data || 0, error: () => this.unread = 0 });
    this.analytics.utilization().subscribe({ next: (data) => this.utilization = data || [], error: () => this.utilization = [] });
    this.analytics.topMoving(6).subscribe({ next: (data) => this.topMoving = data || [], error: () => this.topMoving = [] });
    this.analytics.supplierSpend().subscribe({ next: (data) => this.supplierSpend = (data || []).slice(0, 4), error: () => this.supplierSpend = [] });
    this.products.allActive().subscribe({
      next: (data) => this.indexProducts(data || []),
      error: () => {
        this.productsById = {};
        this.productsBySku = {};
      }
    });
  }

  indexProducts(products: any[]) {
    this.productsById = products.reduce((map: Record<string, any>, product: any) => {
      const id = product.productId ?? product.id;
      if (id !== undefined && id !== null) map[String(id)] = product;
      return map;
    }, {});
    this.productsBySku = products.reduce((map: Record<string, any>, product: any) => {
      if (product.sku) map[String(product.sku).toLowerCase()] = product;
      return map;
    }, {});
  }

  get utilizationRows() {
    if (this.utilization.length) {
      return this.utilization.map((item) => ({
        id: item.warehouseId,
        name: item.warehouseName || `Warehouse #${item.warehouseId}`,
        percent: this.boundedPercent(item.utilizationPercent),
        status: item.status || this.utilizationStatus(item.utilizationPercent),
        used: item.usedCapacity || 0,
        capacity: item.totalCapacity || 0
      }));
    }

    return Object.entries(this.metrics?.warehouseUtilization || {}).map(([name, value]) => ({
      id: name,
      name,
      percent: this.boundedPercent(value),
      status: this.utilizationStatus(value),
      used: 0,
      capacity: 0
    }));
  }

  get activeWarehouse(): any | null {
    return this.utilizationRows.find((row) => String(row.id || row.name) === this.selectedWarehouse) || this.utilizationRows[0] || null;
  }

  get stockHealthItems() {
    const top = Number(this.metrics.topMovingCount) || this.topMoving.filter((p) => p.movementCategory === "TOP_MOVING").length;
    const slow = Number(this.metrics.slowMovingCount) || this.topMoving.filter((p) => p.movementCategory === "SLOW_MOVING").length;
    const dead = Number(this.metrics.deadStockCount) || 0;
    const active = Math.max((Number(this.metrics.totalProducts) || 0) - top - slow - dead, 0);
    return [
      { label: "Top Moving", value: top, color: "bg-emerald-500" },
      { label: "Active", value: active, color: "bg-blue-500" },
      { label: "Slow", value: slow, color: "bg-amber-500" },
      { label: "Dead", value: dead, color: "bg-red-500" }
    ];
  }

  get kpiCards() {
    return [
      { label: "Catalog Assets", value: this.metrics?.totalProducts ?? 0, sub: "Products tracked", color: "blue", path: "/products", trend: "Open catalog" },
      { label: "Storage Nodes", value: this.metrics?.totalWarehouses ?? 0, sub: "Active warehouses", color: "purple", path: "/warehouses", trend: "View nodes" },
      { label: "Inventory Value", value: this.money(this.metrics?.totalInventoryValue || 0), sub: "Total stock valuation", color: "green", path: "/reports", trend: "Analyze value" },
      { label: "Active Alerts", value: this.unread, sub: "Unacknowledged alerts", color: "red", path: "/alerts", trend: this.unread ? "Needs review" : "Clear" }
    ];
  }

  money(value: unknown) {
    return `₹${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Number(value) || 0)}`;
  }

  number(value: unknown) {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(Number(value) || 0);
  }

  boundedPercent(value: unknown) {
    return Math.min(100, Math.max(0, Number(value) || 0));
  }

  utilizationStatus(value: unknown) {
    const percent = Number(value) || 0;
    if (percent >= 90) return "CRITICAL";
    if (percent >= 75) return "HIGH";
    return "NORMAL";
  }

  statusClass(status: string) {
    if (status === "CRITICAL") return "dash-danger";
    if (status === "HIGH") return "dash-warning";
    return "dash-good";
  }

  selectWarehouse(row: any) {
    this.selectedWarehouse = String(row?.id || row?.name || "");
  }

  productLabel(item: any) {
    const product = this.productDetails(item);
    return product?.name || product?.productName || item?.productName || item?.name || item?.sku || `Product #${item?.productId || "—"}`;
  }

  productSubLabel(item: any) {
    const product = this.productDetails(item);
    const sku = product?.sku || item?.sku;
    const brand = product?.brand;
    if (sku && brand) return `${brand} • ${sku}`;
    return sku || `Product ID ${item?.productId || "—"}`;
  }

  productMovementValue(item: any) {
    const rate = Number(item?.turnoverRate);
    if (Number.isFinite(rate)) return `${this.number(rate)} turnover`;
    return `${item?.totalQuantityMoved || item?.quantity || 0} units`;
  }

  private productDetails(item: any) {
    const byId = item?.productId !== undefined && item?.productId !== null ? this.productsById[String(item.productId)] : null;
    const bySku = item?.sku ? this.productsBySku[String(item.sku).toLowerCase()] : null;
    return byId || bySku || null;
  }

  supplierLabel(item: any) {
    return item?.supplierName || item?.name || `Supplier #${item?.supplierId || "—"}`;
  }
}
