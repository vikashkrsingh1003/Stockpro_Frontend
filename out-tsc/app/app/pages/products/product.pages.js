import { Component } from "@angular/core";
import { roleFromToken } from "../../core/api";
import { asList, pageImports } from "../page-imports";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "../../shared/ui.components";
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductListPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 21, vars: 6, consts: [[1, "page-shell"], ["title", "Product Inventory", "subtitle", "Manage and track your global stock levels."], ["class", "btn-soft", 3, "click", 4, "ngIf"], ["class", "btn-primary", "routerLink", "/products/add", 4, "ngIf"], ["class", "bg-amber-50 border border-amber-100 rounded-2xl md:rounded-[32px] p-4 md:p-8 space-y-4", 4, "ngIf"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], ["placeholder", "Search by name or SKU...", 1, "input", "flex-1", 3, "ngModelChange", "ngModel"], [1, "input", "md:w-64", 3, "ngModelChange", "ngModel"], ["kind", "products", 3, "refresh", "rows"], [1, "btn-soft", 3, "click"], ["routerLink", "/products/add", 1, "btn-primary"], [1, "bg-amber-50", "border", "border-amber-100", "rounded-2xl", "md:rounded-[32px]", "p-4", "md:p-8", "space-y-4"], [1, "font-black", "text-amber-700", "uppercase", "tracking-widest", "text-sm"], [1, "grid", "md:grid-cols-3", "gap-4"], ["class", "bg-white rounded-2xl p-4 md:p-5 border border-amber-100 flex flex-col sm:flex-row sm:justify-between gap-4", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "p-4", "md:p-5", "border", "border-amber-100", "flex", "flex-col", "sm:flex-row", "sm:justify-between", "gap-4"], [1, "font-bold", "text-gray-900", "text-sm"], [1, "text-[10px]", "text-gray-400"], [1, "px-4", "py-2", "bg-emerald-500", "text-white", "text-xs", "font-black", "rounded-xl", 3, "click"]], template: function ProductListPage_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.CommonModule, i2.NgForOf, i2.NgIf, i3.FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel, i4.RouterLink, i5.DataTableUiComponent, i5.HeaderCardUiComponent], encapsulation: 2 });
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
      <div *ngIf="showInactive" class="bg-amber-50 border border-amber-100 rounded-2xl md:rounded-[32px] p-4 md:p-8 space-y-4">
        <h2 class="font-black text-amber-700 uppercase tracking-widest text-sm">Deactivated Products</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div *ngFor="let p of inactive" class="bg-white rounded-2xl p-4 md:p-5 border border-amber-100 flex flex-col sm:flex-row sm:justify-between gap-4">
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
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i5.EntityFormUiComponent], encapsulation: 2 });
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
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i5.EntityFormUiComponent], encapsulation: 2 });
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
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i5.DetailPageUiComponent], encapsulation: 2 });
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
//# sourceMappingURL=product.pages.js.map