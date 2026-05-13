import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { roleFromToken } from "../core/api";
import { DataTableUiComponent, DetailPageUiComponent, EntityFormUiComponent, HeaderCardUiComponent, PoModalUiComponent, ReportUiComponent, StatUiComponent, StockModalUiComponent, TableListUiComponent } from "../shared/ui.components";
import * as i0 from "@angular/core";
import * as i1 from "../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
function DashboardPage_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵtext(1, "+ New Asset");
    i0.ɵɵelementEnd();
} }
function DashboardPage_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1, "No warehouse data");
    i0.ɵɵelementEnd();
} }
function DashboardPage_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 22);
    i0.ɵɵelement(7, "div", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const name_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(name_r1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.metrics.warehouseUtilization[name_r1], "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.metrics.warehouseUtilization[name_r1], "%");
} }
function DashboardPage_a_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 24)(1, "p", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", link_r3.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(link_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(link_r3.desc);
} }
function ProductListPage_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function ProductListPage_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showInactive = !ctx_r1.showInactive); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Deactivated (", ctx_r1.inactive.length, ")");
} }
function ProductListPage_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵtext(1, "+ Add New Product");
    i0.ɵɵelementEnd();
} }
function ProductListPage_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div")(2, "p", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 17);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 18);
    i0.ɵɵlistener("click", function ProductListPage_div_4_div_4_Template_button_click_6_listener() { const p_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.reactivate(p_r4)); });
    i0.ɵɵtext(7, "Reactivate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("SKU: ", p_r4.sku, "");
} }
function ProductListPage_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "h2", 12);
    i0.ɵɵtext(2, "Deactivated Products");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵtemplate(4, ProductListPage_div_4_div_4_Template, 8, 2, "div", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.inactive);
} }
const _c0 = a0 => ["/warehouses", a0];
const _c1 = a0 => ["/warehouses/edit", a0];
function WarehouseListPage_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵtext(1, "+ New Warehouse");
    i0.ɵɵelementEnd();
} }
function WarehouseListPage_div_4_button_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵtext(1, "Edit");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const w_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c1, w_r1.warehouseId));
} }
function WarehouseListPage_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵtext(3, "\u25A4");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 9);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h3", 10);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 11);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 12);
    i0.ɵɵelement(11, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 14);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 15);
    i0.ɵɵtemplate(15, WarehouseListPage_div_4_button_15_Template, 2, 3, "button", 16);
    i0.ɵɵelementStart(16, "button", 17);
    i0.ɵɵtext(17, "Manage");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const w_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", w_r1.isActive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(w_r1.isActive ? "Active" : "Maintenance");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r1.location);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.percent(w_r1), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", w_r1.usedCapacity || 0, " / ", w_r1.capacity || 0, " Units Used");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isAdmin);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, w_r1.warehouseId));
} }
const _c2 = () => ["productId", "quantity", "minThreshold"];
function WarehouseDetailsPage_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "p", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 15);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", m_r1.type, " \u00B7 Product #", m_r1.productId, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r1.reason);
} }
function WarehouseDetailsPage_stock_modal_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "stock-modal", 16);
    i0.ɵɵlistener("close", function WarehouseDetailsPage_stock_modal_16_Template_stock_modal_close_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.adjustOpen = false); })("save", function WarehouseDetailsPage_stock_modal_16_Template_stock_modal_save_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.adjust($event)); });
    i0.ɵɵelementEnd();
} }
function WarehouseDetailsPage_stock_modal_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "stock-modal", 17);
    i0.ɵɵlistener("close", function WarehouseDetailsPage_stock_modal_17_Template_stock_modal_close_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.transferOpen = false); })("save", function WarehouseDetailsPage_stock_modal_17_Template_stock_modal_save_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.transfer($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("transfer", true);
} }
const _c3 = () => ["type", "warehouseId", "productId", "quantity", "balanceAfter", "reason", "performedBy", "timestamp"];
const _c4 = a0 => ["/suppliers", a0];
const _c5 = a0 => ["/suppliers/edit", a0];
function SupplierListPage_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵtext(1, "+ Add New Supplier");
    i0.ɵɵelementEnd();
} }
function SupplierListPage_div_13_button_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵtext(1, "Edit");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c5, s_r1.supplierId || s_r1.id));
} }
function SupplierListPage_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "h3", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 12);
    i0.ɵɵtext(6, "\u2605\u2605\u2605\u2605\u2605 ");
    i0.ɵɵelementStart(7, "span", 13);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 14);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 14);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 15)(14, "button", 16);
    i0.ɵɵtext(15, "View");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, SupplierListPage_div_13_button_16_Template, 2, 3, "button", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r1.contactPerson);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("(", s_r1.rating || 0, ")");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", s_r1.city, ", ", s_r1.country, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r1.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c4, s_r1.supplierId || s_r1.id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.canManage);
} }
const _c6 = () => ["fullName", "email", "role", "active"];
const _c7 = () => ["severity", "alertType", "title", "message", "productId", "createdAt", "acknowledged"];
const _c8 = () => ["referenceNumber", "supplierId", "warehouseId", "status", "totalAmount", "orderDate", "expectedDeliveryDate"];
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
function TableListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r1);
} }
function TableListComponent_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_4_0;
    const c_r2 = ctx.$implicit;
    const row_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((tmp_4_0 = row_r3[c_r2]) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "\u2014");
} }
function TableListComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 9);
    i0.ɵɵtemplate(1, TableListComponent_tr_7_td_1_Template, 2, 1, "td", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.cols);
} }
function TableListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1, "No records found");
    i0.ɵɵelementEnd();
} }
const _c9 = a0 => ["/products", a0];
function DataTableComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 6)(1, "td", 4)(2, "p", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td", 4)(7, "span", 9);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td", 10);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 11);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 4)(14, "a", 12);
    i0.ɵɵtext(15, "View");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("SKU: ", p_r1.sku, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r1.category || "General");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", p_r1.sellingPrice, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", p_r1.totalStock || 0, " Units Global");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c9, p_r1.productId));
} }
const _c10 = ["*"];
function EntityFormComponent_label_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 10)(1, "span", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 12);
    i0.ɵɵtwoWayListener("ngModelChange", function EntityFormComponent_label_8_Template_input_ngModelChange_3_listener($event) { const f_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.model[f_r2], $event) || (ctx_r2.model[f_r2] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.model[f_r2]);
    i0.ɵɵproperty("name", f_r2);
} }
const _c11 = (a0, a1) => [a0, a1];
function DetailPageComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "p", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 13);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const kv_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(kv_r1.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(kv_r1.value);
} }
function DetailPageComponent_div_3_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵtext(1, "Edit");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(1, _c11, ctx_r1.editPrefix, ctx_r1.item.productId || ctx_r1.item.supplierId || ctx_r1.item.id));
} }
function DetailPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    i0.ɵɵtext(3, "\u25A3");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 6)(5, "h1", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵtemplate(8, DetailPageComponent_div_3_div_8_Template, 5, 2, "div", 9);
    i0.ɵɵpipe(9, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, DetailPageComponent_div_3_a_10_Template, 2, 4, "a", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.item[ctx_r1.titleField]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 3, ctx_r1.item));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.editPrefix);
} }
function StockModalComponent_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10);
    i0.ɵɵtwoWayListener("ngModelChange", function StockModalComponent_input_5_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.targetId, $event) || (ctx_r1.form.targetId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.targetId);
} }
const _c12 = () => [];
const pageImports = [
    CommonModule,
    FormsModule,
    RouterLink,
    StatUiComponent,
    TableListUiComponent,
    DataTableUiComponent,
    HeaderCardUiComponent,
    EntityFormUiComponent,
    DetailPageUiComponent,
    StockModalUiComponent,
    PoModalUiComponent,
    ReportUiComponent
];
function asList(data) {
    if (Array.isArray(data))
        return data;
    if (Array.isArray(data?.content))
        return data.content;
    return [];
}
export class DashboardPage {
    analytics;
    alerts;
    metrics = {};
    unread = 0;
    role = roleFromToken();
    quickLinks = [
        { label: "Manage Catalog", desc: "Update products & specs", path: "/products" },
        { label: "Node Explorer", desc: "View warehouse nodes", path: "/warehouses" },
        { label: "Purchase Orders", desc: "Procurement lifecycle", path: "/purchase-orders" },
        { label: "Alert Centre", desc: "Review active alerts", path: "/alerts" },
        { label: "Analytics & Reports", desc: "View reports & CSV exports", path: "/reports" }
    ];
    get utilizationKeys() { return Object.keys(this.metrics?.warehouseUtilization || {}); }
    constructor(analytics, alerts) {
        this.analytics = analytics;
        this.alerts = alerts;
        this.analytics.dashboard().subscribe({ next: (data) => this.metrics = data || {}, error: () => this.metrics = {} });
        this.alerts.unreadCount().subscribe({ next: (data) => this.unread = data || 0, error: () => this.unread = 0 });
    }
    static ɵfac = function DashboardPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardPage)(i0.ɵɵdirectiveInject(i1.AnalyticsService), i0.ɵɵdirectiveInject(i1.AlertService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 24, vars: 11, consts: [[1, "page-shell"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-end", "gap-6"], [1, "text-3xl", "md:text-4xl", "font-black", "text-gray-900", "tracking-tight"], [1, "text-gray-400", "font-medium", "mt-2", "uppercase", "tracking-widest", "text-xs"], ["class", "btn-primary", "routerLink", "/products/add", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], ["label", "Catalog Assets", "sub", "Products Tracked", "color", "blue", 3, "value"], ["label", "Storage Nodes", "sub", "Active Warehouses", "color", "purple", 3, "value"], ["label", "Inventory Value", "sub", "Total Stock Valuation", "color", "green", 3, "value"], ["label", "Active Alerts", "sub", "Unacknowledged alerts", "color", "red", 3, "value"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "panel", "p-8", "space-y-5"], [1, "text-xl", "font-black", "text-gray-900"], ["class", "py-12 text-center text-gray-300 font-black uppercase tracking-widest text-xs", 4, "ngIf"], ["class", "space-y-1", 4, "ngFor", "ngForOf"], [1, "bg-gray-900", "rounded-[32px]", "p-8", "text-white", "space-y-3"], [1, "font-black", "text-lg"], ["class", "block p-4 hover:bg-white/10 rounded-2xl transition-all", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/products/add", 1, "btn-primary"], [1, "py-12", "text-center", "text-gray-300", "font-black", "uppercase", "tracking-widest", "text-xs"], [1, "space-y-1"], [1, "flex", "justify-between", "text-sm", "font-bold", "text-gray-700"], [1, "h-2", "bg-gray-100", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-[#7c3aed]"], [1, "block", "p-4", "hover:bg-white/10", "rounded-2xl", "transition-all", 3, "routerLink"], [1, "font-bold", "text-sm"], [1, "text-[10px]", "text-white/50"]], template: function DashboardPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Control Center");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Real-time Microservice Intelligence");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, DashboardPage_button_7_Template, 2, 0, "button", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelement(9, "stat", 6)(10, "stat", 7)(11, "stat", 8);
            i0.ɵɵpipe(12, "number");
            i0.ɵɵelement(13, "stat", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 10)(15, "div", 11)(16, "h2", 12);
            i0.ɵɵtext(17, "Warehouse Utilization");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(18, DashboardPage_div_18_Template, 2, 0, "div", 13)(19, DashboardPage_div_19_Template, 8, 4, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 15)(21, "h3", 16);
            i0.ɵɵtext(22, "Quick Navigation");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, DashboardPage_a_23_Template, 5, 3, "a", 17);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.role !== "OFFICER");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", (tmp_1_0 = ctx.metrics == null ? null : ctx.metrics.totalProducts) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("value", (tmp_2_0 = ctx.metrics == null ? null : ctx.metrics.totalWarehouses) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("value", "\u20B9" + i0.ɵɵpipeBind2(12, 8, (ctx.metrics == null ? null : ctx.metrics.totalInventoryValue) || 0, "1.0-0"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.unread);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.utilizationKeys.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.utilizationKeys);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.quickLinks);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, i2.DecimalPipe, FormsModule,
            RouterLink,
            StatUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 class="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Control Center</h1>
          <p class="text-gray-400 font-medium mt-2 uppercase tracking-widest text-xs">Real-time Microservice Intelligence</p>
        </div>
        <button class="btn-primary" routerLink="/products/add" *ngIf="role !== 'OFFICER'">+ New Asset</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <stat label="Catalog Assets" [value]="metrics?.totalProducts ?? 0" sub="Products Tracked" color="blue" />
        <stat label="Storage Nodes" [value]="metrics?.totalWarehouses ?? 0" sub="Active Warehouses" color="purple" />
        <stat label="Inventory Value" [value]="'₹' + ((metrics?.totalInventoryValue || 0) | number:'1.0-0')" sub="Total Stock Valuation" color="green" />
        <stat label="Active Alerts" [value]="unread" sub="Unacknowledged alerts" color="red" />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 panel p-8 space-y-5">
          <h2 class="text-xl font-black text-gray-900">Warehouse Utilization</h2>
          <div *ngIf="utilizationKeys.length === 0" class="py-12 text-center text-gray-300 font-black uppercase tracking-widest text-xs">No warehouse data</div>
          <div *ngFor="let name of utilizationKeys" class="space-y-1">
            <div class="flex justify-between text-sm font-bold text-gray-700"><span>{{name}}</span><span>{{metrics.warehouseUtilization[name]}}%</span></div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden"><div class="h-full bg-[#7c3aed]" [style.width.%]="metrics.warehouseUtilization[name]"></div></div>
          </div>
        </div>
        <div class="bg-gray-900 rounded-[32px] p-8 text-white space-y-3">
          <h3 class="font-black text-lg">Quick Navigation</h3>
          <a *ngFor="let link of quickLinks" [routerLink]="link.path" class="block p-4 hover:bg-white/10 rounded-2xl transition-all">
            <p class="font-bold text-sm">{{link.label}}</p><p class="text-[10px] text-white/50">{{link.desc}}</p>
          </a>
        </div>
      </div>
    </div>
  `
            }]
    }], () => [{ type: i1.AnalyticsService }, { type: i1.AlertService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardPage, { className: "DashboardPage" }); })();
export class StatComponent {
    label = "";
    value = "";
    sub = "";
    color = "";
    static ɵfac = function StatComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StatComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatComponent, selectors: [["stat"]], inputs: { label: "label", value: "value", sub: "sub", color: "color" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 3, consts: [[1, "bg-white", "p-6", "rounded-[32px]", "border", "border-gray-50", "shadow-sm", "space-y-3"], [1, "text-[10px]", "font-black", "text-gray-400", "uppercase", "tracking-widest"], [1, "text-3xl", "font-black", "text-gray-900"], [1, "text-xs", "text-gray-400", "font-medium"]], template: function StatComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "p", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h4", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.value);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.sub);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatComponent, [{
        type: Component,
        args: [{
                selector: "stat",
                standalone: true,
                inputs: ["label", "value", "sub", "color"],
                template: `<div class="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm space-y-3">
    <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{label}}</p>
    <h4 class="text-3xl font-black text-gray-900">{{value}}</h4>
    <p class="text-xs text-gray-400 font-medium">{{sub}}</p>
  </div>`
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StatComponent, { className: "StatComponent" }); })();
export class ProductListPage {
    productsApi;
    products = [];
    inactive = [];
    search = "";
    category = "All";
    showInactive = false;
    canManage = ["ADMIN", "MANAGER"].includes(roleFromToken());
    constructor(productsApi) {
        this.productsApi = productsApi;
        this.loadAll();
    }
    loadAll() { this.load(); if (this.canManage)
        this.productsApi.inactive().subscribe((d) => this.inactive = asList(d)); }
    load() {
        const req = this.search ? this.productsApi.search(this.search) : this.category !== "All" ? this.productsApi.category(this.category) : this.productsApi.all();
        req.subscribe((data) => this.products = asList(data));
    }
    reactivate(p) { if (confirm(`Reactivate "${p.name}"?`))
        this.productsApi.activate(p.productId).subscribe(() => this.loadAll()); }
    static ɵfac = function ProductListPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProductListPage)(i0.ɵɵdirectiveInject(i1.ProductService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductListPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 21, vars: 6, consts: [[1, "page-shell"], ["title", "Product Inventory", "subtitle", "Manage and track your global stock levels."], ["class", "btn-soft", 3, "click", 4, "ngIf"], ["class", "btn-primary", "routerLink", "/products/add", 4, "ngIf"], ["class", "bg-amber-50 border border-amber-100 rounded-[32px] p-8 space-y-4", 4, "ngIf"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], ["placeholder", "Search by name or SKU...", 1, "input", "flex-1", 3, "ngModelChange", "ngModel"], [1, "input", "md:w-64", 3, "ngModelChange", "ngModel"], ["kind", "products", 3, "refresh", "rows"], [1, "btn-soft", 3, "click"], ["routerLink", "/products/add", 1, "btn-primary"], [1, "bg-amber-50", "border", "border-amber-100", "rounded-[32px]", "p-8", "space-y-4"], [1, "font-black", "text-amber-700", "uppercase", "tracking-widest", "text-sm"], [1, "grid", "md:grid-cols-3", "gap-4"], ["class", "bg-white rounded-2xl p-5 border border-amber-100 flex justify-between gap-4", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "p-5", "border", "border-amber-100", "flex", "justify-between", "gap-4"], [1, "font-bold", "text-gray-900", "text-sm"], [1, "text-[10px]", "text-gray-400"], [1, "px-4", "py-2", "bg-emerald-500", "text-white", "text-xs", "font-black", "rounded-xl", 3, "click"]], template: function ProductListPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header-card", 1);
            i0.ɵɵtemplate(2, ProductListPage_button_2_Template, 2, 1, "button", 2)(3, ProductListPage_button_3_Template, 2, 0, "button", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, ProductListPage_div_4_Template, 5, 1, "div", 4);
            i0.ɵɵelementStart(5, "div", 5)(6, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function ProductListPage_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ProductListPage_Template_input_ngModelChange_6_listener() { return ctx.load(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "select", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function ProductListPage_Template_select_ngModelChange_7_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.category, $event) || (ctx.category = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ProductListPage_Template_select_ngModelChange_7_listener() { return ctx.load(); });
            i0.ɵɵelementStart(8, "option");
            i0.ɵɵtext(9, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "option");
            i0.ɵɵtext(11, "ELECTRONIC");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "option");
            i0.ɵɵtext(13, "FURNITURE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "option");
            i0.ɵɵtext(15, "RAW_MATERIAL");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "option");
            i0.ɵɵtext(17, "CLOTHING");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option");
            i0.ɵɵtext(19, "STATIONERY");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(20, "data-table", 8);
            i0.ɵɵlistener("refresh", function ProductListPage_Template_data_table_refresh_20_listener() { return ctx.loadAll(); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.canManage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.canManage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showInactive);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.category);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("rows", ctx.products);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel, RouterLink,
            DataTableUiComponent,
            HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductListPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Product Inventory" subtitle="Manage and track your global stock levels.">
        <button class="btn-soft" *ngIf="canManage" (click)="showInactive=!showInactive">Deactivated ({{inactive.length}})</button>
        <button class="btn-primary" *ngIf="canManage" routerLink="/products/add">+ Add New Product</button>
      </header-card>
      <div *ngIf="showInactive" class="bg-amber-50 border border-amber-100 rounded-[32px] p-8 space-y-4">
        <h2 class="font-black text-amber-700 uppercase tracking-widest text-sm">Deactivated Products</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div *ngFor="let p of inactive" class="bg-white rounded-2xl p-5 border border-amber-100 flex justify-between gap-4">
            <div><p class="font-bold text-gray-900 text-sm">{{p.name}}</p><p class="text-[10px] text-gray-400">SKU: {{p.sku}}</p></div>
            <button class="px-4 py-2 bg-emerald-500 text-white text-xs font-black rounded-xl" (click)="reactivate(p)">Reactivate</button>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-4">
        <input class="input flex-1" placeholder="Search by name or SKU..." [(ngModel)]="search" (ngModelChange)="load()">
        <select class="input md:w-64" [(ngModel)]="category" (ngModelChange)="load()">
          <option>All</option><option>ELECTRONIC</option><option>FURNITURE</option><option>RAW_MATERIAL</option><option>CLOTHING</option><option>STATIONERY</option>
        </select>
      </div>
      <data-table [rows]="products" kind="products" (refresh)="loadAll()" />
    </div>
  `
            }]
    }], () => [{ type: i1.ProductService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductListPage, { className: "ProductListPage" }); })();
