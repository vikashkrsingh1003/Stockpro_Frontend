import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { roleFromToken, SupplierService } from "../../../core/api";
import { pageImports } from "../../page-imports";

@Component({ standalone: true, imports: pageImports,
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierPage {
  form: any = { name: "", contactPerson: "", email: "", phone: "", address: "", city: "", country: "", taxId: "", paymentTerms: "NET-30", leadTimeDays: 7 };
  fields = ["name", "contactPerson", "email", "phone", "address", "city", "country", "taxId", "paymentTerms", "leadTimeDays"];

  constructor(protected api: SupplierService, protected router: Router) {}
  save() { this.api.create(this.form).subscribe(() => this.router.navigateByUrl("/suppliers")); }
}
