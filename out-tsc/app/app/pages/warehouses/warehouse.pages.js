import { Component } from "@angular/core";
import { roleFromToken } from "../../core/api";
import { pageImports } from "../page-imports";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "../../shared/ui.components";
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
function WarehouseListPage_div_4_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function WarehouseListPage_div_4_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const w_r1 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteWarehouse(w_r1)); });
    i0.ɵɵtext(1, "Delete");
    i0.ɵɵelementEnd();
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
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, WarehouseListPage_div_4_button_18_Template, 2, 0, "button", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const w_r1 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", w_r1.isActive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(w_r1.isActive ? "Active" : "Maintenance");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(w_r1.location);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r2.percent(w_r1), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", w_r1.usedCapacity || 0, " / ", w_r1.capacity || 0, " Units Used");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.canManageWarehouses);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c0, w_r1.warehouseId));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.canManageWarehouses);
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
export class WarehouseListPage {
    api;
    warehouses = [];
    canManageWarehouses = ["ADMIN", "MANAGER"].includes(roleFromToken());
    constructor(api) {
        this.api = api;
        this.load();
    }
    load() { this.api.all().subscribe((d) => this.warehouses = d || []); }
    percent(w) { return Math.round(((w.usedCapacity || 0) / (w.capacity || 1)) * 100); }
    deleteWarehouse(w) {
        const id = w.warehouseId || w.id;
        if (!id)
            return alert("Warehouse id missing.");
        if (!confirm(`Delete warehouse "${w.name}"?`))
            return;
        this.api.delete(id).subscribe({
            next: () => this.load(),
            error: (err) => alert(err?.error?.message || err?.error || "Unable to delete warehouse")
        });
    }
    static ɵfac = function WarehouseListPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WarehouseListPage)(i0.ɵɵdirectiveInject(i1.WarehouseService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WarehouseListPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 2, consts: [[1, "page-shell"], ["title", "Warehouse Hub", "subtitle", "Monitor capacity and manage global inventory nodes."], ["class", "btn-primary", "routerLink", "/warehouses/add", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3", "gap-4", "md:gap-6"], ["class", "bg-white p-4 md:p-6 rounded-2xl md:rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all", 4, "ngFor", "ngForOf"], ["routerLink", "/warehouses/add", 1, "btn-primary"], [1, "bg-white", "p-4", "md:p-6", "rounded-2xl", "md:rounded-[24px]", "border", "border-gray-100", "shadow-sm", "hover:shadow-xl", "transition-all"], [1, "flex", "justify-between", "mb-6"], [1, "bg-purple-50", "p-4", "rounded-2xl", "text-[#7c3aed]"], [1, "badge", 3, "ngClass"], [1, "text-xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-400", "text-sm", "mb-4"], [1, "h-2", "bg-gray-100", "rounded-full", "overflow-hidden", "mb-2"], [1, "h-full", "bg-[#7c3aed]"], [1, "text-[10px]", "text-gray-400", "mb-6"], [1, "flex", "flex-col", "sm:flex-row", "gap-2"], ["class", "btn-soft flex-1", 3, "routerLink", 4, "ngIf"], [1, "btn-soft", "flex-1", 3, "routerLink"], ["class", "btn-soft flex-1 text-red-600 hover:bg-red-50", 3, "click", 4, "ngIf"], [1, "btn-soft", "flex-1", "text-red-600", "hover:bg-red-50", 3, "click"]], template: function WarehouseListPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header-card", 1);
            i0.ɵɵtemplate(2, WarehouseListPage_button_2_Template, 2, 0, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, WarehouseListPage_div_4_Template, 19, 13, "div", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.canManageWarehouses);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.warehouses);
        } }, dependencies: [i2.CommonModule, i2.NgClass, i2.NgForOf, i2.NgIf, i3.FormsModule, i4.RouterLink, i5.HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WarehouseListPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Warehouse Hub" subtitle="Monitor capacity and manage global inventory nodes.">
        <button class="btn-primary" *ngIf="canManageWarehouses" routerLink="/warehouses/add">+ New Warehouse</button>
      </header-card>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <div *ngFor="let w of warehouses" class="bg-white p-4 md:p-6 rounded-2xl md:rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div class="flex justify-between mb-6"><div class="bg-purple-50 p-4 rounded-2xl text-[#7c3aed]">▤</div><span class="badge" [ngClass]="w.isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'">{{w.isActive ? 'Active' : 'Maintenance'}}</span></div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{w.name}}</h3>
          <p class="text-gray-400 text-sm mb-4">{{w.location}}</p>
          <div class="h-2 bg-gray-100 rounded-full overflow-hidden mb-2"><div class="h-full bg-[#7c3aed]" [style.width.%]="percent(w)"></div></div>
          <p class="text-[10px] text-gray-400 mb-6">{{w.usedCapacity || 0}} / {{w.capacity || 0}} Units Used</p>
          <div class="flex flex-col sm:flex-row gap-2">
            <button class="btn-soft flex-1" *ngIf="canManageWarehouses" [routerLink]="['/warehouses/edit', w.warehouseId]">Edit</button>
            <button class="btn-soft flex-1" [routerLink]="['/warehouses', w.warehouseId]">Manage</button>
            <button class="btn-soft flex-1 text-red-600 hover:bg-red-50" *ngIf="canManageWarehouses" (click)="deleteWarehouse(w)">Delete</button>
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
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i5.EntityFormUiComponent], encapsulation: 2 });
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
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i5.EntityFormUiComponent], encapsulation: 2 });
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WarehouseDetailsPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 18, vars: 7, consts: [[1, "page-shell"], ["title", "Node Control", 3, "subtitle"], [1, "btn-soft", 3, "click"], [1, "btn-primary", 3, "click"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-4", "md:gap-8"], [1, "lg:col-span-2", "panel", "overflow-hidden"], [1, "p-4", "md:p-6", "border-b", "border-gray-50"], [1, "font-black", "text-gray-900"], [3, "rows", "cols"], [1, "panel", "p-4", "md:p-6", "space-y-4"], ["class", "p-4 bg-gray-50 rounded-2xl", 4, "ngFor", "ngForOf"], ["title", "Stock Adjustment", 3, "close", "save", 4, "ngIf"], ["title", "Inter-Node Transfer", 3, "transfer", "close", "save", 4, "ngIf"], [1, "p-4", "bg-gray-50", "rounded-2xl"], [1, "text-xs", "font-black", "text-gray-900"], [1, "text-xs", "text-gray-400"], ["title", "Stock Adjustment", 3, "close", "save"], ["title", "Inter-Node Transfer", 3, "close", "save", "transfer"]], template: function WarehouseDetailsPage_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.CommonModule, i2.NgForOf, i2.NgIf, i3.FormsModule, i5.TableListUiComponent, i5.HeaderCardUiComponent, i5.StockModalUiComponent], encapsulation: 2 });
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
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div class="lg:col-span-2 panel overflow-hidden">
          <div class="p-4 md:p-6 border-b border-gray-50"><h2 class="font-black text-gray-900">Live Inventory List</h2></div>
          <table-list [rows]="inventory" [cols]="['productId','quantity','minThreshold']" />
        </div>
        <div class="panel p-4 md:p-6 space-y-4"><h2 class="font-black text-gray-900">Security Audit Log</h2>
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
//# sourceMappingURL=warehouse.pages.js.map