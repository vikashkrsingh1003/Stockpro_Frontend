import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovementService, ProductService, roleFromToken, WarehouseService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './warehouse-list.component.html',
  styleUrl: './warehouse-list.component.css'
})
export class WarehouseListPage {
  warehouses: any[] = [];
  canManageWarehouses = ["ADMIN", "MANAGER"].includes(roleFromToken());

  constructor(private api: WarehouseService, private notifications: NotificationService) { this.load(); }
  load() { this.api.all().subscribe((d) => this.warehouses = d || []); }
  percent(w: any) { return Math.min(100, Math.round(((w.usedCapacity || 0) / (w.capacity || 1)) * 100)); }
  toggleStatus(w: any) {
    const id = w.warehouseId || w.id;
    if (!id) {
      this.notifications.error("Warehouse id missing.");
      return;
    }
    this.api.status(id, !w.isActive).subscribe({
      next: () => this.load(),
      error: (err) => this.notifications.error(err?.error?.message || err?.error || "Unable to update warehouse status")
    });
  }
  deleteWarehouse(w: any) {
    const id = w.warehouseId || w.id;
    if (!id) {
      this.notifications.error("Warehouse id missing.");
      return;
    }
    if (!confirm(`Delete warehouse "${w.name}"?`)) return;
    this.api.delete(id).subscribe({
      next: () => this.load(),
      error: (err) => this.notifications.error(err?.error?.message || err?.error || "Unable to delete warehouse")
    });
  }
}
