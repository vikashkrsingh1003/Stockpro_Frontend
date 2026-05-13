import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../core/api";
function TableListUiComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r1);
} }
function TableListUiComponent_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
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
function TableListUiComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 9);
    i0.ɵɵtemplate(1, TableListUiComponent_tr_7_td_1_Template, 2, 1, "td", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.cols);
} }
function TableListUiComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1, "No records found");
    i0.ɵɵelementEnd();
} }
const _c0 = a0 => ["/products", a0];
function DataTableUiComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 7)(1, "td", 5)(2, "p", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 9);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td", 5)(7, "span", 10);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td", 11);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 12);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 5)(14, "a", 13);
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
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, p_r1.productId));
} }
const _c1 = ["*"];
function EntityFormUiComponent_label_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 10)(1, "span", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 12);
    i0.ɵɵtwoWayListener("ngModelChange", function EntityFormUiComponent_label_8_Template_input_ngModelChange_3_listener($event) { const f_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.model[f_r2], $event) || (ctx_r2.model[f_r2] = $event); return i0.ɵɵresetView($event); });
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
const _c2 = (a0, a1) => [a0, a1];
function DetailPageUiComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
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
function DetailPageUiComponent_div_3_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵtext(1, "Edit");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(1, _c2, ctx_r1.editPrefix, ctx_r1.item.productId || ctx_r1.item.supplierId || ctx_r1.item.id));
} }
function DetailPageUiComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    i0.ɵɵtext(3, "\u25A3");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 6)(5, "h1", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵtemplate(8, DetailPageUiComponent_div_3_div_8_Template, 5, 2, "div", 9);
    i0.ɵɵpipe(9, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, DetailPageUiComponent_div_3_a_10_Template, 2, 4, "a", 10);
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
function StockModalUiComponent_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10);
    i0.ɵɵtwoWayListener("ngModelChange", function StockModalUiComponent_input_5_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.targetId, $event) || (ctx_r1.form.targetId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.targetId);
} }
const _c3 = () => [];
export class StatUiComponent {
    label = "";
    value = "";
    sub = "";
    color = "";
    static ɵfac = function StatUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StatUiComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatUiComponent, selectors: [["stat"]], inputs: { label: "label", value: "value", sub: "sub", color: "color" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 3, consts: [[1, "bg-white", "p-4", "md:p-6", "rounded-2xl", "md:rounded-[32px]", "border", "border-gray-50", "shadow-sm", "space-y-3"], [1, "text-[10px]", "font-black", "text-gray-400", "uppercase", "tracking-widest"], [1, "text-2xl", "md:text-3xl", "font-black", "text-gray-900", "break-words"], [1, "text-xs", "text-gray-400", "font-medium"]], template: function StatUiComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatUiComponent, [{
        type: Component,
        args: [{
                selector: "stat",
                standalone: true,
                imports: [CommonModule],
                template: `<div class="bg-white p-4 md:p-6 rounded-2xl md:rounded-[32px] border border-gray-50 shadow-sm space-y-3">
    <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{label}}</p>
    <h4 class="text-2xl md:text-3xl font-black text-gray-900 break-words">{{value}}</h4>
    <p class="text-xs text-gray-400 font-medium">{{sub}}</p>
  </div>`
            }]
    }], null, { label: [{
            type: Input
        }], value: [{
            type: Input
        }], sub: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StatUiComponent, { className: "StatUiComponent" }); })();
