import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService, roleFromToken } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { asList, pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListPage {
  products: any[] = [];
  inactive: any[] = [];
  search = "";
  category = "All";
  showInactive = false;
  canManage = ["ADMIN", "MANAGER"].includes(roleFromToken());

  constructor(private productsApi: ProductService, private notifications: NotificationService) { this.loadAll(); }
  loadAll() { this.load(); if (this.canManage) this.productsApi.inactive().subscribe((d) => this.inactive = asList(d)); }
  load() {
    this.productsApi.filter(this.search, this.category).subscribe({
      next: (data) => this.products = asList(data),
      error: (err) => this.notifications.error(err?.error?.message || err?.error?.error || "Unable to filter products")
    });
  }
  reactivate(p: any) { if (confirm(`Reactivate "${p.name}"?`)) this.productsApi.activate(p.productId).subscribe(() => this.loadAll()); }
  deactivate(p: any) { if (this.canManage && confirm(`Deactivate "${p.name}"?`)) this.productsApi.deactivate(p.productId).subscribe(() => this.loadAll()); }
}
