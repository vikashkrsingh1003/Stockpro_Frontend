import { Component } from "@angular/core";
import { PurchaseService, roleFromToken, SupplierService, WarehouseService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './purchase-orders.component.html',
  styleUrl: './purchase-orders.component.css'
})
export class PurchaseOrdersPage {
  orders: any[] = [];
  overdue: any[] = [];
  warehouses: any[] = [];
  suppliers: any[] = [];
  status = "";
  showCreate = false;
  filters = { supplierId: "", warehouseId: "", fromDate: "", toDate: "" };
  statuses = [
    { label: "All", value: "" },
    { label: "Draft", value: "DRAFT" },
    { label: "Pending", value: "PENDING" },
    { label: "Approved", value: "APPROVED" },
    { label: "Received", value: "RECEIVED" },
    { label: "Rejected", value: "REJECTED" },
    { label: "Cancelled", value: "CANCELLED" }
  ];
  role = roleFromToken();
  canCreate = this.role === "OFFICER";
  canManage = ["ADMIN", "MANAGER"].includes(this.role);
  canApprove = this.canManage;
  canCancelOrders = this.role === "OFFICER";
  receiveDialog: { order: any; item: any; remaining: number; qty: number; reference: string } | null = null;
  orderActionDialog: { order: any; type: "cancel" | "reject"; title: string; subtitle: string; reason: string; confirmText: string } | null = null;
  orderActionError = "";
  orderActionBusy = false;
  receiveDialogError = "";
  receiveResult: { type: "success" | "error"; title: string; message: string; time: string } | null = null;
  receiving = false;

  constructor(
    private api: PurchaseService,
    private warehouseApi: WarehouseService,
    private supplierApi: SupplierService,
    private notifications: NotificationService
  ) {
    this.loadWarehouses();
    this.loadSuppliers();
    this.load();
  }

  loadWarehouses() {
    this.warehouseApi.all().subscribe({
      next: (d) => this.warehouses = d || [],
      error: (err) => this.notifications.error(this.errorMessage(err, "Unable to load warehouses"))
    });
  }

  loadSuppliers() {
    this.supplierApi.all().subscribe({
      next: (d) => this.suppliers = d || [],
      error: (err) => this.notifications.error(this.errorMessage(err, "Unable to load suppliers"))
    });
  }

  load() {
    const params = {
      status: this.status,
      supplierId: this.filters.supplierId,
      warehouseId: this.filters.warehouseId,
      startDate: this.filters.fromDate ? `${this.filters.fromDate}T00:00:00` : "",
      endDate: this.filters.toDate ? `${this.filters.toDate}T23:59:59` : ""
    };
    this.api.all(params).subscribe((d) => this.orders = d || []);
    if (this.canManage) this.api.overdue().subscribe((d) => this.overdue = d || []);
  }

