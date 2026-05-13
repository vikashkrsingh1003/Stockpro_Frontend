import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { roleFromToken, SupplierService } from "../../../core/api";
import { pageImports } from "../../page-imports";

@Component({ standalone: true, imports: pageImports,
  templateUrl: './supplier-details.component.html',
  styleUrl: './supplier-details.component.css'
})
export class SupplierDetailsPage {
  supplier: any;
  constructor(route: ActivatedRoute, api: SupplierService) { api.byId(route.snapshot.paramMap.get("id") || "").subscribe((d) => this.supplier = d); }
}
