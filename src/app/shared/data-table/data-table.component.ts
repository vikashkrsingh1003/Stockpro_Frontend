import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { PurchaseService } from "../../core/api";
import { NotificationService } from "../../core/services/notification.service";
import { API_BASE_URL } from "../../core/api-config";

@Component({
  selector: "data-table",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableUiComponent {
  private readonly criticalStockThreshold = 20;
  @Input() rows: any[] = [];
  @Input() kind = "";
  @Input() canManage = false;
  @Output() refresh = new EventEmitter<void>();
  @Output() deactivate = new EventEmitter<any>();
  stockLabel(product: any) {
    const stock = Number(product?.totalStock) || 0;
    const reorder = Number(product?.reorderLevel) || 0;
    if (stock <= 0) return "Out of Stock";
    if (stock < this.criticalStockThreshold) return "Critical Low Stock";
    if (reorder && stock <= reorder) return "Low Stock";
    return "In Stock";
  }
  stockClass(product: any) {
    const label = this.stockLabel(product);
    if (label === "Out of Stock" || label === "Critical Low Stock") return "text-red-600";
    if (label === "Low Stock") return "text-amber-600";
    return "text-emerald-700";
  }
  stockDotClass(product: any) {
    const label = this.stockLabel(product);
    if (label === "Out of Stock" || label === "Critical Low Stock") return "bg-red-500";
    if (label === "Low Stock") return "bg-amber-500";
    return "bg-emerald-500";
  }
  stockCountClass(product: any) {
    const label = this.stockLabel(product);
    if (label === "Out of Stock" || label === "Critical Low Stock") return "bg-red-50 text-red-700";
    if (label === "Low Stock") return "bg-amber-50 text-amber-700";
    return "bg-emerald-50 text-emerald-700";
  }
  imageSrc(url: string | null | undefined) {
    if (!url) return "";
    if (/^https?:\/\//i.test(url)) return url;
    return `${API_BASE_URL.replace(/\/api\/v1$/, "")}${url.startsWith("/") ? url : `/${url}`}`;
  }
}
