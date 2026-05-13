import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService, roleFromToken } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { asList, pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsPage {
  product: any = null;
  constructor(route: ActivatedRoute, api: ProductService) { api.byId(route.snapshot.paramMap.get("id") || "").subscribe((d) => this.product = d); }
}
