import { Component } from "@angular/core";
import { roleFromToken } from "../../core/api";
import { pageImports } from "../page-imports";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "../../shared/ui.components";
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 24, vars: 11, consts: [[1, "page-shell"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-stretch", "md:items-end", "gap-4", "md:gap-6"], [1, "text-2xl", "sm:text-3xl", "md:text-4xl", "font-black", "text-gray-900", "tracking-tight"], [1, "text-gray-400", "font-medium", "mt-2", "uppercase", "tracking-widest", "text-xs"], ["class", "btn-primary", "routerLink", "/products/add", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-4", "gap-4", "md:gap-6"], ["label", "Catalog Assets", "sub", "Products Tracked", "color", "blue", 3, "value"], ["label", "Storage Nodes", "sub", "Active Warehouses", "color", "purple", 3, "value"], ["label", "Inventory Value", "sub", "Total Stock Valuation", "color", "green", 3, "value"], ["label", "Active Alerts", "sub", "Unacknowledged alerts", "color", "red", 3, "value"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-4", "md:gap-8"], [1, "lg:col-span-2", "panel", "p-4", "md:p-8", "space-y-5"], [1, "text-xl", "font-black", "text-gray-900"], ["class", "py-12 text-center text-gray-300 font-black uppercase tracking-widest text-xs", 4, "ngIf"], ["class", "space-y-1", 4, "ngFor", "ngForOf"], [1, "bg-gray-900", "rounded-2xl", "md:rounded-[32px]", "p-4", "md:p-8", "text-white", "space-y-3"], [1, "font-black", "text-lg"], ["class", "block p-4 hover:bg-white/10 rounded-2xl transition-all", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/products/add", 1, "btn-primary"], [1, "py-12", "text-center", "text-gray-300", "font-black", "uppercase", "tracking-widest", "text-xs"], [1, "space-y-1"], [1, "flex", "justify-between", "text-sm", "font-bold", "text-gray-700"], [1, "h-2", "bg-gray-100", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-[#7c3aed]"], [1, "block", "p-4", "hover:bg-white/10", "rounded-2xl", "transition-all", 3, "routerLink"], [1, "font-bold", "text-sm"], [1, "text-[10px]", "text-white/50"]], template: function DashboardPage_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.CommonModule, i2.NgForOf, i2.NgIf, i2.DecimalPipe, i3.FormsModule, i4.RouterLink, i5.StatUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <div class="flex flex-col md:flex-row justify-between items-stretch md:items-end gap-4 md:gap-6">
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Control Center</h1>
          <p class="text-gray-400 font-medium mt-2 uppercase tracking-widest text-xs">Real-time Microservice Intelligence</p>
        </div>
        <button class="btn-primary" routerLink="/products/add" *ngIf="role !== 'OFFICER'">+ New Asset</button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <stat label="Catalog Assets" [value]="metrics?.totalProducts ?? 0" sub="Products Tracked" color="blue" />
        <stat label="Storage Nodes" [value]="metrics?.totalWarehouses ?? 0" sub="Active Warehouses" color="purple" />
        <stat label="Inventory Value" [value]="'₹' + ((metrics?.totalInventoryValue || 0) | number:'1.0-0')" sub="Total Stock Valuation" color="green" />
        <stat label="Active Alerts" [value]="unread" sub="Unacknowledged alerts" color="red" />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div class="lg:col-span-2 panel p-4 md:p-8 space-y-5">
          <h2 class="text-xl font-black text-gray-900">Warehouse Utilization</h2>
          <div *ngIf="utilizationKeys.length === 0" class="py-12 text-center text-gray-300 font-black uppercase tracking-widest text-xs">No warehouse data</div>
          <div *ngFor="let name of utilizationKeys" class="space-y-1">
            <div class="flex justify-between text-sm font-bold text-gray-700"><span>{{name}}</span><span>{{metrics.warehouseUtilization[name]}}%</span></div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden"><div class="h-full bg-[#7c3aed]" [style.width.%]="metrics.warehouseUtilization[name]"></div></div>
          </div>
        </div>
        <div class="bg-gray-900 rounded-2xl md:rounded-[32px] p-4 md:p-8 text-white space-y-3">
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
//# sourceMappingURL=dashboard.page.js.map