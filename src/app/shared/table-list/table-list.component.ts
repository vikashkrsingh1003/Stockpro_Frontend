import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { PurchaseService } from "../../core/api";
import { NotificationService } from "../../core/services/notification.service";

@Component({
  selector: "table-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListUiComponent {
  @Input() rows: any[] = [];
  @Input() cols: string[] = [];
}