export class TableListUiComponent {
    rows = [];
    cols = [];
    static ɵfac = function TableListUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TableListUiComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableListUiComponent, selectors: [["table-list"]], inputs: { rows: "rows", cols: "cols" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 9, vars: 3, consts: [[1, "panel", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "min-w-[720px]", "text-left"], [1, "bg-gray-50/50"], ["class", "p-3 md:p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest", 4, "ngFor", "ngForOf"], [1, "divide-y", "divide-gray-50"], ["class", "hover:bg-purple-50/20", 4, "ngFor", "ngForOf"], ["class", "p-8 md:p-16 text-center text-gray-300 font-black uppercase tracking-widest text-xs", 4, "ngIf"], [1, "p-3", "md:p-5", "text-[10px]", "font-black", "text-gray-400", "uppercase", "tracking-widest"], [1, "hover:bg-purple-50/20"], ["class", "p-3 md:p-5 text-sm text-gray-700 align-top", 4, "ngFor", "ngForOf"], [1, "p-3", "md:p-5", "text-sm", "text-gray-700", "align-top"], [1, "p-8", "md:p-16", "text-center", "text-gray-300", "font-black", "uppercase", "tracking-widest", "text-xs"]], template: function TableListUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead", 3)(4, "tr");
            i0.ɵɵtemplate(5, TableListUiComponent_th_5_Template, 2, 1, "th", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "tbody", 5);
            i0.ɵɵtemplate(7, TableListUiComponent_tr_7_Template, 2, 1, "tr", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(8, TableListUiComponent_div_8_Template, 2, 0, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.cols);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.rows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.rows.length);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableListUiComponent, [{
        type: Component,
        args: [{
                selector: "table-list",
                standalone: true,
                imports: [CommonModule],
                template: `
    <div class="panel overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full min-w-[720px] text-left">
          <thead class="bg-gray-50/50">
            <tr><th *ngFor="let c of cols" class="p-3 md:p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">{{c}}</th></tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr *ngFor="let row of rows" class="hover:bg-purple-50/20">
              <td *ngFor="let c of cols" class="p-3 md:p-5 text-sm text-gray-700 align-top">{{row[c] ?? "—"}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div *ngIf="!rows.length" class="p-8 md:p-16 text-center text-gray-300 font-black uppercase tracking-widest text-xs">No records found</div>
    </div>
  `
            }]
    }], null, { rows: [{
            type: Input
        }], cols: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TableListUiComponent, { className: "TableListUiComponent" }); })();
export class DataTableUiComponent {
    rows = [];
    kind = "";
    refresh = new EventEmitter();
    static ɵfac = function DataTableUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataTableUiComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableUiComponent, selectors: [["data-table"]], inputs: { rows: "rows", kind: "kind" }, outputs: { refresh: "refresh" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 16, vars: 1, consts: [[1, "panel", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "min-w-[760px]", "text-left"], [1, "bg-gray-50/50"], [1, "p-3", "md:p-5", "text-[11px]", "font-black", "text-gray-900", "uppercase", "tracking-widest"], [1, "p-3", "md:p-5"], ["class", "hover:bg-purple-50/30", 4, "ngFor", "ngForOf"], [1, "hover:bg-purple-50/30"], [1, "font-bold", "text-gray-900"], [1, "text-[10px]", "text-gray-400"], [1, "badge", "bg-gray-100", "text-gray-600"], [1, "p-3", "md:p-5", "font-black", "text-gray-900"], [1, "p-3", "md:p-5", "text-sm", "text-gray-600"], [1, "btn-soft", 3, "routerLink"]], template: function DataTableUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead", 3)(4, "tr")(5, "th", 4);
            i0.ɵɵtext(6, "Product Info");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "th", 4);
            i0.ɵɵtext(8, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "th", 4);
            i0.ɵɵtext(10, "Price");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "th", 4);
            i0.ɵɵtext(12, "Inventory");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "th", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "tbody");
            i0.ɵɵtemplate(15, DataTableUiComponent_tr_15_Template, 16, 8, "tr", 6);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", ctx.rows);
        } }, dependencies: [CommonModule, i1.NgForOf, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableUiComponent, [{
        type: Component,
        args: [{
                selector: "data-table",
                standalone: true,
                imports: [CommonModule, RouterLink],
                template: `
    <div class="panel overflow-hidden">
      <div class="overflow-x-auto">
      <table class="w-full min-w-[760px] text-left">
        <thead class="bg-gray-50/50"><tr>
          <th class="p-3 md:p-5 text-[11px] font-black text-gray-900 uppercase tracking-widest">Product Info</th>
          <th class="p-3 md:p-5 text-[11px] font-black text-gray-900 uppercase tracking-widest">Category</th>
          <th class="p-3 md:p-5 text-[11px] font-black text-gray-900 uppercase tracking-widest">Price</th>
          <th class="p-3 md:p-5 text-[11px] font-black text-gray-900 uppercase tracking-widest">Inventory</th>
          <th class="p-3 md:p-5"></th>
        </tr></thead>
        <tbody>
          <tr *ngFor="let p of rows" class="hover:bg-purple-50/30">
            <td class="p-3 md:p-5"><p class="font-bold text-gray-900">{{p.name}}</p><p class="text-[10px] text-gray-400">SKU: {{p.sku}}</p></td>
            <td class="p-3 md:p-5"><span class="badge bg-gray-100 text-gray-600">{{p.category || "General"}}</span></td>
            <td class="p-3 md:p-5 font-black text-gray-900">₹{{p.sellingPrice}}</td>
            <td class="p-3 md:p-5 text-sm text-gray-600">{{p.totalStock || 0}} Units Global</td>
            <td class="p-3 md:p-5"><a class="btn-soft" [routerLink]="['/products', p.productId]">View</a></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  `
            }]
    }], null, { rows: [{
            type: Input
        }], kind: [{
            type: Input
        }], refresh: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataTableUiComponent, { className: "DataTableUiComponent" }); })();
