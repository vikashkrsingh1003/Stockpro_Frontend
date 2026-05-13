import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SupplierService {
    http;
    constructor(http) {
        this.http = http;
    }
    all() { return this.http.get(`${API_BASE_URL}/suppliers`); }
    byId(id) { return this.http.get(`${API_BASE_URL}/suppliers/${id}`); }
    search(q) { return this.http.get(`${API_BASE_URL}/suppliers/search`, { params: { q } }); }
    create(data) { return this.http.post(`${API_BASE_URL}/suppliers`, data); }
    update(id, data) { return this.http.put(`${API_BASE_URL}/suppliers/${id}`, data); }
    deactivate(id) { return this.http.put(`${API_BASE_URL}/suppliers/${id}/deactivate`, null); }
    delete(id) { return this.http.delete(`${API_BASE_URL}/suppliers/${id}`); }
    rating(id, score) { return this.http.put(`${API_BASE_URL}/suppliers/${id}/rating`, null, { params: { score } }); }
    static ɵfac = function SupplierService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SupplierService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SupplierService, factory: SupplierService.ɵfac, providedIn: "root" });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SupplierService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=supplier.service.js.map