export class AddProductPage {
    api;
    router;
    form = { sku: "", name: "", brand: "", category: "", costPrice: "", sellingPrice: "", reorderLevel: "5", maxStockLevel: "100", unitOfMeasure: "pcs", barcode: "", imageUrl: "", leadTimeDays: "0" };
    fields = ["name", "sku", "barcode", "brand", "category", "costPrice", "sellingPrice", "unitOfMeasure", "leadTimeDays", "reorderLevel", "maxStockLevel", "imageUrl"];
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    save() { this.api.create(this.numeric()).subscribe(() => this.router.navigateByUrl("/products")); }
    numeric() { return { ...this.form, costPrice: +this.form.costPrice || 0, sellingPrice: +this.form.sellingPrice || 0, reorderLevel: +this.form.reorderLevel || 0, maxStockLevel: +this.form.maxStockLevel || 0, leadTimeDays: +this.form.leadTimeDays || 0 }; }
    static ɵfac = function AddProductPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddProductPage)(i0.ɵɵdirectiveInject(i1.ProductService), i0.ɵɵdirectiveInject(i4.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddProductPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 2, consts: [["title", "Register New Product", "back", "/products", 3, "save", "model", "fields"]], template: function AddProductPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "entity-form", 0);
            i0.ɵɵlistener("save", function AddProductPage_Template_entity_form_save_0_listener() { return ctx.save(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("model", ctx.form)("fields", ctx.fields);
        } }, dependencies: [CommonModule,
            FormsModule,
            EntityFormUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddProductPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `<entity-form title="Register New Product" back="/products" [model]="form" [fields]="fields" (save)="save()" />`
            }]
    }], () => [{ type: i1.ProductService }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddProductPage, { className: "AddProductPage" }); })();
