import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { PurchaseService } from "../../core/api";
import { NotificationService } from "../../core/services/notification.service";

@Component({
  selector: "stat",
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatUiComponent {
  @Input() label = "";
  @Input() value: unknown = "";
  @Input() sub = "";
  @Input() color = "";
  get icon() {
    const icons: Record<string, string> = { blue: "▣", purple: "▤", green: "↗", red: "!", amber: "△" };
    return icons[this.color] || "▦";
  }
  iconClass(color: string) {
    const classes: Record<string, string> = {
      blue: "bg-blue-50 text-blue-600",
      purple: "bg-purple-50 text-purple-600",
      green: "bg-emerald-50 text-emerald-600",
      red: "bg-red-50 text-red-500",
      amber: "bg-amber-50 text-amber-600"
    };
    return classes[color] || "bg-gray-50 text-gray-500";
  }
}
