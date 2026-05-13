import { AsyncPipe, NgClass, NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { NotificationService } from "../../core/services/notification.service";

@Component({
  selector: "app-notifications",
  standalone: true,
  imports: [AsyncPipe, NgClass, NgFor, NgIf],
  templateUrl: './notification-outlet.component.html',
  styleUrl: './notification-outlet.component.css'
})
export class NotificationOutletComponent {
  constructor(public notifications: NotificationService) {}

  icon(type: string) {
    return type === "success" ? "✓" : type === "error" ? "!" : type === "warning" ? "!" : "i";
  }
}