export class EditProductPage extends AddProductPage {
    id = "";
    constructor(api, router, route) {
        super(api, router);
        this.id = route.snapshot.paramMap.get("id") || "";
        api.byId(this.id).subscribe((data) => this.form = data);
    }
    save() { this.api.update(this.id, this.numeric()).subscribe(() => this.router.navigateByUrl("/products")); }
    static ɵfac = function EditProductPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EditProductPage)(i0.ɵɵdirectiveInject(i1.ProductService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i4.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EditProductPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 2, consts: [["title", "Edit Product", "back", "/products", 3, "save", "model", "fields"]], template: function EditProductPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "entity-form", 0);
            i0.ɵɵlistener("save", function EditProductPage_Template_entity_form_save_0_listener() { return ctx.save(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("model", ctx.form)("fields", ctx.fields);
        } }, dependencies: [CommonModule,
            FormsModule,
            EntityFormUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditProductPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `<entity-form title="Edit Product" back="/products" [model]="form" [fields]="fields" (save)="save()" />`
            }]
    }], () => [{ type: i1.ProductService }, { type: i4.Router }, { type: i4.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EditProductPage, { className: "EditProductPage" }); })();
export class ProductDetailsPage {
    product = null;
    constructor(route, api) { api.byId(route.snapshot.paramMap.get("id") || "").subscribe((d) => this.product = d); }
    static ɵfac = function ProductDetailsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProductDetailsPage)(i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i1.ProductService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductDetailsPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["titleField", "name", "back", "/products", "editPrefix", "/products/edit", 3, "item"]], template: function ProductDetailsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "detail-page", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("item", ctx.product);
        } }, dependencies: [CommonModule,
            FormsModule,
            DetailPageUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductDetailsPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `<detail-page [item]="product" titleField="name" back="/products" editPrefix="/products/edit" />`
            }]
    }], () => [{ type: i4.ActivatedRoute }, { type: i1.ProductService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductDetailsPage, { className: "ProductDetailsPage" }); })();
