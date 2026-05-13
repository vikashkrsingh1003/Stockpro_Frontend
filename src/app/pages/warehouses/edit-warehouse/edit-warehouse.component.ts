import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovementService, ProductService, roleFromToken, WarehouseService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { pageImports } from "../../page-imports";

import { AddWarehousePage } from "../add-warehouse/add-warehouse.component";

@Component({ standalone: true, imports: pageImports,
  templateUrl: './edit-warehouse.component.html',
  styleUrl: './edit-warehouse.component.css'
})
export class EditWarehousePage extends AddWarehousePage {
  id = "";

  constructor(api: WarehouseService, router: Router, route: ActivatedRoute, notifications: NotificationService) {
    super(api, router, notifications);
    this.id = route.snapshot.paramMap.get("id") || "";
    api.byId(this.id).subscribe((d) => this.form = d);
  }
  override save() {
    this.api.update(this.id, this.payload()).subscribe({
      next: () => this.router.navigateByUrl("/warehouses"),
      error: (err) => this.notifications.error(err?.error?.message || err?.error || "Unable to update warehouse")
    });
  }
}
