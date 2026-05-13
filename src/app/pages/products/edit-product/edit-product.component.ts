import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService, roleFromToken } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { asList, pageImports } from "../../page-imports";

import { AddProductPage } from "../add-product/add-product.component";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductPage extends AddProductPage {
  id = "";

  constructor(api: ProductService, router: Router, route: ActivatedRoute, notifications: NotificationService) {
    super(api, router, notifications);
    this.id = route.snapshot.paramMap.get("id") || "";
    api.byId(this.id).subscribe((data) => this.form = data);
  }
  override save() {
    this.api.update(this.id, this.numeric()).subscribe(() => {
      this.router.navigateByUrl("/products");
    });
  }
}