export class WarehouseListPage {
    api;
    warehouses = [];
    isAdmin = roleFromToken() === "ADMIN";
    constructor(api) {
        this.api = api;
        this.api.all().subscribe((d) => this.warehouses = d || []);
    }
    percent(w) { return Math.round(((w.usedCapacity || 0) / (w.capacity || 1)) * 100); }
    static ɵfac = function WarehouseListPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WarehouseListPage)(i0.ɵɵdirectiveInject(i1.WarehouseService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WarehouseListPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 2, consts: [[1, "page-shell"], ["title", "Warehouse Hub", "subtitle", "Monitor capacity and manage global inventory nodes."], ["class", "btn-primary", "routerLink", "/warehouses/add", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all", 4, "ngFor", "ngForOf"], ["routerLink", "/warehouses/add", 1, "btn-primary"], [1, "bg-white", "p-6", "rounded-[24px]", "border", "border-gray-100", "shadow-sm", "hover:shadow-xl", "transition-all"], [1, "flex", "justify-between", "mb-6"], [1, "bg-purple-50", "p-4", "rounded-2xl", "text-[#7c3aed]"], [1, "badge", 3, "ngClass"], [1, "text-xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-400", "text-sm", "mb-4"], [1, "h-2", "bg-gray-100", "rounded-full", "overflow-hidden", "mb-2"], [1, "h-full", "bg-[#7c3aed]"], [1, "text-[10px]", "text-gray-400", "mb-6"], [1, "flex", "gap-2"], ["class", "btn-soft flex-1", 3, "routerLink", 4, "ngIf"], [1, "btn-soft", "flex-1", 3, "routerLink"]], template: function WarehouseListPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header-card", 1);
            i0.ɵɵtemplate(2, WarehouseListPage_button_2_Template, 2, 0, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, WarehouseListPage_div_4_Template, 18, 12, "div", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isAdmin);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.warehouses);
        } }, dependencies: [CommonModule, i2.NgClass, i2.NgForOf, i2.NgIf, FormsModule,
            RouterLink,
            HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WarehouseListPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Warehouse Hub" subtitle="Monitor capacity and manage global inventory nodes.">
        <button class="btn-primary" *ngIf="isAdmin" routerLink="/warehouses/add">+ New Warehouse</button>
      </header-card>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let w of warehouses" class="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div class="flex justify-between mb-6"><div class="bg-purple-50 p-4 rounded-2xl text-[#7c3aed]">▤</div><span class="badge" [ngClass]="w.isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'">{{w.isActive ? 'Active' : 'Maintenance'}}</span></div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{w.name}}</h3>
          <p class="text-gray-400 text-sm mb-4">{{w.location}}</p>
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden mb-2"><div class="h-full bg-[#7c3aed]" [style.width.%]="percent(w)"></div></div>
          <p class="text-[10px] text-gray-400 mb-6">{{w.usedCapacity || 0}} / {{w.capacity || 0}} Units Used</p>
          <div class="flex gap-2">
            <button class="btn-soft flex-1" *ngIf="isAdmin" [routerLink]="['/warehouses/edit', w.warehouseId]">Edit</button>
            <button class="btn-soft flex-1" [routerLink]="['/warehouses', w.warehouseId]">Manage</button>
          </div>
        </div>
      </div>
    </div>
  `
            }]
    }], () => [{ type: i1.WarehouseService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(WarehouseListPage, { className: "WarehouseListPage" }); })();
export class AddWarehousePage {
    api;
    router;
    form = { name: "", location: "", address: "", capacity: 10000, phone: "" };
    fields = ["name", "location", "phone", "capacity", "address"];
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    save() { this.api.create(this.form).subscribe(() => this.router.navigateByUrl("/warehouses")); }
    static ɵfac = function AddWarehousePage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddWarehousePage)(i0.ɵɵdirectiveInject(i1.WarehouseService), i0.ɵɵdirectiveInject(i4.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddWarehousePage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 2, consts: [["title", "Establish New Warehouse", "back", "/warehouses", 3, "save", "model", "fields"]], template: function AddWarehousePage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "entity-form", 0);
            i0.ɵɵlistener("save", function AddWarehousePage_Template_entity_form_save_0_listener() { return ctx.save(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("model", ctx.form)("fields", ctx.fields);
        } }, dependencies: [CommonModule,
            FormsModule,
            EntityFormUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddWarehousePage, [{
        type: Component,
        args: [{ standalone: true, imports: pageImports, template: `<entity-form title="Establish New Warehouse" back="/warehouses" [model]="form" [fields]="fields" (save)="save()" />` }]
    }], () => [{ type: i1.WarehouseService }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddWarehousePage, { className: "AddWarehousePage" }); })();
export class EditWarehousePage extends AddWarehousePage {
    id = "";
    constructor(api, router, route) {
        super(api, router);
        this.id = route.snapshot.paramMap.get("id") || "";
        api.byId(this.id).subscribe((d) => this.form = d);
    }
    save() { this.api.update(this.id, this.form).subscribe(() => this.router.navigateByUrl("/warehouses")); }
    static ɵfac = function EditWarehousePage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EditWarehousePage)(i0.ɵɵdirectiveInject(i1.WarehouseService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i4.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EditWarehousePage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 2, consts: [["title", "Edit Warehouse", "back", "/warehouses", 3, "save", "model", "fields"]], template: function EditWarehousePage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "entity-form", 0);
            i0.ɵɵlistener("save", function EditWarehousePage_Template_entity_form_save_0_listener() { return ctx.save(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("model", ctx.form)("fields", ctx.fields);
        } }, dependencies: [CommonModule,
            FormsModule,
            EntityFormUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditWarehousePage, [{
        type: Component,
        args: [{ standalone: true, imports: pageImports, template: `<entity-form title="Edit Warehouse" back="/warehouses" [model]="form" [fields]="fields" (save)="save()" />` }]
    }], () => [{ type: i1.WarehouseService }, { type: i4.Router }, { type: i4.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EditWarehousePage, { className: "EditWarehousePage" }); })();
export class WarehouseDetailsPage {
    wh;
    movements;
    products;
    id = "";
    inventory = [];
    history = [];
    adjustOpen = false;
    transferOpen = false;
    constructor(route, wh, movements, products) {
        this.wh = wh;
        this.movements = movements;
        this.products = products;
        this.id = route.snapshot.paramMap.get("id") || "";
        this.load();
    }
    load() {
        this.wh.inventory(this.id).subscribe((d) => this.inventory = d || []);
        this.movements.byWarehouse(this.id).subscribe((d) => this.history = d || []);
    }
    adjust(data) { this.products.bySku(data.sku).subscribe((p) => this.wh.stock(this.id, p.productId, data.qty, data.reason).subscribe(() => { this.adjustOpen = false; this.load(); })); }
    transfer(data) { this.products.bySku(data.sku).subscribe((p) => this.wh.transfer({ productId: p.productId, fromWarehouse: this.id, toWarehouse: data.targetId, qty: data.qty, reason: data.reason }).subscribe(() => { this.transferOpen = false; this.load(); })); }
    static ɵfac = function WarehouseDetailsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WarehouseDetailsPage)(i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i1.WarehouseService), i0.ɵɵdirectiveInject(i1.MovementService), i0.ɵɵdirectiveInject(i1.ProductService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WarehouseDetailsPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 18, vars: 7, consts: [[1, "page-shell"], ["title", "Node Control", 3, "subtitle"], [1, "btn-soft", 3, "click"], [1, "btn-primary", 3, "click"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "panel", "overflow-hidden"], [1, "p-6", "border-b", "border-gray-50"], [1, "font-black", "text-gray-900"], [3, "rows", "cols"], [1, "panel", "p-6", "space-y-4"], ["class", "p-4 bg-gray-50 rounded-2xl", 4, "ngFor", "ngForOf"], ["title", "Stock Adjustment", 3, "close", "save", 4, "ngIf"], ["title", "Inter-Node Transfer", 3, "transfer", "close", "save", 4, "ngIf"], [1, "p-4", "bg-gray-50", "rounded-2xl"], [1, "text-xs", "font-black", "text-gray-900"], [1, "text-xs", "text-gray-400"], ["title", "Stock Adjustment", 3, "close", "save"], ["title", "Inter-Node Transfer", 3, "close", "save", "transfer"]], template: function WarehouseDetailsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header-card", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function WarehouseDetailsPage_Template_button_click_2_listener() { return ctx.transferOpen = true; });
            i0.ɵɵtext(3, "Transfer Stock");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function WarehouseDetailsPage_Template_button_click_4_listener() { return ctx.adjustOpen = true; });
            i0.ɵɵtext(5, "Adjust Stock");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h2", 7);
            i0.ɵɵtext(10, "Live Inventory List");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(11, "table-list", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 9)(13, "h2", 7);
            i0.ɵɵtext(14, "Security Audit Log");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, WarehouseDetailsPage_div_15_Template, 5, 3, "div", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(16, WarehouseDetailsPage_stock_modal_16_Template, 1, 0, "stock-modal", 11)(17, WarehouseDetailsPage_stock_modal_17_Template, 1, 1, "stock-modal", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("subtitle", "Operational Hub #" + ctx.id);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("rows", ctx.inventory)("cols", i0.ɵɵpureFunction0(6, _c2));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.history);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.adjustOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.transferOpen);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, FormsModule,
            TableListUiComponent,
            HeaderCardUiComponent,
            StockModalUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WarehouseDetailsPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Node Control" [subtitle]="'Operational Hub #' + id">
        <button class="btn-soft" (click)="transferOpen=true">Transfer Stock</button>
        <button class="btn-primary" (click)="adjustOpen=true">Adjust Stock</button>
      </header-card>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 panel overflow-hidden">
          <div class="p-6 border-b border-gray-50"><h2 class="font-black text-gray-900">Live Inventory List</h2></div>
          <table-list [rows]="inventory" [cols]="['productId','quantity','minThreshold']" />
        </div>
        <div class="panel p-6 space-y-4"><h2 class="font-black text-gray-900">Security Audit Log</h2>
          <div *ngFor="let m of history" class="p-4 bg-gray-50 rounded-2xl"><p class="text-xs font-black text-gray-900">{{m.type}} · Product #{{m.productId}}</p><p class="text-xs text-gray-400">{{m.reason}}</p></div>
        </div>
      </div>
      <stock-modal *ngIf="adjustOpen" title="Stock Adjustment" (close)="adjustOpen=false" (save)="adjust($event)" />
      <stock-modal *ngIf="transferOpen" title="Inter-Node Transfer" [transfer]="true" (close)="transferOpen=false" (save)="transfer($event)" />
    </div>
  `
            }]
    }], () => [{ type: i4.ActivatedRoute }, { type: i1.WarehouseService }, { type: i1.MovementService }, { type: i1.ProductService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(WarehouseDetailsPage, { className: "WarehouseDetailsPage" }); })();