  money(value: unknown) { return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Number(value) || 0); }
  date(value: string) { return value ? new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value)) : "—"; }
  warehouseId(warehouse: any) { return warehouse?.warehouseId ?? warehouse?.id; }
  warehouseLabel(warehouse: any) {
    const id = this.warehouseId(warehouse);
    const name = warehouse?.name || warehouse?.warehouseName || `Warehouse ${id}`;
    const location = warehouse?.location || warehouse?.city || warehouse?.address;
    return location ? `${name} - ${location} (#${id})` : `${name} (#${id})`;
  }
  orderWarehouseName(order: any) {
    const warehouse = this.warehouses.find((item) => String(this.warehouseId(item)) === String(order.warehouseId));
    return warehouse ? this.warehouseLabel(warehouse) : `WH #${order.warehouseId || '—'}`;
  }
  supplierId(supplier: any) { return supplier?.supplierId ?? supplier?.id; }
  supplierLabel(supplier: any) {
    const id = this.supplierId(supplier);
    const name = supplier?.name || supplier?.supplierName || `Supplier ${id}`;
    const email = supplier?.email || supplier?.contactEmail;
    return email ? `${name} - ${email} (#${id})` : `${name} (#${id})`;
  }
  orderSupplierName(order: any) {
    const supplier = this.suppliers.find((item) => String(this.supplierId(item)) === String(order.supplierId));
    return supplier ? this.supplierLabel(supplier) : `Supplier #${order.supplierId || '—'}`;
  }
  labelStatus(status: string) { return (status || "DRAFT").replaceAll("_", " "); }
  isLate(order: any) {
    return order.expectedDeliveryDate && !["RECEIVED", "CANCELLED", "REJECTED"].includes(order.status) && new Date(order.expectedDeliveryDate).getTime() < Date.now();
  }
  statusClass(status: string) {
    const map: Record<string, string> = {
      DRAFT: "bg-slate-100 text-slate-700",
      PENDING: "bg-amber-100 text-amber-700",
      APPROVED: "bg-blue-100 text-blue-700",
      PARTIALLY_RECEIVED: "bg-cyan-100 text-cyan-700",
      RECEIVED: "bg-emerald-100 text-emerald-700",
      OVERDUE: "bg-red-100 text-red-700",
      REJECTED: "bg-rose-100 text-rose-700",
      CANCELLED: "bg-orange-100 text-orange-700"
    };
    return map[status] || "bg-slate-100 text-slate-700";
  }
  canCancel(order: any) { return !["RECEIVED", "REJECTED", "CANCELLED"].includes(order.status); }
  canReceive(order: any) { return ["OFFICER", "STAFF"].includes(this.role) && ["APPROVED", "PARTIALLY_RECEIVED", "OVERDUE"].includes(order.status); }
  submit(order: any) { this.api.submit(order.id).subscribe(() => this.load()); }
  approve(order: any) { this.api.approve(order.id).subscribe(() => this.load()); }
  reject(order: any) {
    this.openOrderActionDialog(order, "reject");
  }
  cancel(order: any) {
    this.openOrderActionDialog(order, "cancel");
  }

  openOrderActionDialog(order: any, type: "cancel" | "reject") {
    const reference = order.referenceNumber || `PO-${order.id}`;
    this.orderActionDialog = {
      order,
      type,
      title: type === "cancel" ? "Cancel Order" : "Reject Order",
      subtitle: `Enter reason for ${reference}`,
      reason: type === "cancel" ? "Cancelled from order dashboard" : "Not approved",
      confirmText: type === "cancel" ? "Cancel Order" : "Reject Order"
    };
    this.orderActionError = "";
  }

  closeOrderActionDialog() {
    if (this.orderActionBusy) return;
    this.orderActionDialog = null;
    this.orderActionError = "";
  }

  confirmOrderAction() {
    if (!this.orderActionDialog) return;
    const reason = this.orderActionDialog.reason.trim();
    if (!reason) {
      this.orderActionError = "Please enter a reason.";
      return;
    }

    this.orderActionBusy = true;
    const action = this.orderActionDialog.type === "cancel"
      ? this.api.cancel(this.orderActionDialog.order.id, reason)
      : this.api.reject(this.orderActionDialog.order.id, reason);

    action.subscribe({
      next: () => {
        const message = this.orderActionDialog?.type === "cancel" ? "Purchase order cancelled" : "Purchase order rejected";
        this.orderActionBusy = false;
        this.orderActionDialog = null;
        this.notifications.successDialog(message);
        this.load();
      },
      error: (err) => {
        this.orderActionBusy = false;
        this.orderActionError = this.errorMessage(err, "Unable to update purchase order");
      }
    });
  }

  receive(order: any) {
    const nextItem = (order.items || []).find((item: any) => (Number(item.receivedQuantity) || 0) < (Number(item.orderedQuantity) || 0));
    if (!nextItem?.productId) {
      this.showReceiveResult("error", "Receive failed", "This PO has no receivable product item.");
      return;
    }
    const remaining = nextItem ? Math.max(1, (Number(nextItem.orderedQuantity) || 0) - (Number(nextItem.receivedQuantity) || 0)) : 1;
    this.receiveDialog = {
      order,
      item: nextItem,
      remaining,
      qty: remaining,
      reference: order.referenceNumber || `PO-${order.id}`
    };
    this.receiveDialogError = "";
  }

  closeReceiveDialog() {
    if (this.receiving) return;
    this.receiveDialog = null;
    this.receiveDialogError = "";
  }

  confirmReceive() {
    if (!this.receiveDialog) return;
    const receivedQty = Number(this.receiveDialog.qty);
    if (!Number.isFinite(receivedQty) || receivedQty <= 0) {
      this.receiveDialogError = "Received quantity must be greater than zero.";
      return;
    }
    if (receivedQty > this.receiveDialog.remaining) {
      this.receiveDialogError = `You can receive only ${this.receiveDialog.remaining} remaining unit${this.receiveDialog.remaining === 1 ? '' : 's'}.`;
      return;
    }
    this.receiving = true;
    const { order, item } = this.receiveDialog;
    this.api.receive(order.id, item.productId, receivedQty).subscribe({
      next: () => {
        this.receiving = false;
        this.receiveDialog = null;
        this.showReceiveResult(
          "success",
          "Goods received",
          "Warehouse stock updated and payment report generated."
        );
        this.load();
      },
      error: (err) => {
        this.receiving = false;
        this.receiveDialog = null;
        this.showReceiveResult("error", "Receive failed", this.errorMessage(err, "Unable to receive goods"));
      }
    });
  }

  private showReceiveResult(type: "success" | "error", title: string, message: string) {
    this.receiveResult = {
      type,
      title,
      message,
      time: new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date())
    };
  }

  private errorMessage(err: any, fallback: string) {
    return err?.error?.message || err?.error?.error || err?.error || err?.message || fallback;
  }
}
