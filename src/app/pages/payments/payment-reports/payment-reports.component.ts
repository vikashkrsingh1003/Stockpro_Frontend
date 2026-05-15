import { Component } from "@angular/core";
import { PaymentService, ProductService, SupplierService } from "../../../core/api";
import { RAZORPAY_CHECKOUT_SCRIPT_URL, RAZORPAY_MAX_AMOUNT_INR } from "../../../core/api-config";
import { NotificationService } from "../../../core/services/notification.service";
import { pageImports } from "../../page-imports";

declare global {
  interface Window { Razorpay: any; }
}

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './payment-reports.component.html',
  styleUrl: './payment-reports.component.css'
})
export class PaymentReportsPage {
  readonly razorpayMaxAmountInr = RAZORPAY_MAX_AMOUNT_INR;
  reports: any[] = [];
  suppliers: Record<string, string> = {};
  products: Record<string, string> = {};

  constructor(
    private api: PaymentService,
    private supplierApi: SupplierService,
    private productApi: ProductService,
    private notifications: NotificationService
  ) { this.load(); }

  load() {
    this.api.reports().subscribe({
      next: (data) => {
        this.reports = data || [];
        this.loadSupplierNames();
        this.loadProductNames();
      },
      error: (err) => this.notifications.error(this.errorMessage(err, "Unable to load payment reports"))
    });
  }

  pay(report: any) {
    if (!this.canPayWithRazorpay(report)) {
      this.notifications.warning(`Razorpay single-order limit is INR ${this.money(this.razorpayMaxAmountInr)}. Please split this payable amount into smaller payments.`);
      return;
    }
    const ensureOrder = String(report.razorpayOrderId || "").startsWith("order_")
      ? Promise.resolve(report)
      : new Promise<any>((resolve, reject) => this.api.process(report.paymentId).subscribe({ next: resolve, error: reject }));

    ensureOrder
      .then((payment) => this.openRazorpay(payment))
      .catch((err) => this.notifications.error(this.errorMessage(err, "Unable to start payment")));
  }

  private openRazorpay(payment: any) {
    this.loadRazorpay().then(() => {
      const checkout = new window.Razorpay({
        key: payment.razorpayKeyId,
        amount: Math.round(Number(payment.amount || 0) * 100),
        currency: payment.currency || "INR",
        name: "StockPro",
        description: `Supplier payment for PO #${payment.poId}`,
        order_id: payment.razorpayOrderId,
        handler: (response: any) => {
          this.api.verify({
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature
          }).subscribe({
            next: () => {
              this.notifications.successDialog("Payment successful");
              this.load();
            },
            error: (err) => this.notifications.error(this.errorMessage(err, "Payment verification failed"))
          });
        }
      });
      checkout.open();
    }).catch(() => this.notifications.error("Unable to load Razorpay checkout"));
  }

  private loadRazorpay() {
    if (window.Razorpay) return Promise.resolve();
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = RAZORPAY_CHECKOUT_SCRIPT_URL;
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.body.appendChild(script);
    });
  }

  private loadSupplierNames() {
    Array.from(new Set(this.reports.map((report) => report.supplierId).filter(Boolean))).forEach((id) => {
      if (this.suppliers[id]) return;
      this.supplierApi.byId(id).subscribe({
        next: (supplier) => this.suppliers[id] = supplier?.name || `Supplier #${id}`,
        error: () => this.suppliers[id] = `Supplier #${id}`
      });
    });
  }

  supplierName(id: unknown) {
    return this.suppliers[String(id)] || `Supplier #${id || "—"}`;
  }

  productDetails(report: any) {
    const details = String(report.productDetails || "—");
    return details.replace(/Product #(\d+)/g, (_match, id) => this.products[id] || `Product #${id}`);
  }

  get pendingTotal() {
    return this.reports.filter((r) => r.status !== "SUCCESS").reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
  }

  get paidTotal() {
    return this.reports.filter((r) => r.status === "SUCCESS").reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
  }

  private loadProductNames() {
    const ids = new Set<string>();
    this.reports.forEach((report) => {
      String(report.productDetails || "").replace(/Product #(\d+)/g, (_match, id) => {
        ids.add(id);
        return "";
      });
    });
    ids.forEach((id) => {
      if (this.products[id]) return;
      this.productApi.byId(id).subscribe({
        next: (product) => this.products[id] = product?.name || product?.sku || `Product #${id}`,
        error: () => this.products[id] = `Product #${id}`
      });
    });
  }

  process(report: any) {
    this.api.process(report.paymentId).subscribe({
      next: () => {
        this.notifications.success("Payment order created");
        this.load();
      },
      error: (err) => this.notifications.error(this.errorMessage(err, "Unable to process payment"))
    });
  }

  money(value: unknown) {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(Number(value) || 0);
  }

  statusClass(status: string) {
    return status === "SUCCESS" ? "bg-emerald-100 text-emerald-700" : status === "FAILED" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700";
  }

  canPayWithRazorpay(report: any) {
    return String(report?.currency || "INR").toUpperCase() !== "INR" || Number(report?.amount || 0) <= this.razorpayMaxAmountInr;
  }

  private errorMessage(err: any, fallback: string) {
    return err?.error?.message || err?.error?.error || err?.error || err?.message || fallback;
  }
}