export class MovementsPage {
    api;
    movements = [];
    filters = { warehouseId: "", productId: "", type: "", from: "", to: "" };
    constructor(api) {
        this.api = api;
        this.load();
    }
    load() { this.api.filtered(this.filters).subscribe((d) => this.movements = (d || []).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())); }
    exportCsv() {
        const csv = this.movements.map((m) => [m.type, m.warehouseId, m.productId, m.quantity, m.reason, m.performedBy, m.timestamp].join(",")).join("\n");
        const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
        const a = document.createElement("a");
        a.href = url;
        a.download = "movements_export.csv";
        a.click();
        URL.revokeObjectURL(url);
    }
    static ɵfac = function MovementsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MovementsPage)(i0.ɵɵdirectiveInject(i1.MovementService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MovementsPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 26, vars: 7, consts: [[1, "page-shell"], ["title", "Stock Movements", "subtitle", "Full audit trail across all warehouses."], [1, "btn-soft", 3, "click"], [1, "panel", "p-6", "grid", "grid-cols-2", "md:grid-cols-5", "gap-4"], ["placeholder", "Warehouse ID", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Product ID", 1, "input", 3, "ngModelChange", "ngModel"], [1, "input", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "datetime-local", 1, "input", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click"], [3, "rows", "cols"]], template: function MovementsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header-card", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function MovementsPage_Template_button_click_2_listener() { return ctx.exportCsv(); });
            i0.ɵɵtext(3, "Export CSV");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3)(5, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function MovementsPage_Template_input_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filters.warehouseId, $event) || (ctx.filters.warehouseId = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function MovementsPage_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filters.productId, $event) || (ctx.filters.productId = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function MovementsPage_Template_select_ngModelChange_7_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filters.type, $event) || (ctx.filters.type = $event); return $event; });
            i0.ɵɵelementStart(8, "option", 7);
            i0.ɵɵtext(9, "All Types");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "option");
            i0.ɵɵtext(11, "IN");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "option");
            i0.ɵɵtext(13, "OUT");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "option");
            i0.ɵɵtext(15, "TRANSFER");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "option");
            i0.ɵɵtext(17, "ADJUSTMENT");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option");
            i0.ɵɵtext(19, "WRITE_OFF");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "option");
            i0.ɵɵtext(21, "RETURN");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function MovementsPage_Template_input_ngModelChange_22_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filters.from, $event) || (ctx.filters.from = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "button", 9);
            i0.ɵɵlistener("click", function MovementsPage_Template_button_click_23_listener() { return ctx.load(); });
            i0.ɵɵtext(24, "Apply");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(25, "table-list", 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filters.warehouseId);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.filters.productId);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.filters.type);
            i0.ɵɵadvance(15);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filters.from);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("rows", ctx.movements)("cols", i0.ɵɵpureFunction0(6, _c3));
        } }, dependencies: [CommonModule,
            FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel, TableListUiComponent,
            HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MovementsPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Stock Movements" subtitle="Full audit trail across all warehouses."><button class="btn-soft" (click)="exportCsv()">Export CSV</button></header-card>
      <div class="panel p-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        <input class="input" placeholder="Warehouse ID" [(ngModel)]="filters.warehouseId"><input class="input" placeholder="Product ID" [(ngModel)]="filters.productId">
        <select class="input" [(ngModel)]="filters.type"><option value="">All Types</option><option>IN</option><option>OUT</option><option>TRANSFER</option><option>ADJUSTMENT</option><option>WRITE_OFF</option><option>RETURN</option></select>
        <input class="input" type="datetime-local" [(ngModel)]="filters.from"><button class="btn-primary" (click)="load()">Apply</button>
      </div>
      <table-list [rows]="movements" [cols]="['type','warehouseId','productId','quantity','balanceAfter','reason','performedBy','timestamp']" />
    </div>
  `
            }]
    }], () => [{ type: i1.MovementService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MovementsPage, { className: "MovementsPage" }); })();
export class SupplierListPage {
    api;
    suppliers = [];
    search = "";
    filter = "all";
    canManage = ["ADMIN", "MANAGER"].includes(roleFromToken());
    constructor(api) {
        this.api = api;
        this.load();
    }
    get filtered() { return this.suppliers.filter((s) => this.filter === "all" || (this.filter === "active" ? s.isActive : !s.isActive)); }
    load() { (this.search ? this.api.search(this.search) : this.api.all()).subscribe((d) => this.suppliers = d || []); }
    static ɵfac = function SupplierListPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SupplierListPage)(i0.ɵɵdirectiveInject(i1.SupplierService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SupplierListPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 4, consts: [[1, "page-shell"], ["title", "Supplier Management", "subtitle", "Manage your supply chain partners and their performance."], ["class", "btn-primary", "routerLink", "/suppliers/add", 4, "ngIf"], [1, "flex", "gap-4"], ["placeholder", "Search suppliers...", 1, "input", "flex-1", 3, "ngModelChange", "ngModel"], [1, "input", "w-48", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white rounded-3xl border border-gray-200 p-6 shadow-sm", 4, "ngFor", "ngForOf"], ["routerLink", "/suppliers/add", 1, "btn-primary"], [1, "bg-white", "rounded-3xl", "border", "border-gray-200", "p-6", "shadow-sm"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-500", "mb-3"], [1, "text-yellow-500", "mb-4"], [1, "text-xs", "text-gray-500"], [1, "text-sm", "text-gray-600"], [1, "flex", "gap-2", "mt-6"], [1, "btn-soft", "flex-1", 3, "routerLink"], ["class", "btn-soft", 3, "routerLink", 4, "ngIf"], [1, "btn-soft", 3, "routerLink"]], template: function SupplierListPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header-card", 1);
            i0.ɵɵtemplate(2, SupplierListPage_button_2_Template, 2, 0, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3)(4, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function SupplierListPage_Template_input_ngModelChange_4_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function SupplierListPage_Template_input_ngModelChange_4_listener() { return ctx.load(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "select", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function SupplierListPage_Template_select_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event); return $event; });
            i0.ɵɵelementStart(6, "option");
            i0.ɵɵtext(7, "all");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "option");
            i0.ɵɵtext(9, "active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "option");
            i0.ɵɵtext(11, "inactive");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 6);
            i0.ɵɵtemplate(13, SupplierListPage_div_13_Template, 17, 10, "div", 7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.canManage);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.filtered);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel, RouterLink,
            HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SupplierListPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Supplier Management" subtitle="Manage your supply chain partners and their performance."><button class="btn-primary" *ngIf="canManage" routerLink="/suppliers/add">+ Add New Supplier</button></header-card>
      <div class="flex gap-4"><input class="input flex-1" placeholder="Search suppliers..." [(ngModel)]="search" (ngModelChange)="load()"><select class="input w-48" [(ngModel)]="filter"><option>all</option><option>active</option><option>inactive</option></select></div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let s of filtered" class="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <h3 class="text-xl font-bold text-gray-900">{{s.name}}</h3><p class="text-sm text-gray-500 mb-3">{{s.contactPerson}}</p><p class="text-yellow-500 mb-4">★★★★★ <span class="text-xs text-gray-500">({{s.rating || 0}})</span></p>
          <p class="text-sm text-gray-600">{{s.city}}, {{s.country}}</p><p class="text-sm text-gray-600">{{s.email}}</p>
          <div class="flex gap-2 mt-6"><button class="btn-soft flex-1" [routerLink]="['/suppliers', s.supplierId || s.id]">View</button><button class="btn-soft" *ngIf="canManage" [routerLink]="['/suppliers/edit', s.supplierId || s.id]">Edit</button></div>
        </div>
      </div>
    </div>
  `
            }]
    }], () => [{ type: i1.SupplierService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SupplierListPage, { className: "SupplierListPage" }); })();
export class AddSupplierPage {
    api;
    router;
    form = { name: "", contactPerson: "", email: "", phone: "", address: "", city: "", country: "", taxId: "", paymentTerms: "NET-30", leadTimeDays: 7 };
    fields = ["name", "contactPerson", "email", "phone", "address", "city", "country", "taxId", "paymentTerms", "leadTimeDays"];
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    save() { this.api.create(this.form).subscribe(() => this.router.navigateByUrl("/suppliers")); }
    static ɵfac = function AddSupplierPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddSupplierPage)(i0.ɵɵdirectiveInject(i1.SupplierService), i0.ɵɵdirectiveInject(i4.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddSupplierPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 2, consts: [["title", "Add New Supplier", "back", "/suppliers", 3, "save", "model", "fields"]], template: function AddSupplierPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "entity-form", 0);
            i0.ɵɵlistener("save", function AddSupplierPage_Template_entity_form_save_0_listener() { return ctx.save(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("model", ctx.form)("fields", ctx.fields);
        } }, dependencies: [CommonModule,
            FormsModule,
            EntityFormUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddSupplierPage, [{
        type: Component,
        args: [{ standalone: true, imports: pageImports, template: `<entity-form title="Add New Supplier" back="/suppliers" [model]="form" [fields]="fields" (save)="save()" />` }]
    }], () => [{ type: i1.SupplierService }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddSupplierPage, { className: "AddSupplierPage" }); })();
export class EditSupplierPage extends AddSupplierPage {
    id = "";
    constructor(api, router, route) { super(api, router); this.id = route.snapshot.paramMap.get("id") || ""; api.byId(this.id).subscribe((d) => this.form = d); }
    save() { this.api.update(this.id, this.form).subscribe(() => this.router.navigateByUrl("/suppliers")); }
    static ɵfac = function EditSupplierPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EditSupplierPage)(i0.ɵɵdirectiveInject(i1.SupplierService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i4.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EditSupplierPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 2, consts: [["title", "Edit Supplier", "back", "/suppliers", 3, "save", "model", "fields"]], template: function EditSupplierPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "entity-form", 0);
            i0.ɵɵlistener("save", function EditSupplierPage_Template_entity_form_save_0_listener() { return ctx.save(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("model", ctx.form)("fields", ctx.fields);
        } }, dependencies: [CommonModule,
            FormsModule,
            EntityFormUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditSupplierPage, [{
        type: Component,
        args: [{ standalone: true, imports: pageImports, template: `<entity-form title="Edit Supplier" back="/suppliers" [model]="form" [fields]="fields" (save)="save()" />` }]
    }], () => [{ type: i1.SupplierService }, { type: i4.Router }, { type: i4.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EditSupplierPage, { className: "EditSupplierPage" }); })();
export class SupplierDetailsPage {
    supplier;
    constructor(route, api) { api.byId(route.snapshot.paramMap.get("id") || "").subscribe((d) => this.supplier = d); }
    static ɵfac = function SupplierDetailsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SupplierDetailsPage)(i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i1.SupplierService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SupplierDetailsPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["titleField", "name", "back", "/suppliers", "editPrefix", "/suppliers/edit", 3, "item"]], template: function SupplierDetailsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "detail-page", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("item", ctx.supplier);
        } }, dependencies: [CommonModule,
            FormsModule,
            DetailPageUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SupplierDetailsPage, [{
        type: Component,
        args: [{ standalone: true, imports: pageImports, template: `<detail-page [item]="supplier" titleField="name" back="/suppliers" editPrefix="/suppliers/edit" />` }]
    }], () => [{ type: i4.ActivatedRoute }, { type: i1.SupplierService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SupplierDetailsPage, { className: "SupplierDetailsPage" }); })();
export class UserListPage {
    users = [];
    constructor(api) { api.all().subscribe((d) => this.users = d || []); }
    static ɵfac = function UserListPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserListPage)(i0.ɵɵdirectiveInject(i1.UserService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserListPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 3, consts: [[1, "page-shell"], ["title", "User Management", "subtitle", "Manage staff roles and access permissions."], [3, "rows", "cols"]], template: function UserListPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "header-card", 1)(2, "table-list", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rows", ctx.users)("cols", i0.ɵɵpureFunction0(2, _c6));
        } }, dependencies: [CommonModule,
            FormsModule,
            TableListUiComponent,
            HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserListPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `<div class="page-shell"><header-card title="User Management" subtitle="Manage staff roles and access permissions." /><table-list [rows]="users" [cols]="['fullName','email','role','active']" /></div>`
            }]
    }], () => [{ type: i1.UserService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserListPage, { className: "UserListPage" }); })();
