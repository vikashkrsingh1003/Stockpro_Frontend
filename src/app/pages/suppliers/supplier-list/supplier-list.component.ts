import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { roleFromToken, SupplierService } from "../../../core/api";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListPage {
  suppliers: any[] = [];
  search = "";
  filter = "all";
  filterOptions = [{ label: "All", value: "all" }, { label: "Active", value: "active" }, { label: "Inactive", value: "inactive" }];
  role = roleFromToken();
  canEdit = ["ADMIN", "OFFICER"].includes(this.role);
  canDeactivate = this.role === "ADMIN";

  constructor(private api: SupplierService) { this.load(); }
  get filtered() { return this.suppliers.filter((s) => this.filter === "all" || (this.filter === "active" ? s.isActive : !s.isActive)); }
  load() { (this.search ? this.api.search(this.search) : this.api.all()).subscribe((d) => this.suppliers = d || []); }
  location(s: any) { return [s.city, s.country].filter(Boolean).join(", ") || "Location not set"; }
  stars(rating: number = 0) {
    const full = Math.max(0, Math.min(5, Math.round(rating)));
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
  }
  deactivate(s: any) {
    const id = s.supplierId || s.id;
    if (!id || !s.isActive) return;
    this.api.deactivate(id).subscribe(() => this.load());
  }
}
