import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { PurchaseService } from "../../core/api";
import { NotificationService } from "../../core/services/notification.service";

@Component({
  selector: "entity-form",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './entity-form.component.html',
  styleUrl: './entity-form.component.css'
})
export class EntityFormUiComponent {
  @Input() title = "";
  @Input() back = "";
  @Input() model: any = {};
  @Input() fields: string[] = [];
  @Output() save = new EventEmitter<void>();
  get subtitle() {
    if (this.title.toLowerCase().includes("warehouse")) return "Configure storage node information and capacity.";
    if (this.title.toLowerCase().includes("supplier")) return "Manage partner company, contact, and terms.";
    if (this.title.toLowerCase().includes("product")) return "Designate product specs and inventory thresholds.";
    return "Complete the fields below and save your changes.";
  }
  label(field: string) {
    return field.replace(/([A-Z])/g, " $1").replace(/^./, (m) => m.toUpperCase());
  }
  wideField(field: string) {
    return ["address", "imageUrl", "notes", "description"].includes(field);
  }
  type(field: string) {
    return ["capacity", "costPrice", "sellingPrice", "reorderLevel", "maxStockLevel", "leadTimeDays"].includes(field) ? "number" : "text";
  }
  isImageUrlField(field: string) {
    return field === "imageUrl";
  }
  placeholder(field: string) {
    const map: Record<string, string> = {
      name: "e.g. Wireless Mouse",
      sku: "PROD-001",
      phone: "+91 9988776655",
      email: "name@example.com",
      category: "Electronics",
      city: "Mumbai",
      country: "India",
      barcode: "12345678"
    };
    return map[field] || "";
  }
}
