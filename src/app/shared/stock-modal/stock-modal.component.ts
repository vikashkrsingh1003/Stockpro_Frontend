import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { ProductService, WarehouseService } from "../../core/api";
import { NotificationService } from "../../core/services/notification.service";

@Component({
  selector: "stock-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-modal.component.html',
  styleUrl: './stock-modal.component.css'
})
export class StockModalUiComponent {
  @Input() title = "";
  @Input() transfer = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();
  warehouses: any[] = [];
  products: any[] = [];
  form: any = { sku: "", targetId: "", qty: 1, adjustmentType: "ADJUSTMENT", reason: "Manual Adjustment" };

  constructor(
    private warehouseApi: WarehouseService,
    private productApi: ProductService,
    private notifications: NotificationService
  ) {
    this.loadWarehouses();
    this.loadProducts();
  }

  loadWarehouses() {
    this.warehouseApi.all().subscribe({
      next: (d) => this.warehouses = d || [],
      error: (err) => this.notifications.error(err?.error?.message || err?.error?.error || err?.error || "Unable to load warehouses")
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
    this.productApi.allActive().subscribe({
      next: (d) => this.products = d || [],
      error: (err) => this.notifications.error(err?.error?.message || err?.error?.error || err?.error || "Unable to load products")
    });
  }

  productSku(product: any) { return product?.sku || ""; }
  productLabel(product: any) {
    const sku = this.productSku(product);
    const name = product?.name || product?.productName || `Product ${sku}`;
    const stock = product?.totalStock ?? product?.stock;
    return stock !== undefined ? `${name} - ${sku} (${stock} in stock)` : `${name} - ${sku}`;
  }
}