export class HeaderCardUiComponent {
    title = "";
    subtitle = "";
    static ɵfac = function HeaderCardUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HeaderCardUiComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeaderCardUiComponent, selectors: [["header-card"]], inputs: { title: "title", subtitle: "subtitle" }, standalone: true, features: [i0.ɵɵStandaloneFeature], ngContentSelectors: _c1, decls: 8, vars: 2, consts: [[1, "flex", "flex-col", "lg:flex-row", "justify-between", "items-stretch", "lg:items-center", "bg-white", "p-4", "md:p-8", "rounded-2xl", "md:rounded-[32px]", "border", "border-gray-50", "shadow-sm", "gap-4", "md:gap-6"], [1, "text-xl", "sm:text-2xl", "md:text-3xl", "font-black", "text-gray-900", "tracking-tight", "break-words"], [1, "text-xs", "md:text-sm", "text-gray-400", "mt-1"], [1, "flex", "flex-col", "sm:flex-row", "flex-wrap", "gap-3"]], template: function HeaderCardUiComponent_Template(rf, ctx) { if (rf & 1) {
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeaderCardUiComponent, [{
        type: Component,
        args: [{
                selector: "header-card",
                standalone: true,
                imports: [CommonModule],
                template: `<div class="flex flex-col lg:flex-row justify-between items-stretch lg:items-center bg-white p-4 md:p-8 rounded-2xl md:rounded-[32px] border border-gray-50 shadow-sm gap-4 md:gap-6">
    <div><h1 class="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight break-words">{{title}}</h1><p class="text-xs md:text-sm text-gray-400 mt-1">{{subtitle}}</p></div>
    <div class="flex flex-col sm:flex-row flex-wrap gap-3"><ng-content /></div>
  </div>`
            }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HeaderCardUiComponent, { className: "HeaderCardUiComponent" }); })();
export class EntityFormUiComponent {
    title = "";
    back = "";
    model = {};
    fields = [];
    save = new EventEmitter();
    static ɵfac = function EntityFormUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EntityFormUiComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntityFormUiComponent, selectors: [["entity-form"]], inputs: { title: "title", back: "back", model: "model", fields: "fields" }, outputs: { save: "save" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 4, consts: [[1, "p-0", "sm:p-4", "md:p-6", "max-w-4xl", "mx-auto"], [1, "inline-flex", "text-gray-500", "hover:text-indigo-600", "mb-6", "font-medium", 3, "routerLink"], [1, "bg-white", "rounded-2xl", "md:rounded-[2rem]", "border", "border-gray-200", "shadow-xl", "overflow-hidden"], [1, "bg-gradient-to-r", "from-indigo-600", "to-violet-600", "p-5", "md:p-8", "text-white"], [1, "text-xl", "md:text-2xl", "font-bold"], [1, "p-5", "md:p-8", "grid", "md:grid-cols-2", "gap-4", "md:gap-6", 3, "ngSubmit"], ["class", "block", 4, "ngFor", "ngForOf"], [1, "md:col-span-2", "flex", "flex-col", "sm:flex-row", "justify-end", "gap-3", "sm:gap-4"], [1, "btn-soft", 3, "routerLink"], [1, "btn-primary"], [1, "block"], [1, "block", "text-sm", "font-semibold", "text-gray-700", "mb-2"], [1, "input", 3, "ngModelChange", "ngModel", "name"]], template: function EntityFormUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵtext(2, "\u2190 Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "h1", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "form", 5);
            i0.ɵɵlistener("ngSubmit", function EntityFormUiComponent_Template_form_ngSubmit_7_listener() { return ctx.save.emit(); });
            i0.ɵɵtemplate(8, EntityFormUiComponent_label_8_Template, 4, 3, "label", 6);
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
        } }, dependencies: [CommonModule, i1.NgForOf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, i2.NgForm, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntityFormUiComponent, [{
        type: Component,
        args: [{
                selector: "entity-form",
                standalone: true,
                imports: [CommonModule, FormsModule, RouterLink],
                template: `<div class="p-0 sm:p-4 md:p-6 max-w-4xl mx-auto">
    <a [routerLink]="back" class="inline-flex text-gray-500 hover:text-indigo-600 mb-6 font-medium">← Back</a>
    <div class="bg-white rounded-2xl md:rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-600 to-violet-600 p-5 md:p-8 text-white"><h1 class="text-xl md:text-2xl font-bold">{{title}}</h1></div>
      <form class="p-5 md:p-8 grid md:grid-cols-2 gap-4 md:gap-6" (ngSubmit)="save.emit()">
        <label *ngFor="let f of fields" class="block"><span class="block text-sm font-semibold text-gray-700 mb-2">{{f}}</span><input class="input" [(ngModel)]="model[f]" [name]="f"></label>
        <div class="md:col-span-2 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4"><a [routerLink]="back" class="btn-soft">Cancel</a><button class="btn-primary">Save</button></div>
      </form>
    </div>
  </div>`
            }]
    }], null, { title: [{
            type: Input
        }], back: [{
            type: Input
        }], model: [{
            type: Input
        }], fields: [{
            type: Input
        }], save: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EntityFormUiComponent, { className: "EntityFormUiComponent" }); })();
export class DetailPageUiComponent {
    item;
    titleField = "name";
    back = "/";
    editPrefix = "";
    static ɵfac = function DetailPageUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DetailPageUiComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailPageUiComponent, selectors: [["detail-page"]], inputs: { item: "item", titleField: "titleField", back: "back", editPrefix: "editPrefix" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 2, consts: [[1, "max-w-5xl", "mx-auto", "p-0", "sm:p-4"], [1, "text-gray-400", "hover:text-[#7c3aed]", "font-black", "uppercase", "text-xs", 3, "routerLink"], ["class", "grid lg:grid-cols-3 gap-4 md:gap-8 mt-5 md:mt-8", 4, "ngIf"], [1, "grid", "lg:grid-cols-3", "gap-4", "md:gap-8", "mt-5", "md:mt-8"], [1, "bg-white", "p-4", "rounded-2xl", "md:rounded-[40px]", "border", "border-gray-50"], [1, "aspect-square", "rounded-2xl", "md:rounded-[32px]", "bg-gray-50", "flex", "items-center", "justify-center", "text-5xl", "md:text-7xl", "text-gray-200"], [1, "lg:col-span-2", "bg-white", "p-5", "md:p-10", "rounded-2xl", "md:rounded-[40px]", "border", "border-gray-50"], [1, "text-2xl", "md:text-4xl", "font-black", "text-gray-900", "mb-4", "break-words"], [1, "grid", "md:grid-cols-2", "gap-4"], ["class", "p-4 bg-gray-50 rounded-2xl", 4, "ngFor", "ngForOf"], ["class", "btn-primary inline-block mt-6", 3, "routerLink", 4, "ngIf"], [1, "p-4", "bg-gray-50", "rounded-2xl"], [1, "text-[10px]", "text-gray-400", "uppercase", "font-black"], [1, "text-gray-900", "font-bold"], [1, "btn-primary", "inline-block", "mt-6", 3, "routerLink"]], template: function DetailPageUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵtext(2, "\u2190 Back");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, DetailPageUiComponent_div_3_Template, 11, 5, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", ctx.back);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.item);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.KeyValuePipe, RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailPageUiComponent, [{
        type: Component,
        args: [{
                selector: "detail-page",
                standalone: true,
                imports: [CommonModule, RouterLink],
                template: `<div class="max-w-5xl mx-auto p-0 sm:p-4">
    <a [routerLink]="back" class="text-gray-400 hover:text-[#7c3aed] font-black uppercase text-xs">← Back</a>
    <div *ngIf="item" class="grid lg:grid-cols-3 gap-4 md:gap-8 mt-5 md:mt-8">
      <div class="bg-white p-4 rounded-2xl md:rounded-[40px] border border-gray-50"><div class="aspect-square rounded-2xl md:rounded-[32px] bg-gray-50 flex items-center justify-center text-5xl md:text-7xl text-gray-200">▣</div></div>
      <div class="lg:col-span-2 bg-white p-5 md:p-10 rounded-2xl md:rounded-[40px] border border-gray-50">
        <h1 class="text-2xl md:text-4xl font-black text-gray-900 mb-4 break-words">{{item[titleField]}}</h1>
        <div class="grid md:grid-cols-2 gap-4"><div *ngFor="let kv of item | keyvalue" class="p-4 bg-gray-50 rounded-2xl"><p class="text-[10px] text-gray-400 uppercase font-black">{{kv.key}}</p><p class="text-gray-900 font-bold">{{kv.value}}</p></div></div>
        <a *ngIf="editPrefix" [routerLink]="[editPrefix, item.productId || item.supplierId || item.id]" class="btn-primary inline-block mt-6">Edit</a>
      </div>
    </div>
  </div>`
            }]
    }], null, { item: [{
            type: Input
        }], titleField: [{
            type: Input
        }], back: [{
            type: Input
        }], editPrefix: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DetailPageUiComponent, { className: "DetailPageUiComponent" }); })();
export class StockModalUiComponent {
    title = "";
    transfer = false;
    close = new EventEmitter();
    save = new EventEmitter();
    form = { sku: "", targetId: "", qty: 1, reason: "Manual Adjustment" };
    static ɵfac = function StockModalUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StockModalUiComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StockModalUiComponent, selectors: [["stock-modal"]], inputs: { title: "title", transfer: "transfer" }, outputs: { close: "close", save: "save" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 5, consts: [[1, "fixed", "inset-0", "bg-gray-900/60", "z-50", "flex", "items-center", "justify-center", "p-3", "sm:p-6"], [1, "bg-white", "w-full", "max-w-md", "max-h-[92vh]", "overflow-y-auto", "rounded-2xl", "md:rounded-[40px]", "shadow-2xl", "p-5", "md:p-10", "space-y-5", "md:space-y-6"], [1, "text-xl", "font-black", "text-gray-900"], ["placeholder", "Product SKU", 1, "input", 3, "ngModelChange", "ngModel"], ["class", "input", "placeholder", "Target Warehouse ID", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "number", "placeholder", "Quantity", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Reason", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3"], [1, "btn-soft", "flex-1", 3, "click"], [1, "btn-primary", "flex-1", 3, "click"], ["placeholder", "Target Warehouse ID", 1, "input", 3, "ngModelChange", "ngModel"]], template: function StockModalUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 3);
            i0.ɵɵtwoWayListener("ngModelChange", function StockModalUiComponent_Template_input_ngModelChange_4_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.sku, $event) || (ctx.form.sku = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, StockModalUiComponent_input_5_Template, 1, 1, "input", 4);
            i0.ɵɵelementStart(6, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function StockModalUiComponent_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.qty, $event) || (ctx.form.qty = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "textarea", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function StockModalUiComponent_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.reason, $event) || (ctx.form.reason = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7)(9, "button", 8);
            i0.ɵɵlistener("click", function StockModalUiComponent_Template_button_click_9_listener() { return ctx.close.emit(); });
            i0.ɵɵtext(10, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 9);
            i0.ɵɵlistener("click", function StockModalUiComponent_Template_button_click_11_listener() { return ctx.save.emit(ctx.form); });
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
        } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StockModalUiComponent, [{
        type: Component,
        args: [{
                selector: "stock-modal",
                standalone: true,
                imports: [CommonModule, FormsModule],
                template: `<div class="fixed inset-0 bg-gray-900/60 z-50 flex items-center justify-center p-3 sm:p-6">
    <div class="bg-white w-full max-w-md max-h-[92vh] overflow-y-auto rounded-2xl md:rounded-[40px] shadow-2xl p-5 md:p-10 space-y-5 md:space-y-6">
      <h2 class="text-xl font-black text-gray-900">{{title}}</h2>
      <input class="input" placeholder="Product SKU" [(ngModel)]="form.sku">
      <input *ngIf="transfer" class="input" placeholder="Target Warehouse ID" [(ngModel)]="form.targetId">
      <input class="input" type="number" placeholder="Quantity" [(ngModel)]="form.qty">
      <textarea class="input" placeholder="Reason" [(ngModel)]="form.reason"></textarea>
      <div class="flex gap-3"><button class="btn-soft flex-1" (click)="close.emit()">Cancel</button><button class="btn-primary flex-1" (click)="save.emit(form)">Save</button></div>
    </div>
  </div>`
            }]
    }], null, { title: [{
            type: Input
        }], transfer: [{
            type: Input
        }], close: [{
            type: Output
        }], save: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StockModalUiComponent, { className: "StockModalUiComponent" }); })();
