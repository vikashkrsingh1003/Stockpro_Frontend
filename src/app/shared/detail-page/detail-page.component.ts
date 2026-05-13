import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { PurchaseService } from "../../core/api";
import { NotificationService } from "../../core/services/notification.service";
import { API_BASE_URL } from "../../core/api-config";

@Component({
  selector: "detail-page",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageUiComponent {
  @Input() item: any;
  @Input() titleField = "name";
  @Input() back = "/";
  @Input() editPrefix = "";
  imageSrc(url: string | null | undefined) {
    if (!url) return "";
    if (/^https?:\/\//i.test(url)) return url;
    return `${API_BASE_URL.replace(/\/api\/v1$/, "")}${url.startsWith("/") ? url : `/${url}`}`;
  }
  visibleEntries(item: any) {
    return Object.entries(item || {}).filter(([key]) => key !== "imageUrl");
  }
}
