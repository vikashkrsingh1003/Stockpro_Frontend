import { Component } from "@angular/core";
import { MovementService, ProductService, WarehouseService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.css'
})
export class MovementsPage {
  movements: any[] = [];
  warehouseOptions: any[] = [];
  productOptions: any[] = [];
  filters: any = { warehouseId: "", productId: "", type: "", from: "", to: "" };
  adjustOpen = false;
  transferOpen = false;
  adjustForm: any = { sku: "", warehouseId: "", adjustmentType: "ADJUSTMENT", qty: "", reason: "" };
  transferForm: any = { sku: "", fromWarehouse: "", toWarehouse: "", qty: "", reason: "" };

  constructor(
    private api: MovementService,
    private products: ProductService,
    private warehouses: WarehouseService,
    private notifications: NotificationService
  ) {
    this.loadWarehouses();
    this.loadProducts();
    this.load();
  }

  loadWarehouses() {
    this.warehouses.all().subscribe({
      next: (d) => this.warehouseOptions = d || [],
      error: (err) => this.notifications.error(this.errorMessage(err, "Unable to load warehouses"))
    });
  }

  warehouseId(warehouse: any) { return warehouse?.warehouseId ?? warehouse?.id; }
  warehouseLabel(warehouse: any) {
    const id = this.warehouseId(warehouse);
    const name = warehouse?.name || warehouse?.warehouseName || `Warehouse ${id}`;
    const location = warehouse?.location || warehouse?.city || warehouse?.address;
    return location ? `${name} - ${location} (#${id})` : `${name} (#${id})`;
  }

  loadProducts() {
    this.products.allActive().subscribe({
      next: (d) => this.productOptions = d || [],
      error: (err) => this.notifications.error(this.errorMessage(err, "Unable to load products"))
    });
  }

  productId(product: any) { return product?.productId ?? product?.id; }
  productSku(product: any) { return product?.sku || ""; }
  productLabel(product: any) {
    const sku = this.productSku(product);
    const name = product?.name || product?.productName || `Product ${sku || this.productId(product)}`;
    const stock = product?.totalStock ?? product?.stock;
    return stock !== undefined ? `${name} - ${sku} (${stock} in stock)` : `${name} - ${sku}`;
  }

  load() {
    this.api.filtered(this.filters).subscribe({
      next: (d) => this.movements = (d || []).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()),
      error: (err) => this.notifications.error(this.errorMessage(err, "Unable to load stock movements"))
    });
  }
  exportCsv() {
    const csv = this.movements.map((m) => [m.type, m.warehouseId, m.productId, m.quantity, m.reason, m.performedBy, m.timestamp].join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "movements_export.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  adjust() {
    this.products.bySku(this.adjustForm.sku).subscribe({
      next: (product: any) => {
        this.warehouses.adjustStock({
          productId: product.productId,
          warehouseId: Number(this.adjustForm.warehouseId),
          adjustmentType: this.adjustForm.adjustmentType,
          quantity: Number(this.adjustForm.qty),
          reason: this.adjustForm.reason
        }).subscribe({
          next: () => {
            this.notifications.success("Stock adjustment successful");
            this.adjustOpen = false;
            this.adjustForm = { sku: "", warehouseId: "", adjustmentType: "ADJUSTMENT", qty: "", reason: "" };
            this.load();
          },
          error: (err) => this.notifications.error(this.errorMessage(err, "Unable to adjust stock"))
        });
      },
      error: (err) => this.notifications.error(this.errorMessage(err, "Selected product not found"))
    });
  }
  transfer() {
    this.products.bySku(this.transferForm.sku).subscribe({
      next: (product: any) => {
        this.api.transfer({
          productId: product.productId,
          fromWarehouse: Number(this.transferForm.fromWarehouse),
          toWarehouse: Number(this.transferForm.toWarehouse),
          qty: Number(this.transferForm.qty),
          reason: this.transferForm.reason
        }).subscribe({
          next: () => {
            this.notifications.success("Product transfer successful");
            this.transferOpen = false;
            this.transferForm = { sku: "", fromWarehouse: "", toWarehouse: "", qty: "", reason: "" };
            this.load();
          },
          error: (err) => this.notifications.error(this.errorMessage(err, "Unable to transfer stock"))
        });
      },
      error: (err) => this.notifications.error(this.errorMessage(err, "Selected product not found"))
    });
  }
  private errorMessage(err: any, fallback: string) {
    if (typeof err?.error === "string") return err.error;
    if (err?.error?.message) return err.error.message;
    if (err?.error?.error) return err.error.error;
    if (err?.message) return err.message;
    return fallback;
  }
  typeLabel(type: string) {
    const labels: Record<string, string> = { IN: "Stock In", OUT: "Stock Out", ISSUE: "Issue", WRITE_OFF: "Write-Off", RETURN: "Return", TRANSFER: "Transfer", ADJUSTMENT: "Adjustment" };
    return labels[type] || type || "Movement";
  }
  typeClass(type: string) {
    const classes: Record<string, string> = {
      IN: "bg-emerald-100 text-emerald-700",
      OUT: "bg-red-100 text-red-700",
      ISSUE: "bg-red-100 text-red-700",
      WRITE_OFF: "bg-amber-100 text-amber-700",
      RETURN: "bg-purple-100 text-purple-700",
      TRANSFER: "bg-blue-100 text-blue-700",
      ADJUSTMENT: "bg-gray-100 text-gray-700"
    };
    return classes[type] || "bg-gray-100 text-gray-700";
  }
}