export class AlertCentrePage {
    api;
    alerts = [];
    filters = { type: "", severity: "", acknowledged: "" };
    get unack() { return this.alerts.filter((a) => !a.acknowledged).length; }
    get critical() { return this.alerts.filter((a) => a.severity === "CRITICAL").length; }
    constructor(api) {
        this.api = api;
        this.load();
    }
    load() { this.api.all(this.filters).subscribe((d) => this.alerts = d || []); }
    static ɵfac = function AlertCentrePage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertCentrePage)(i0.ɵɵdirectiveInject(i1.AlertService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertCentrePage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 33, vars: 9, consts: [[1, "page-shell"], ["title", "Alert Centre", "subtitle", "Real-time inventory & procurement alerts."], [1, "btn-soft", 3, "click"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], ["label", "Total Alerts", 3, "value"], ["label", "Unacknowledged", 3, "value"], ["label", "Critical", 3, "value"], ["label", "Resolved", 3, "value"], [1, "panel", "p-6", "flex", "flex-wrap", "gap-3"], [1, "input", "w-48", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "rows", "cols"]], template: function AlertCentrePage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header-card", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function AlertCentrePage_Template_button_click_2_listener() { return ctx.load(); });
            i0.ɵɵtext(3, "Refresh");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "stat", 4)(6, "stat", 5)(7, "stat", 6)(8, "stat", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 8)(10, "select", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function AlertCentrePage_Template_select_ngModelChange_10_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filters.type, $event) || (ctx.filters.type = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function AlertCentrePage_Template_select_ngModelChange_10_listener() { return ctx.load(); });
            i0.ɵɵelementStart(11, "option", 10);
            i0.ɵɵtext(12, "All Types");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "option");
            i0.ɵɵtext(14, "LOW_STOCK");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "option");
            i0.ɵɵtext(16, "OVERSTOCK");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "option");
            i0.ɵɵtext(18, "PO_PENDING");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "option");
            i0.ɵɵtext(20, "OVERDUE_PO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "option");
            i0.ɵɵtext(22, "SYSTEM");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "select", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function AlertCentrePage_Template_select_ngModelChange_23_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filters.severity, $event) || (ctx.filters.severity = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function AlertCentrePage_Template_select_ngModelChange_23_listener() { return ctx.load(); });
            i0.ɵɵelementStart(24, "option", 10);
            i0.ɵɵtext(25, "All Severities");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "option");
            i0.ɵɵtext(27, "CRITICAL");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "option");
            i0.ɵɵtext(29, "WARNING");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "option");
            i0.ɵɵtext(31, "INFO");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(32, "table-list", 11);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.alerts.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("value", ctx.unack);
            i0.ɵɵadvance();
            i0.ɵɵproperty("value", ctx.critical);
            i0.ɵɵadvance();
            i0.ɵɵproperty("value", ctx.alerts.length - ctx.unack);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filters.type);
            i0.ɵɵadvance(13);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filters.severity);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("rows", ctx.alerts)("cols", i0.ɵɵpureFunction0(8, _c7));
        } }, dependencies: [CommonModule,
            FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel, StatUiComponent,
            TableListUiComponent,
            HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertCentrePage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Alert Centre" subtitle="Real-time inventory & procurement alerts."><button class="btn-soft" (click)="load()">Refresh</button></header-card>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4"><stat label="Total Alerts" [value]="alerts.length" /><stat label="Unacknowledged" [value]="unack" /><stat label="Critical" [value]="critical" /><stat label="Resolved" [value]="alerts.length - unack" /></div>
      <div class="panel p-6 flex flex-wrap gap-3"><select class="input w-48" [(ngModel)]="filters.type" (ngModelChange)="load()"><option value="">All Types</option><option>LOW_STOCK</option><option>OVERSTOCK</option><option>PO_PENDING</option><option>OVERDUE_PO</option><option>SYSTEM</option></select><select class="input w-48" [(ngModel)]="filters.severity" (ngModelChange)="load()"><option value="">All Severities</option><option>CRITICAL</option><option>WARNING</option><option>INFO</option></select></div>
      <table-list [rows]="alerts" [cols]="['severity','alertType','title','message','productId','createdAt','acknowledged']" />
    </div>
  `
            }]
    }], () => [{ type: i1.AlertService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertCentrePage, { className: "AlertCentrePage" }); })();
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
            i0.ɵɵproperty("rows", ctx.orders)("cols", i0.ɵɵpureFunction0(5, _c8));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showCreate);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, FormsModule,
            TableListUiComponent,
            HeaderCardUiComponent,
            PoModalUiComponent], encapsulation: 2 });
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
export class ReportsPage {
    api;
    valuation = 0;
    topMoving = [];
    deadStock = [];
    utilization = [];
    supplierSpend = [];
    constructor(api) {
        this.api = api;
        this.load();
    }
    load() {
        this.api.valuation().subscribe((d) => this.valuation = d || 0);
        this.api.topMoving(10).subscribe((d) => this.topMoving = d || []);
        this.api.deadStock().subscribe((d) => this.deadStock = d || []);
        this.api.utilization().subscribe((d) => this.utilization = d || []);
        this.api.supplierSpend().subscribe((d) => this.supplierSpend = d || []);
    }
    download(type) { this.api.downloadCsv(type, `${type}.csv`); }
    static ɵfac = function ReportsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportsPage)(i0.ɵɵdirectiveInject(i1.AnalyticsService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReportsPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 18, vars: 8, consts: [[1, "page-shell"], ["title", "Analytics & Reports", "subtitle", "Inventory intelligence & CSV exports."], [1, "btn-soft", 3, "click"], [1, "bg-gradient-to-br", "from-[#7c3aed]", "to-[#4f46e5]", "rounded-[40px]", "p-10", "text-white", "flex", "justify-between", "gap-6"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "opacity-70"], [1, "text-5xl", "font-black"], [1, "bg-white/20", "hover:bg-white/30", "text-white", "font-black", "px-6", "py-3", "rounded-2xl", 3, "click"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-8"], ["title", "Top Moving Products", 3, "rows"], ["title", "Dead Stock Report", 3, "rows"], ["title", "Warehouse Utilization", 3, "rows"], ["title", "Supplier Spend Rankings", 3, "rows"]], template: function ReportsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header-card", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function ReportsPage_Template_button_click_2_listener() { return ctx.load(); });
            i0.ɵɵtext(3, "Refresh");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3)(5, "div")(6, "p", 4);
            i0.ɵɵtext(7, "Total Inventory Value");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h2", 5);
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "button", 6);
            i0.ɵɵlistener("click", function ReportsPage_Template_button_click_11_listener() { return ctx.download("valuation"); });
            i0.ɵɵtext(12, "Export CSV");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 7);
            i0.ɵɵelement(14, "report", 8)(15, "report", 9)(16, "report", 10)(17, "report", 11);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("\u20B9", i0.ɵɵpipeBind2(10, 5, ctx.valuation, "1.0-0"), "");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("rows", ctx.topMoving);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rows", ctx.deadStock);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rows", ctx.utilization);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rows", ctx.supplierSpend);
        } }, dependencies: [CommonModule, i2.DecimalPipe, FormsModule,
            HeaderCardUiComponent,
            ReportUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportsPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Analytics & Reports" subtitle="Inventory intelligence & CSV exports."><button class="btn-soft" (click)="load()">Refresh</button></header-card>
      <div class="bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] rounded-[40px] p-10 text-white flex justify-between gap-6">
        <div><p class="text-xs font-black uppercase tracking-widest opacity-70">Total Inventory Value</p><h2 class="text-5xl font-black">₹{{valuation | number:'1.0-0'}}</h2></div>
        <button class="bg-white/20 hover:bg-white/30 text-white font-black px-6 py-3 rounded-2xl" (click)="download('valuation')">Export CSV</button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <report title="Top Moving Products" [rows]="topMoving" />
        <report title="Dead Stock Report" [rows]="deadStock" />
        <report title="Warehouse Utilization" [rows]="utilization" />
        <report title="Supplier Spend Rankings" [rows]="supplierSpend" />
      </div>
    </div>
  `
            }]
    }], () => [{ type: i1.AnalyticsService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReportsPage, { className: "ReportsPage" }); })();
