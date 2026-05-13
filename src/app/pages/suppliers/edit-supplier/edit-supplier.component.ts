import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { roleFromToken, SupplierService } from "../../../core/api";
import { pageImports } from "../../page-imports";

import { AddSupplierPage } from "../add-supplier/add-supplier.component";

@Component({ standalone: true, imports: pageImports,
  templateUrl: './edit-supplier.component.html',
  styleUrl: './edit-supplier.component.css'
})
export class EditSupplierPage extends AddSupplierPage {
  id = "";

  constructor(api: SupplierService, router: Router, route: ActivatedRoute) {
    super(api, router);
    this.id = route.snapshot.paramMap.get("id") || "";
    api.byId(this.id).subscribe((d) => this.form = d);
  }
  override save() { this.api.update(this.id, this.form).subscribe(() => this.router.navigateByUrl("/suppliers")); }
}
