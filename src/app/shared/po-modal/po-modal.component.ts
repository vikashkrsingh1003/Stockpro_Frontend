import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductService, PurchaseService, SupplierService, WarehouseService } from "../../core/api";
import { NotificationService } from "../../core/services/notification.service";

@Component({
  selector: "po-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './po-modal.component.html',
  styleUrl: './po-modal.component.css'
})
export class PoModalUiComponent {
  @Output() close = new EventEmitter<void>();
  @Output() created = new EventEmitter<void>();
  warehouses: any[] = [];
  suppliers: any[] = [];
  products: any[] = [];
  form: any = { supplierId: "", warehouseId: "", expectedDeliveryDate: "", notes: "" };
  line: any = { sku: "", orderedQuantity: 1, unitCost: 0 };
  constructor(
    private api: PurchaseService,
    private warehouseApi: WarehouseService,
    private supplierApi: SupplierService,
    private productApi: ProductService,
    private notifications: NotificationService
  ) {
    this.loadWarehouses();
    this.loadSuppliers();
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

  loadSuppliers() {
    this.supplierApi.all().subscribe({
      next: (d) => this.suppliers = d || [],
      error: (err) => this.notifications.error(err?.error?.message || err?.error?.error || err?.error || "Unable to load suppliers")
    });
  }

  loadProducts() {
    this.productApi.allActive().subscribe({
      next: (d) => this.products = d || [],
      error: (err) => this.notifications.error(err?.error?.message || err?.error?.error || err?.error || "Unable to load products")
    });
  }

  supplierId(supplier: any) { return supplier?.supplierId ?? supplier?.id; }
  supplierLabel(supplier: any) {
    const id = this.supplierId(supplier);
    const name = supplier?.name || supplier?.supplierName || `Supplier ${id}`;
    const email = supplier?.email || supplier?.contactEmail;
    return email ? `${name} - ${email} (#${id})` : `${name} (#${id})`;
  }

  productSku(product: any) { return product?.sku || ""; }
  productLabel(product: any) {
    const sku = this.productSku(product);
    const name = product?.name || product?.productName || `Product ${sku}`;
    const stock = product?.totalStock ?? product?.stock;
    return stock !== undefined ? `${name} - ${sku} (${stock} in stock)` : `${name} - ${sku}`;
  }

  submit() {
    const payload = {
      ...this.form,
      supplierId: +this.form.supplierId,
      warehouseId: +this.form.warehouseId,
      items: [{
        sku: String(this.line.sku || "").trim(),
        orderedQuantity: Number(this.line.orderedQuantity) || 1,
        unitCost: Number(this.line.unitCost) || 0
      }]
    };
    if (!payload.supplierId || !payload.warehouseId || !payload.items[0].sku) {
      this.notifications.warning("Supplier, Warehouse, and Product are required.");
      return;
    }
    this.api.create(payload).subscribe(() => {
      this.notifications.successDialog("Purchase order created");
      this.created.emit();
      this.close.emit();
    }, (err) => this.notifications.error(err?.error?.message || err?.error?.error || err?.error || "Unable to create purchase order"));
  }
}
