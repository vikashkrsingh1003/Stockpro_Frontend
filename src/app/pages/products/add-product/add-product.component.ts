import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService, roleFromToken } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { asList, pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductPage {
  form: any = { sku: "", name: "", brand: "", category: "", costPrice: "", sellingPrice: "", reorderLevel: "5", maxStockLevel: "100", unitOfMeasure: "pcs", barcode: "", imageUrl: "", leadTimeDays: "0" };
  fields = ["imageUrl", "name", "sku", "barcode", "brand", "category", "costPrice", "sellingPrice", "unitOfMeasure", "leadTimeDays", "reorderLevel", "maxStockLevel"];

  constructor(protected api: ProductService, protected router: Router, protected notifications: NotificationService) {}
  save() {
    this.api.create(this.numeric()).subscribe((product) => {
      this.notifications.successDialog("Product created successfully");
      this.router.navigateByUrl("/products");
    });
  }
  numeric() {
    return { ...this.form, costPrice: +this.form.costPrice || 0, sellingPrice: +this.form.sellingPrice || 0, reorderLevel: +this.form.reorderLevel || 0, maxStockLevel: +this.form.maxStockLevel || 0, leadTimeDays: +this.form.leadTimeDays || 0 };
  }
}
