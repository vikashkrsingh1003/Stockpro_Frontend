import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { PurchaseService } from "../../core/api";
import { NotificationService } from "../../core/services/notification.service";

import { TableListUiComponent } from "../table-list/table-list.component";

@Component({
  selector: "report",
  standalone: true,
  imports: [CommonModule, TableListUiComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportUiComponent {
  @Input() title = "";
  @Input() rows: any[] = [];
  objectKeys = Object.keys;
}
