import { Component } from "@angular/core";
import { roleFromToken } from "../../core/api";
import { pageImports } from "../page-imports";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../shared/ui.components";
const _c0 = () => ["referenceNumber", "supplierId", "warehouseId", "status", "totalAmount", "orderDate", "expectedDeliveryDate"];
function PurchaseOrdersPage_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.overdue.length, " overdue orders");
} }
function PurchaseOrdersPage_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function PurchaseOrdersPage_button_6_Template_button_click_0_listener() { const s_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); ctx_r0.status = s_r3; return i0.ɵɵresetView(ctx_r0.load()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("bg-purple-600", ctx_r0.status === s_r3)("text-white", ctx_r0.status === s_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r3 || "All");
} }
function PurchaseOrdersPage_po_modal_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "po-modal", 10);
    i0.ɵɵlistener("close", function PurchaseOrdersPage_po_modal_8_Template_po_modal_close_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showCreate = false); })("created", function PurchaseOrdersPage_po_modal_8_Template_po_modal_created_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.load()); });
    i0.ɵɵelementEnd();
} }
export class PurchaseOrdersPage {
    api;
    orders = [];
    overdue = [];
    status = "";
    showCreate = false;
    statuses = ["", "DRAFT", "PENDING", "APPROVED", "RECEIVED", "REJECTED", "CANCELLED"];
    constructor(api) {
        this.api = api;
        this.load();
    }
    load() {
        this.api.all({ status: this.status }).subscribe((d) => this.orders = d || []);
        if (["ADMIN", "MANAGER"].includes(roleFromToken()))
            this.api.overdue().subscribe((d) => this.overdue = d || []);
    }
    static ɵfac = function PurchaseOrdersPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PurchaseOrdersPage)(i0.ɵɵdirectiveInject(i1.PurchaseService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PurchaseOrdersPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 9, vars: 6, consts: [[1, "page-shell"], ["title", "Purchase Orders", "subtitle", "Procurement lifecycle management."], [1, "btn-primary", 3, "click"], ["class", "bg-red-50 border border-red-100 rounded-[20px] px-6 py-4 text-red-700 font-bold", 4, "ngIf"], [1, "panel", "p-5", "flex", "flex-wrap", "gap-2"], ["class", "px-4 py-2 rounded-xl text-xs font-black border", 3, "bg-purple-600", "text-white", "click", 4, "ngFor", "ngForOf"], [3, "rows", "cols"], [3, "close", "created", 4, "ngIf"], [1, "bg-red-50", "border", "border-red-100", "rounded-[20px]", "px-6", "py-4", "text-red-700", "font-bold"], [1, "px-4", "py-2", "rounded-xl", "text-xs", "font-black", "border", 3, "click"], [3, "close", "created"]], template: function PurchaseOrdersPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header-card", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function PurchaseOrdersPage_Template_button_click_2_listener() { return ctx.showCreate = true; });
            i0.ɵɵtext(3, "+ New Order");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, PurchaseOrdersPage_div_4_Template, 2, 1, "div", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵtemplate(6, PurchaseOrdersPage_button_6_Template, 2, 5, "button", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "table-list", 6);
            i0.ɵɵtemplate(8, PurchaseOrdersPage_po_modal_8_Template, 1, 0, "po-modal", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.overdue.length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.statuses);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rows", ctx.orders)("cols", i0.ɵɵpureFunction0(5, _c0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showCreate);
        } }, dependencies: [i2.CommonModule, i2.NgForOf, i2.NgIf, i3.FormsModule, i4.TableListUiComponent, i4.HeaderCardUiComponent, i4.PoModalUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PurchaseOrdersPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Purchase Orders" subtitle="Procurement lifecycle management."><button class="btn-primary" (click)="showCreate=true">+ New Order</button></header-card>
      <div *ngIf="overdue.length" class="bg-red-50 border border-red-100 rounded-[20px] px-6 py-4 text-red-700 font-bold">{{overdue.length}} overdue orders</div>
      <div class="panel p-5 flex flex-wrap gap-2"><button *ngFor="let s of statuses" class="px-4 py-2 rounded-xl text-xs font-black border" [class.bg-purple-600]="status===s" [class.text-white]="status===s" (click)="status=s; load()">{{s || 'All'}}</button></div>
      <table-list [rows]="orders" [cols]="['referenceNumber','supplierId','warehouseId','status','totalAmount','orderDate','expectedDeliveryDate']" />
      <po-modal *ngIf="showCreate" (close)="showCreate=false" (created)="load()" />
    </div>
  `
            }]
    }], () => [{ type: i1.PurchaseService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PurchaseOrdersPage, { className: "PurchaseOrdersPage" }); })();
//# sourceMappingURL=purchase-orders.page.js.map