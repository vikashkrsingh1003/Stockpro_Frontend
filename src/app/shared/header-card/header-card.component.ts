import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { PurchaseService } from "../../core/api";
import { NotificationService } from "../../core/services/notification.service";

@Component({
  selector: "header-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-card.component.html',
  styleUrl: './header-card.component.css'
})
export class HeaderCardUiComponent {
  @Input() title = "";
  @Input() subtitle = "";
}
