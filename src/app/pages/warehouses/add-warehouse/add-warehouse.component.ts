import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovementService, ProductService, roleFromToken, WarehouseService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { pageImports } from "../../page-imports";

@Component({ standalone: true, imports: pageImports,
  templateUrl: './add-warehouse.component.html',
  styleUrl: './add-warehouse.component.css'
})
export class AddWarehousePage {
  form: any = { name: "", location: "", address: "", capacity: 10000, phone: "" };
  fields = ["name", "location", "phone", "capacity", "address"];

  constructor(protected api: WarehouseService, protected router: Router, protected notifications: NotificationService) {}
  save() {
    this.api.create(this.payload()).subscribe({
      next: () => this.router.navigateByUrl("/warehouses"),
      error: (err) => this.notifications.error(err?.error?.message || err?.error || "Unable to create warehouse")
    });
  }
  payload() {
    return {
      name: String(this.form.name || "").trim(),
      location: String(this.form.location || "").trim(),
      phone: String(this.form.phone || "").trim(),
      address: String(this.form.address || "").trim(),
      capacity: Number(this.form.capacity) || 0
    };
  }
}
