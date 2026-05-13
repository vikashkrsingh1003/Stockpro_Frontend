import { Component } from "@angular/core";
import { pageImports } from "../page-imports";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../shared/ui.components";
const _c0 = () => ["severity", "alertType", "title", "message", "productId", "createdAt", "acknowledged"];
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertCentrePage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 33, vars: 9, consts: [[1, "page-shell"], ["title", "Alert Centre", "subtitle", "Real-time inventory & procurement alerts."], [1, "btn-soft", 3, "click"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], ["label", "Total Alerts", 3, "value"], ["label", "Unacknowledged", 3, "value"], ["label", "Critical", 3, "value"], ["label", "Resolved", 3, "value"], [1, "panel", "p-4", "md:p-6", "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3"], [1, "input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "rows", "cols"]], template: function AlertCentrePage_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵproperty("rows", ctx.alerts)("cols", i0.ɵɵpureFunction0(8, _c0));
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel, i4.StatUiComponent, i4.TableListUiComponent, i4.HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertCentrePage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Alert Centre" subtitle="Real-time inventory & procurement alerts."><button class="btn-soft" (click)="load()">Refresh</button></header-card>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><stat label="Total Alerts" [value]="alerts.length" /><stat label="Unacknowledged" [value]="unack" /><stat label="Critical" [value]="critical" /><stat label="Resolved" [value]="alerts.length - unack" /></div>
      <div class="panel p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3"><select class="input" [(ngModel)]="filters.type" (ngModelChange)="load()"><option value="">All Types</option><option>LOW_STOCK</option><option>OVERSTOCK</option><option>PO_PENDING</option><option>OVERDUE_PO</option><option>SYSTEM</option></select><select class="input" [(ngModel)]="filters.severity" (ngModelChange)="load()"><option value="">All Severities</option><option>CRITICAL</option><option>WARNING</option><option>INFO</option></select></div>
      <table-list [rows]="alerts" [cols]="['severity','alertType','title','message','productId','createdAt','acknowledged']" />
    </div>
  `
            }]
    }], () => [{ type: i1.AlertService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertCentrePage, { className: "AlertCentrePage" }); })();
//# sourceMappingURL=alert-centre.page.js.map