export class TableListComponent {
    rows = [];
    cols = [];
    static ɵfac = function TableListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TableListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableListComponent, selectors: [["ng-component"]], inputs: { rows: "rows", cols: "cols" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 9, vars: 3, consts: [[1, "panel", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-left"], [1, "bg-gray-50/50"], ["class", "p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest", 4, "ngFor", "ngForOf"], [1, "divide-y", "divide-gray-50"], ["class", "hover:bg-purple-50/20", 4, "ngFor", "ngForOf"], ["class", "p-16 text-center text-gray-300 font-black uppercase tracking-widest text-xs", 4, "ngIf"], [1, "p-5", "text-[10px]", "font-black", "text-gray-400", "uppercase", "tracking-widest"], [1, "hover:bg-purple-50/20"], ["class", "p-5 text-sm text-gray-700", 4, "ngFor", "ngForOf"], [1, "p-5", "text-sm", "text-gray-700"], [1, "p-16", "text-center", "text-gray-300", "font-black", "uppercase", "tracking-widest", "text-xs"]], template: function TableListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead", 3)(4, "tr");
            i0.ɵɵtemplate(5, TableListComponent_th_5_Template, 2, 1, "th", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "tbody", 5);
            i0.ɵɵtemplate(7, TableListComponent_tr_7_Template, 2, 1, "tr", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(8, TableListComponent_div_8_Template, 2, 0, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.cols);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.rows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.rows.length);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableListComponent, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule], inputs: ["rows", "cols"], template: `
  <div class="panel overflow-hidden"><div class="overflow-x-auto"><table class="w-full text-left">
    <thead class="bg-gray-50/50"><tr><th *ngFor="let c of cols" class="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">{{c}}</th></tr></thead>
    <tbody class="divide-y divide-gray-50"><tr *ngFor="let row of rows" class="hover:bg-purple-50/20"><td *ngFor="let c of cols" class="p-5 text-sm text-gray-700">{{row[c] ?? '—'}}</td></tr></tbody>
  </table></div><div *ngIf="!rows.length" class="p-16 text-center text-gray-300 font-black uppercase tracking-widest text-xs">No records found</div></div>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TableListComponent, { className: "TableListComponent" }); })();
export class DataTableComponent {
    rows = [];
    kind = "";
    refresh = { emit() { } };
    static ɵfac = function DataTableComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataTableComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableComponent, selectors: [["data-table"]], inputs: { rows: "rows", kind: "kind" }, outputs: { refresh: "refresh" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 15, vars: 1, consts: [[1, "panel", "overflow-hidden"], [1, "w-full", "text-left"], [1, "bg-gray-50/50"], [1, "p-5", "text-[11px]", "font-black", "text-gray-900", "uppercase", "tracking-widest"], [1, "p-5"], ["class", "hover:bg-purple-50/30", 4, "ngFor", "ngForOf"], [1, "hover:bg-purple-50/30"], [1, "font-bold", "text-gray-900"], [1, "text-[10px]", "text-gray-400"], [1, "badge", "bg-gray-100", "text-gray-600"], [1, "p-5", "font-black", "text-gray-900"], [1, "p-5", "text-sm", "text-gray-600"], [1, "btn-soft", 3, "routerLink"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "table", 1)(2, "thead", 2)(3, "tr")(4, "th", 3);
            i0.ɵɵtext(5, "Product Info");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "th", 3);
            i0.ɵɵtext(7, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "th", 3);
            i0.ɵɵtext(9, "Price");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "th", 3);
            i0.ɵɵtext(11, "Inventory");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "th", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "tbody");
            i0.ɵɵtemplate(14, DataTableComponent_tr_14_Template, 16, 8, "tr", 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngForOf", ctx.rows);
        } }, dependencies: [CommonModule, i2.NgForOf, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableComponent, [{
        type: Component,
        args: [{ selector: "data-table", standalone: true, imports: [CommonModule, RouterLink], inputs: ["rows", "kind"], outputs: ["refresh"], template: `
  <div class="panel overflow-hidden"><table class="w-full text-left"><thead class="bg-gray-50/50"><tr><th class="p-5 text-[11px] font-black text-gray-900 uppercase tracking-widest">Product Info</th><th class="p-5 text-[11px] font-black text-gray-900 uppercase tracking-widest">Category</th><th class="p-5 text-[11px] font-black text-gray-900 uppercase tracking-widest">Price</th><th class="p-5 text-[11px] font-black text-gray-900 uppercase tracking-widest">Inventory</th><th class="p-5"></th></tr></thead>
    <tbody><tr *ngFor="let p of rows" class="hover:bg-purple-50/30"><td class="p-5"><p class="font-bold text-gray-900">{{p.name}}</p><p class="text-[10px] text-gray-400">SKU: {{p.sku}}</p></td><td class="p-5"><span class="badge bg-gray-100 text-gray-600">{{p.category || 'General'}}</span></td><td class="p-5 font-black text-gray-900">₹{{p.sellingPrice}}</td><td class="p-5 text-sm text-gray-600">{{p.totalStock || 0}} Units Global</td><td class="p-5"><a class="btn-soft" [routerLink]="['/products', p.productId]">View</a></td></tr></tbody>
  </table></div>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataTableComponent, { className: "DataTableComponent" }); })();