export class PoModalUiComponent {
    api;
    close = new EventEmitter();
    created = new EventEmitter();
    form = { supplierId: "", warehouseId: "", expectedDeliveryDate: "", notes: "", items: [] };
    constructor(api) {
        this.api = api;
    }
    submit() {
        this.api.create({ ...this.form, supplierId: +this.form.supplierId, warehouseId: +this.form.warehouseId }).subscribe(() => {
            this.created.emit();
            this.close.emit();
        });
    }
    static ɵfac = function PoModalUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PoModalUiComponent)(i0.ɵɵdirectiveInject(i3.PurchaseService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoModalUiComponent, selectors: [["po-modal"]], outputs: { close: "close", created: "created" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 4, consts: [[1, "fixed", "inset-0", "bg-black/40", "z-50", "flex", "items-center", "justify-center", "p-3", "sm:p-4"], [1, "bg-white", "rounded-2xl", "md:rounded-[32px]", "p-5", "md:p-8", "w-full", "max-w-2xl", "max-h-[92vh]", "overflow-y-auto", "space-y-4"], [1, "text-xl", "font-black", "text-gray-900"], ["placeholder", "Supplier ID", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Warehouse ID", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Notes", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3"], [1, "btn-soft", "flex-1", 3, "click"], [1, "btn-primary", "flex-1", 3, "click"]], template: function PoModalUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
            i0.ɵɵtext(3, "New Purchase Order");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 3);
            i0.ɵɵtwoWayListener("ngModelChange", function PoModalUiComponent_Template_input_ngModelChange_4_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.supplierId, $event) || (ctx.form.supplierId = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function PoModalUiComponent_Template_input_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.warehouseId, $event) || (ctx.form.warehouseId = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function PoModalUiComponent_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.expectedDeliveryDate, $event) || (ctx.form.expectedDeliveryDate = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "textarea", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function PoModalUiComponent_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.notes, $event) || (ctx.form.notes = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7)(9, "button", 8);
            i0.ɵɵlistener("click", function PoModalUiComponent_Template_button_click_9_listener() { return ctx.close.emit(); });
            i0.ɵɵtext(10, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 9);
            i0.ɵɵlistener("click", function PoModalUiComponent_Template_button_click_11_listener() { return ctx.submit(); });
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
        } }, dependencies: [CommonModule, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoModalUiComponent, [{
        type: Component,
        args: [{
                selector: "po-modal",
                standalone: true,
                imports: [CommonModule, FormsModule],
                template: `<div class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-3 sm:p-4">
    <div class="bg-white rounded-2xl md:rounded-[32px] p-5 md:p-8 w-full max-w-2xl max-h-[92vh] overflow-y-auto space-y-4">
      <h3 class="text-xl font-black text-gray-900">New Purchase Order</h3>
      <input class="input" placeholder="Supplier ID" [(ngModel)]="form.supplierId">
      <input class="input" placeholder="Warehouse ID" [(ngModel)]="form.warehouseId">
      <input class="input" type="datetime-local" [(ngModel)]="form.expectedDeliveryDate">
      <textarea class="input" placeholder="Notes" [(ngModel)]="form.notes"></textarea>
      <div class="flex gap-3"><button class="btn-soft flex-1" (click)="close.emit()">Cancel</button><button class="btn-primary flex-1" (click)="submit()">Create Order</button></div>
    </div>
  </div>`
            }]
    }], () => [{ type: i3.PurchaseService }], { close: [{
            type: Output
        }], created: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PoModalUiComponent, { className: "PoModalUiComponent" }); })();
export class ReportUiComponent {
    title = "";
    rows = [];
    objectKeys = Object.keys;
    static ɵfac = function ReportUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportUiComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReportUiComponent, selectors: [["report"]], inputs: { title: "title", rows: "rows" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 4, consts: [[1, "panel", "p-4", "md:p-8"], [1, "font-black", "text-gray-900", "mb-4"], [3, "rows", "cols"]], template: function ReportUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h3", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "table-list", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rows", ctx.rows)("cols", ctx.rows.length ? ctx.objectKeys(ctx.rows[0]) : i0.ɵɵpureFunction0(3, _c3));
        } }, dependencies: [CommonModule, TableListUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportUiComponent, [{
        type: Component,
        args: [{
                selector: "report",
                standalone: true,
                imports: [CommonModule, TableListUiComponent],
                template: `<div class="panel p-4 md:p-8"><h3 class="font-black text-gray-900 mb-4">{{title}}</h3><table-list [rows]="rows" [cols]="rows.length ? objectKeys(rows[0]) : []" /></div>`
            }]
    }], null, { title: [{
            type: Input
        }], rows: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReportUiComponent, { className: "ReportUiComponent" }); })();
export const STOCKPRO_UI = [
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
//# sourceMappingURL=ui.components.js.map