import { Component } from "@angular/core";
import { AnalyticsService, ProductService } from "../../../core/api";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsPage {
  valuation = 0;
  metrics: any = {};
  topMoving: any[] = [];
  deadStock: any[] = [];
  utilization: any[] = [];
  supplierSpend: any[] = [];
  productsById: Record<string, any> = {};

  constructor(private api: AnalyticsService, private productsApi: ProductService) { this.load(); }
  load() {
    this.api.valuation().subscribe((d) => this.valuation = d || 0);
    this.api.dashboard().subscribe((d) => this.metrics = d || {});
    this.api.topMoving(10).subscribe((d) => this.topMoving = d || []);
    this.api.deadStock().subscribe((d) => this.deadStock = d || []);
    this.api.utilization().subscribe((d) => this.utilization = d || []);
    this.api.supplierSpend().subscribe((d) => this.supplierSpend = d || []);
    this.productsApi.all().subscribe((d) => {
      const list = Array.isArray(d) ? d : (Array.isArray(d?.content) ? d.content : []);
      this.productsById = list.reduce((map: Record<string, any>, product: any) => {
        if (product.productId) map[String(product.productId)] = product;
        return map;
      }, {});
    });
  }
  download(type: string) { this.api.downloadCsv(type, `${type}.csv`); }
  productLabel(product: any) {
    const details = this.productsById[String(product?.productId)] || {};
    return details.name || product?.sku || `Product #${product?.productId || "—"}`;
  }
  number(value: unknown) {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(Number(value) || 0);
  }
  movementLabel(category: string) {
    return String(category || "ACTIVE").replaceAll("_", " ");
  }
  movementClass(category: string) {
    const map: Record<string, string> = {
      TOP_MOVING: "bg-emerald-50 text-emerald-700",
      ACTIVE: "bg-blue-50 text-blue-700",
      SLOW_MOVING: "bg-amber-50 text-amber-700",
      DEAD: "bg-rose-50 text-rose-700"
    };
    return map[category] || "bg-slate-100 text-slate-700";
  }
  productGraphItems() {
    const top = Number(this.metrics.topMovingCount) || this.topMoving.filter((p) => p.movementCategory === "TOP_MOVING").length;
    const slow = Number(this.metrics.slowMovingCount) || this.topMoving.filter((p) => p.movementCategory === "SLOW_MOVING").length;
    const dead = Number(this.metrics.deadStockCount) || this.deadStock.length;
    const total = Number(this.metrics.totalProducts) || Math.max(this.topMoving.length + dead, 0);
    const active = Math.max(total - top - slow - dead, 0);
    return [
      { label: "Top Moving", value: top, color: "#10b981", dot: "bg-emerald-500" },
      { label: "Active", value: active, color: "#3b82f6", dot: "bg-blue-500" },
      { label: "Slow Moving", value: slow, color: "#f59e0b", dot: "bg-amber-500" },
      { label: "Dead Stock", value: dead, color: "#f43f5e", dot: "bg-rose-500" }
    ];
  }
  productGraphTotal() {
    return this.productGraphItems().reduce((sum, item) => sum + item.value, 0);
  }
  productGraphGradient() {
    const items = this.productGraphItems();
    const total = this.productGraphTotal();
    if (!total) return "conic-gradient(#e5e7eb 0deg 360deg)";
    let current = 0;
    const segments = items.filter((item) => item.value > 0).map((item) => {
      const start = current;
      current += (item.value / total) * 360;
      return `${item.color} ${start}deg ${current}deg`;
    });
    return `conic-gradient(${segments.join(", ")})`;
  }
  utilizationClass(status: string) {
    if (status === "CRITICAL") return "bg-red-50 text-red-700";
    if (status === "HIGH") return "bg-amber-50 text-amber-700";
    return "bg-emerald-50 text-emerald-700";
  }
  utilizationBarClass(status: string) {
    if (status === "CRITICAL") return "bg-red-500";
    if (status === "HIGH") return "bg-amber-500";
    return "bg-emerald-500";
  }
  boundedPercent(value: unknown) {
    return Math.min(100, Math.max(0, Number(value) || 0));
  }
}
