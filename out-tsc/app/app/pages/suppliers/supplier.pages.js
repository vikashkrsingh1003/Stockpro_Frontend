import { Component } from "@angular/core";
import { roleFromToken } from "../../core/api";
import { pageImports } from "../page-imports";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "../../shared/ui.components";
const _c0 = a0 => ["/suppliers", a0];
const _c1 = a0 => ["/suppliers/edit", a0];
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
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c1, s_r1.supplierId || s_r1.id));
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
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, s_r1.supplierId || s_r1.id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.canManage);
} }
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SupplierListPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 4, consts: [[1, "page-shell"], ["title", "Supplier Management", "subtitle", "Manage your supply chain partners and their performance."], ["class", "btn-primary", "routerLink", "/suppliers/add", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "md:gap-4"], ["placeholder", "Search suppliers...", 1, "input", "flex-1", 3, "ngModelChange", "ngModel"], [1, "input", "sm:w-48", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3", "gap-4", "md:gap-6"], ["class", "bg-white rounded-2xl md:rounded-3xl border border-gray-200 p-4 md:p-6 shadow-sm", 4, "ngFor", "ngForOf"], ["routerLink", "/suppliers/add", 1, "btn-primary"], [1, "bg-white", "rounded-2xl", "md:rounded-3xl", "border", "border-gray-200", "p-4", "md:p-6", "shadow-sm"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-500", "mb-3"], [1, "text-yellow-500", "mb-4"], [1, "text-xs", "text-gray-500"], [1, "text-sm", "text-gray-600"], [1, "flex", "flex-col", "sm:flex-row", "gap-2", "mt-6"], [1, "btn-soft", "flex-1", 3, "routerLink"], ["class", "btn-soft", 3, "routerLink", 4, "ngIf"], [1, "btn-soft", 3, "routerLink"]], template: function SupplierListPage_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.CommonModule, i2.NgForOf, i2.NgIf, i3.FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel, i4.RouterLink, i5.HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SupplierListPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `
    <div class="page-shell">
      <header-card title="Supplier Management" subtitle="Manage your supply chain partners and their performance."><button class="btn-primary" *ngIf="canManage" routerLink="/suppliers/add">+ Add New Supplier</button></header-card>
      <div class="flex flex-col sm:flex-row gap-3 md:gap-4"><input class="input flex-1" placeholder="Search suppliers..." [(ngModel)]="search" (ngModelChange)="load()"><select class="input sm:w-48" [(ngModel)]="filter"><option>all</option><option>active</option><option>inactive</option></select></div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <div *ngFor="let s of filtered" class="bg-white rounded-2xl md:rounded-3xl border border-gray-200 p-4 md:p-6 shadow-sm">
          <h3 class="text-xl font-bold text-gray-900">{{s.name}}</h3><p class="text-sm text-gray-500 mb-3">{{s.contactPerson}}</p><p class="text-yellow-500 mb-4">★★★★★ <span class="text-xs text-gray-500">({{s.rating || 0}})</span></p>
          <p class="text-sm text-gray-600">{{s.city}}, {{s.country}}</p><p class="text-sm text-gray-600">{{s.email}}</p>
          <div class="flex flex-col sm:flex-row gap-2 mt-6"><button class="btn-soft flex-1" [routerLink]="['/suppliers', s.supplierId || s.id]">View</button><button class="btn-soft" *ngIf="canManage" [routerLink]="['/suppliers/edit', s.supplierId || s.id]">Edit</button></div>
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
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i5.EntityFormUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddSupplierPage, [{
        type: Component,
        args: [{ standalone: true, imports: pageImports, template: `<entity-form title="Add New Supplier" back="/suppliers" [model]="form" [fields]="fields" (save)="save()" />` }]
    }], () => [{ type: i1.SupplierService }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddSupplierPage, { className: "AddSupplierPage" }); })();
export class EditSupplierPage extends AddSupplierPage {
    id = "";
    constructor(api, router, route) {
        super(api, router);
        this.id = route.snapshot.paramMap.get("id") || "";
        api.byId(this.id).subscribe((d) => this.form = d);
    }
    save() { this.api.update(this.id, this.form).subscribe(() => this.router.navigateByUrl("/suppliers")); }
    static ɵfac = function EditSupplierPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EditSupplierPage)(i0.ɵɵdirectiveInject(i1.SupplierService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i4.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EditSupplierPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 2, consts: [["title", "Edit Supplier", "back", "/suppliers", 3, "save", "model", "fields"]], template: function EditSupplierPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "entity-form", 0);
            i0.ɵɵlistener("save", function EditSupplierPage_Template_entity_form_save_0_listener() { return ctx.save(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("model", ctx.form)("fields", ctx.fields);
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i5.EntityFormUiComponent], encapsulation: 2 });
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
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i5.DetailPageUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SupplierDetailsPage, [{
        type: Component,
        args: [{ standalone: true, imports: pageImports, template: `<detail-page [item]="supplier" titleField="name" back="/suppliers" editPrefix="/suppliers/edit" />` }]
    }], () => [{ type: i4.ActivatedRoute }, { type: i1.SupplierService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SupplierDetailsPage, { className: "SupplierDetailsPage" }); })();
//# sourceMappingURL=supplier.pages.js.map