export class HeaderCardComponent {
    title = "";
    subtitle = "";
    static ɵfac = function HeaderCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HeaderCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeaderCardComponent, selectors: [["header-card"]], inputs: { title: "title", subtitle: "subtitle" }, standalone: true, features: [i0.ɵɵStandaloneFeature], ngContentSelectors: _c10, decls: 8, vars: 2, consts: [[1, "flex", "flex-col", "lg:flex-row", "justify-between", "items-start", "lg:items-center", "bg-white", "p-6", "md:p-8", "rounded-[32px]", "border", "border-gray-50", "shadow-sm", "gap-6"], [1, "text-2xl", "md:text-3xl", "font-black", "text-gray-900", "tracking-tight"], [1, "text-xs", "md:text-sm", "text-gray-400", "mt-1"], [1, "flex", "gap-3"]], template: function HeaderCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "h1", 1);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.subtitle);
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeaderCardComponent, [{
        type: Component,
        args: [{ selector: "header-card", standalone: true, imports: [CommonModule], inputs: ["title", "subtitle"], template: `<div class="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white p-6 md:p-8 rounded-[32px] border border-gray-50 shadow-sm gap-6"><div><h1 class="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{{title}}</h1><p class="text-xs md:text-sm text-gray-400 mt-1">{{subtitle}}</p></div><div class="flex gap-3"><ng-content /></div></div>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HeaderCardComponent, { className: "HeaderCardComponent" }); })();
export class EntityFormComponent {
    title = "";
    back = "";
    model = {};
    fields = [];
    save = { emit() { } };
    static ɵfac = function EntityFormComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EntityFormComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntityFormComponent, selectors: [["entity-form"]], inputs: { title: "title", back: "back", model: "model", fields: "fields" }, outputs: { save: "save" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 4, consts: [[1, "p-4", "md:p-6", "max-w-4xl", "mx-auto"], [1, "inline-flex", "text-gray-500", "hover:text-indigo-600", "mb-6", "font-medium", 3, "routerLink"], [1, "bg-white", "rounded-[2rem]", "border", "border-gray-200", "shadow-xl", "overflow-hidden"], [1, "bg-gradient-to-r", "from-indigo-600", "to-violet-600", "p-8", "text-white"], [1, "text-2xl", "font-bold"], [1, "p-8", "grid", "md:grid-cols-2", "gap-6", 3, "ngSubmit"], ["class", "block", 4, "ngFor", "ngForOf"], [1, "md:col-span-2", "flex", "justify-end", "gap-4"], [1, "btn-soft", 3, "routerLink"], [1, "btn-primary"], [1, "block"], [1, "block", "text-sm", "font-semibold", "text-gray-700", "mb-2"], [1, "input", 3, "ngModelChange", "ngModel", "name"]], template: function EntityFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵtext(2, "\u2190 Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "h1", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "form", 5);
            i0.ɵɵlistener("ngSubmit", function EntityFormComponent_Template_form_ngSubmit_7_listener() { return ctx.save.emit(); });
            i0.ɵɵtemplate(8, EntityFormComponent_label_8_Template, 4, 3, "label", 6);
            i0.ɵɵelementStart(9, "div", 7)(10, "a", 8);
            i0.ɵɵtext(11, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 9);
            i0.ɵɵtext(13, "Save");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", ctx.back);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.fields);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", ctx.back);
        } }, dependencies: [CommonModule, i2.NgForOf, FormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.NgModel, i3.NgForm, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntityFormComponent, [{
        type: Component,
        args: [{ selector: "entity-form", standalone: true, imports: [CommonModule, FormsModule, RouterLink], inputs: ["title", "back", "model", "fields"], outputs: ["save"], template: `<div class="p-4 md:p-6 max-w-4xl mx-auto"><a [routerLink]="back" class="inline-flex text-gray-500 hover:text-indigo-600 mb-6 font-medium">← Back</a><div class="bg-white rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden"><div class="bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white"><h1 class="text-2xl font-bold">{{title}}</h1></div><form class="p-8 grid md:grid-cols-2 gap-6" (ngSubmit)="save.emit()"><label *ngFor="let f of fields" class="block"><span class="block text-sm font-semibold text-gray-700 mb-2">{{f}}</span><input class="input" [(ngModel)]="model[f]" [name]="f"></label><div class="md:col-span-2 flex justify-end gap-4"><a [routerLink]="back" class="btn-soft">Cancel</a><button class="btn-primary">Save</button></div></form></div></div>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EntityFormComponent, { className: "EntityFormComponent" }); })();
export class DetailPageComponent {
    item;
    titleField = "name";
    back = "/";
    editPrefix = "";
    static ɵfac = function DetailPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DetailPageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailPageComponent, selectors: [["detail-page"]], inputs: { item: "item", titleField: "titleField", back: "back", editPrefix: "editPrefix" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 2, consts: [[1, "max-w-5xl", "mx-auto", "p-4"], [1, "text-gray-400", "hover:text-[#7c3aed]", "font-black", "uppercase", "text-xs", 3, "routerLink"], ["class", "grid lg:grid-cols-3 gap-8 mt-8", 4, "ngIf"], [1, "grid", "lg:grid-cols-3", "gap-8", "mt-8"], [1, "bg-white", "p-4", "rounded-[40px]", "border", "border-gray-50"], [1, "aspect-square", "rounded-[32px]", "bg-gray-50", "flex", "items-center", "justify-center", "text-7xl", "text-gray-200"], [1, "lg:col-span-2", "bg-white", "p-10", "rounded-[40px]", "border", "border-gray-50"], [1, "text-4xl", "font-black", "text-gray-900", "mb-4"], [1, "grid", "md:grid-cols-2", "gap-4"], ["class", "p-4 bg-gray-50 rounded-2xl", 4, "ngFor", "ngForOf"], ["class", "btn-primary inline-block mt-6", 3, "routerLink", 4, "ngIf"], [1, "p-4", "bg-gray-50", "rounded-2xl"], [1, "text-[10px]", "text-gray-400", "uppercase", "font-black"], [1, "text-gray-900", "font-bold"], [1, "btn-primary", "inline-block", "mt-6", 3, "routerLink"]], template: function DetailPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵtext(2, "\u2190 Back");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, DetailPageComponent_div_3_Template, 11, 5, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", ctx.back);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.item);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, i2.KeyValuePipe, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailPageComponent, [{
        type: Component,
        args: [{ selector: "detail-page", standalone: true, imports: [CommonModule, RouterLink], inputs: ["item", "titleField", "back", "editPrefix"], template: `<div class="max-w-5xl mx-auto p-4"><a [routerLink]="back" class="text-gray-400 hover:text-[#7c3aed] font-black uppercase text-xs">← Back</a><div *ngIf="item" class="grid lg:grid-cols-3 gap-8 mt-8"><div class="bg-white p-4 rounded-[40px] border border-gray-50"><div class="aspect-square rounded-[32px] bg-gray-50 flex items-center justify-center text-7xl text-gray-200">▣</div></div><div class="lg:col-span-2 bg-white p-10 rounded-[40px] border border-gray-50"><h1 class="text-4xl font-black text-gray-900 mb-4">{{item[titleField]}}</h1><div class="grid md:grid-cols-2 gap-4"><div *ngFor="let kv of item | keyvalue" class="p-4 bg-gray-50 rounded-2xl"><p class="text-[10px] text-gray-400 uppercase font-black">{{kv.key}}</p><p class="text-gray-900 font-bold">{{kv.value}}</p></div></div><a *ngIf="editPrefix" [routerLink]="[editPrefix, item.productId || item.supplierId || item.id]" class="btn-primary inline-block mt-6">Edit</a></div></div></div>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DetailPageComponent, { className: "DetailPageComponent" }); })();
export class StockModalComponent {
    title = "";
    transfer = false;
    form = { sku: "", targetId: "", qty: 1, reason: "Manual Adjustment" };
    close = { emit() { } };
    save = { emit(_) { } };
    static ɵfac = function StockModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StockModalComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StockModalComponent, selectors: [["stock-modal"]], inputs: { title: "title", transfer: "transfer" }, outputs: { close: "close", save: "save" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 5, consts: [[1, "fixed", "inset-0", "bg-gray-900/60", "z-50", "flex", "items-center", "justify-center", "p-6"], [1, "bg-white", "w-full", "max-w-md", "rounded-[40px]", "shadow-2xl", "p-10", "space-y-6"], [1, "text-xl", "font-black", "text-gray-900"], ["placeholder", "Product SKU", 1, "input", 3, "ngModelChange", "ngModel"], ["class", "input", "placeholder", "Target Warehouse ID", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "number", "placeholder", "Quantity", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Reason", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3"], [1, "btn-soft", "flex-1", 3, "click"], [1, "btn-primary", "flex-1", 3, "click"], ["placeholder", "Target Warehouse ID", 1, "input", 3, "ngModelChange", "ngModel"]], template: function StockModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 3);
            i0.ɵɵtwoWayListener("ngModelChange", function StockModalComponent_Template_input_ngModelChange_4_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.sku, $event) || (ctx.form.sku = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, StockModalComponent_input_5_Template, 1, 1, "input", 4);
            i0.ɵɵelementStart(6, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function StockModalComponent_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.qty, $event) || (ctx.form.qty = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "textarea", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function StockModalComponent_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.reason, $event) || (ctx.form.reason = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7)(9, "button", 8);
            i0.ɵɵlistener("click", function StockModalComponent_Template_button_click_9_listener() { return ctx.close.emit(); });
            i0.ɵɵtext(10, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 9);
            i0.ɵɵlistener("click", function StockModalComponent_Template_button_click_11_listener() { return ctx.save.emit(ctx.form); });
            i0.ɵɵtext(12, "Save");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.sku);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.transfer);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.qty);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.reason);
        } }, dependencies: [CommonModule, i2.NgIf, FormsModule, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.NgControlStatus, i3.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StockModalComponent, [{
        type: Component,
        args: [{ selector: "stock-modal", standalone: true, imports: [CommonModule, FormsModule], inputs: ["title", "transfer"], outputs: ["close", "save"], template: `<div class="fixed inset-0 bg-gray-900/60 z-50 flex items-center justify-center p-6"><div class="bg-white w-full max-w-md rounded-[40px] shadow-2xl p-10 space-y-6"><h2 class="text-xl font-black text-gray-900">{{title}}</h2><input class="input" placeholder="Product SKU" [(ngModel)]="form.sku"><input *ngIf="transfer" class="input" placeholder="Target Warehouse ID" [(ngModel)]="form.targetId"><input class="input" type="number" placeholder="Quantity" [(ngModel)]="form.qty"><textarea class="input" placeholder="Reason" [(ngModel)]="form.reason"></textarea><div class="flex gap-3"><button class="btn-soft flex-1" (click)="close.emit()">Cancel</button><button class="btn-primary flex-1" (click)="save.emit(form)">Save</button></div></div></div>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StockModalComponent, { className: "StockModalComponent" }); })();
export class PoModalComponent {
    api;
    form = { supplierId: "", warehouseId: "", expectedDeliveryDate: "", notes: "", items: [] };
    close = { emit() { } };
    created = { emit() { } };
    constructor(api) {
        this.api = api;
    }
    submit() { this.api.create({ ...this.form, supplierId: +this.form.supplierId, warehouseId: +this.form.warehouseId }).subscribe(() => { this.created.emit(); this.close.emit(); }); }
    static ɵfac = function PoModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PoModalComponent)(i0.ɵɵdirectiveInject(i1.PurchaseService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoModalComponent, selectors: [["po-modal"]], outputs: { close: "close", created: "created" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 4, consts: [[1, "fixed", "inset-0", "bg-black/40", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "bg-white", "rounded-[32px]", "p-8", "w-full", "max-w-2xl", "space-y-4"], [1, "text-xl", "font-black", "text-gray-900"], ["placeholder", "Supplier ID", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Warehouse ID", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Notes", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3"], [1, "btn-soft", "flex-1", 3, "click"], [1, "btn-primary", "flex-1", 3, "click"]], template: function PoModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
            i0.ɵɵtext(3, "New Purchase Order");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 3);
            i0.ɵɵtwoWayListener("ngModelChange", function PoModalComponent_Template_input_ngModelChange_4_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.supplierId, $event) || (ctx.form.supplierId = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function PoModalComponent_Template_input_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.warehouseId, $event) || (ctx.form.warehouseId = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function PoModalComponent_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.expectedDeliveryDate, $event) || (ctx.form.expectedDeliveryDate = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "textarea", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function PoModalComponent_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.notes, $event) || (ctx.form.notes = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7)(9, "button", 8);
            i0.ɵɵlistener("click", function PoModalComponent_Template_button_click_9_listener() { return ctx.close.emit(); });
            i0.ɵɵtext(10, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 9);
            i0.ɵɵlistener("click", function PoModalComponent_Template_button_click_11_listener() { return ctx.submit(); });
            i0.ɵɵtext(12, "Create Order");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.supplierId);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.warehouseId);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.expectedDeliveryDate);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.notes);
        } }, dependencies: [CommonModule, FormsModule, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalComponent, [{
        type: Component,
        args: [{ selector: "po-modal", standalone: true, imports: [CommonModule, FormsModule], outputs: ["close", "created"], template: `<div class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"><div class="bg-white rounded-[32px] p-8 w-full max-w-2xl space-y-4"><h3 class="text-xl font-black text-gray-900">New Purchase Order</h3><input class="input" placeholder="Supplier ID" [(ngModel)]="form.supplierId"><input class="input" placeholder="Warehouse ID" [(ngModel)]="form.warehouseId"><input class="input" type="datetime-local" [(ngModel)]="form.expectedDeliveryDate"><textarea class="input" placeholder="Notes" [(ngModel)]="form.notes"></textarea><div class="flex gap-3"><button class="btn-soft flex-1" (click)="close.emit()">Cancel</button><button class="btn-primary flex-1" (click)="submit()">Create Order</button></div></div></div>` }]
    }], () => [{ type: i1.PurchaseService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PoModalComponent, { className: "PoModalComponent" }); })();
export class ReportComponent {
    title = "";
    rows = [];
    objectKeys = Object.keys;
    static ɵfac = function ReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReportComponent, selectors: [["report"]], inputs: { title: "title", rows: "rows" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 4, consts: [[1, "panel", "p-8"], [1, "font-black", "text-gray-900", "mb-4"], [3, "rows", "cols"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h3", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "table-list", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rows", ctx.rows)("cols", ctx.rows.length ? ctx.objectKeys(ctx.rows[0]) : i0.ɵɵpureFunction0(3, _c12));
        } }, dependencies: [CommonModule, TableListUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportComponent, [{
        type: Component,
        args: [{ selector: "report", standalone: true, imports: [CommonModule, TableListUiComponent], inputs: ["title", "rows"], template: `<div class="panel p-8"><h3 class="font-black text-gray-900 mb-4">{{title}}</h3><table-list [rows]="rows" [cols]="rows.length ? objectKeys(rows[0]) : []" /></div>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReportComponent, { className: "ReportComponent" }); })();
export class UnauthorizedPage {
    static ɵfac = function UnauthorizedPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UnauthorizedPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UnauthorizedPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [[1, "p-20", "text-center", "font-black", "text-red-500", "uppercase", "tracking-widest"]], template: function UnauthorizedPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1, "Access Denied");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnauthorizedPage, [{
        type: Component,
        args: [{ standalone: true, template: `<div class="p-20 text-center font-black text-red-500 uppercase tracking-widest">Access Denied</div>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UnauthorizedPage, { className: "UnauthorizedPage" }); })();
//# sourceMappingURL=app.pages.js.map