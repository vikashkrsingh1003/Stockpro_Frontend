import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovementService, ProductService, roleFromToken, WarehouseService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './warehouse-details.component.html',
  styleUrl: './warehouse-details.component.css'
})
export class WarehouseDetailsPage {
  id = "";
  inventory: any[] = [];
  history: any[] = [];
  adjustOpen = false;
  hideZero = true;

  constructor(
    route: ActivatedRoute,
    private wh: WarehouseService,
    private movements: MovementService,
    private products: ProductService,
    private notifications: NotificationService
  ) {
    this.id = route.snapshot.paramMap.get("id") || "";
    this.load();
  }
  load() {
    this.wh.inventory(this.id).subscribe((d) => this.inventory = d || []);
    this.movements.byWarehouse(this.id).subscribe((d) => this.history = (d || []).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
  }
  get visibleInventory() { return this.hideZero ? this.inventory.filter((item) => Number(item.quantity) > 0) : this.inventory; }
  productName(item: any) { return item.productName || item.name || item.product?.name || `Product #${item.productId}`; }
  health(item: any) {
    const qty = Number(item.quantity) || 0;
    const threshold = Number(item.minThreshold || item.threshold) || 0;
    if (qty <= 0) return "Empty";
    if (threshold && qty <= threshold) return "Low";
    return "Stable";
  }
  healthClass(item: any) {
    const state = this.health(item);
    return state === "Stable" ? "bg-emerald-50 text-emerald-700" : state === "Low" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700";
  }
  movementLabel(type: string) {
    const map: Record<string, string> = { IN: "In", OUT: "Out", TRANSFER: "Move", ADJUSTMENT: "Adj", ISSUE: "Out", WRITE_OFF: "Loss", RETURN: "In" };
    return map[type] || type || "Log";
  }
  movementClass(type: string) {
    return ["IN", "RETURN", "ADJUSTMENT"].includes(type) ? "bg-emerald-100 text-emerald-700" : type === "TRANSFER" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700";
  }
  signedQty(m: any) { return ["OUT", "ISSUE", "WRITE_OFF"].includes(m.type) ? "-" : "+"; }
  adjust(data: any) {
    this.products.bySku(data.sku).subscribe((p) => this.wh.adjustStock({
      productId: p.productId,
      warehouseId: Number(this.id),
      adjustmentType: data.adjustmentType || "ADJUSTMENT",
      quantity: Number(data.qty),
      reason: data.reason
    }).subscribe(() => {
      this.notifications.success("Stock adjustment successful");
      this.adjustOpen = false;
      this.load();
    }));
  }
}
