import { Component } from "@angular/core";
import { pageImports } from "../page-imports";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../shared/ui.components";
const _c0 = () => ["type", "warehouseId", "productId", "quantity", "balanceAfter", "reason", "performedBy", "timestamp"];
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MovementsPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 26, vars: 7, consts: [[1, "page-shell"], ["title", "Stock Movements", "subtitle", "Full audit trail across all warehouses."], [1, "btn-soft", 3, "click"], [1, "panel", "p-4", "md:p-6", "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-5", "gap-3", "md:gap-4"], ["placeholder", "Warehouse ID", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Product ID", 1, "input", 3, "ngModelChange", "ngModel"], [1, "input", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "datetime-local", 1, "input", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click"], [3, "rows", "cols"]], template: function MovementsPage_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵproperty("rows", ctx.movements)("cols", i0.ɵɵpureFunction0(6, _c0));
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel, i4.TableListUiComponent, i4.HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MovementsPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Stock Movements" subtitle="Full audit trail across all warehouses."><button class="btn-soft" (click)="exportCsv()">Export CSV</button></header-card>
      <div class="panel p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3 md:gap-4">
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
//# sourceMappingURL=movements.page.js.map