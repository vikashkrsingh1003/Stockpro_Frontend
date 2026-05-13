import { Component } from "@angular/core";
import { pageImports } from "../page-imports";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../shared/ui.components";
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReportsPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 18, vars: 8, consts: [[1, "page-shell"], ["title", "Analytics & Reports", "subtitle", "Inventory intelligence & CSV exports."], [1, "btn-soft", 3, "click"], [1, "bg-gradient-to-br", "from-[#7c3aed]", "to-[#4f46e5]", "rounded-2xl", "md:rounded-[40px]", "p-5", "md:p-10", "text-white", "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-5", "md:gap-6"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "opacity-70"], [1, "text-3xl", "sm:text-4xl", "md:text-5xl", "font-black", "break-words"], [1, "bg-white/20", "hover:bg-white/30", "text-white", "font-black", "px-6", "py-3", "rounded-2xl", 3, "click"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-4", "md:gap-8"], ["title", "Top Moving Products", 3, "rows"], ["title", "Dead Stock Report", 3, "rows"], ["title", "Warehouse Utilization", 3, "rows"], ["title", "Supplier Spend Rankings", 3, "rows"]], template: function ReportsPage_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.CommonModule, i2.DecimalPipe, i3.FormsModule, i4.HeaderCardUiComponent, i4.ReportUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportsPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Analytics & Reports" subtitle="Inventory intelligence & CSV exports."><button class="btn-soft" (click)="load()">Refresh</button></header-card>
      <div class="bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] rounded-2xl md:rounded-[40px] p-5 md:p-10 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 md:gap-6">
        <div><p class="text-xs font-black uppercase tracking-widest opacity-70">Total Inventory Value</p><h2 class="text-3xl sm:text-4xl md:text-5xl font-black break-words">₹{{valuation | number:'1.0-0'}}</h2></div>
        <button class="bg-white/20 hover:bg-white/30 text-white font-black px-6 py-3 rounded-2xl" (click)="download('valuation')">Export CSV</button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
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
//# sourceMappingURL=reports.page.js.map