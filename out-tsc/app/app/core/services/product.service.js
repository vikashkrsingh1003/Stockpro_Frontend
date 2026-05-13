import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ProductService {
    http;
    constructor(http) {
        this.http = http;
    }
    all() { return this.http.get(`${API_BASE_URL}/products`); }
    inactive() { return this.http.get(`${API_BASE_URL}/products/inactive`); }
    byId(id) { return this.http.get(`${API_BASE_URL}/products/${id}`); }
    bySku(sku) { return this.http.get(`${API_BASE_URL}/products/sku/${sku}`); }
    create(data) { return this.http.post(`${API_BASE_URL}/products`, data); }
    update(id, data) { return this.http.put(`${API_BASE_URL}/products/${id}`, data); }
    deactivate(id) { return this.http.put(`${API_BASE_URL}/products/deactivate/${id}`, null); }
    activate(id) { return this.http.put(`${API_BASE_URL}/products/${id}/activate`, null); }
    delete(id) { return this.http.delete(`${API_BASE_URL}/products/${id}`); }
    search(name) { return this.http.get(`${API_BASE_URL}/products/search`, { params: { name } }); }
    category(category) { return this.http.get(`${API_BASE_URL}/products/category/${category}`); }
    static ɵfac = function ProductService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProductService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductService, factory: ProductService.ɵfac, providedIn: "root" });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=product.service.js.map