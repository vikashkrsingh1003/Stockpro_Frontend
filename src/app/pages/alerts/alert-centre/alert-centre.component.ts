import { Component } from "@angular/core";
import { AlertService } from "../../../core/api";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './alert-centre.component.html',
  styleUrl: './alert-centre.component.css'
})
export class AlertCentrePage {
  alerts: any[] = [];
  filters: any = { type: "", severity: "", acknowledged: "" };
  error = "";
  get unack() { return this.alerts.filter((a) => !a.acknowledged).length; }
  get critical() { return this.alerts.filter((a) => a.severity === "CRITICAL").length; }
  get resolved() { return this.alerts.filter((a) => a.acknowledged).length; }

  constructor(private api: AlertService) { this.load(); }
  load() {
    this.error = "";
    this.api.all(this.filters).subscribe({
      next: (d) => this.alerts = d || [],
      error: (err) => this.error = err?.error?.message || err?.error?.error || "Unable to load alerts"
    });
  }
  ack(alert: any) {
    this.api.acknowledge(alert.alertId || alert.id).subscribe({
      next: () => this.load(),
      error: (err) => this.error = err?.error?.message || err?.error?.error || "Unable to acknowledge alert"
    });
  }
  severityClass(severity: string) {
    if (severity === "CRITICAL") return "bg-red-50 text-red-700 border-red-100";
    if (severity === "WARNING") return "bg-amber-50 text-amber-700 border-amber-100";
    return "bg-sky-50 text-sky-700 border-sky-100";
  }
  typeLabel(type: string = "") {
    return type.replaceAll("_", " ").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()) || "System";
  }
  reference(a: any) {
    if (a.productId) return `#${a.productId}`;
    if (a.warehouseId) return `WH #${a.warehouseId}`;
    if (a.poId) return `PO #${a.poId}`;
    return "—";
  }
}
