import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PurchaseService {
    http;
    constructor(http) {
        this.http = http;
    }
    all(filters = {}) { return this.http.get(`${API_BASE_URL}/purchase-orders`, { params: paramsFrom(filters) }); }
    create(data) { return this.http.post(`${API_BASE_URL}/purchase-orders`, data); }
    submit(id) { return this.http.put(`${API_BASE_URL}/purchase-orders/${id}/submit`, null); }
    approve(id) { return this.http.put(`${API_BASE_URL}/purchase-orders/${id}/approve`, null); }
    reject(id, reason) { return this.http.put(`${API_BASE_URL}/purchase-orders/${id}/reject`, null, { params: { reason } }); }
    cancel(id, reason) { return this.http.put(`${API_BASE_URL}/purchase-orders/${id}/cancel`, null, { params: { reason } }); }
    receive(id, productId, receivedQty) {
        return this.http.post(`${API_BASE_URL}/purchase-orders/${id}/receive`, null, { params: paramsFrom({ productId, receivedQty }) });
    }
    overdue() { return this.http.get(`${API_BASE_URL}/purchase-orders/overdue`); }
    static ɵfac = function PurchaseService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PurchaseService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PurchaseService, factory: PurchaseService.ɵfac, providedIn: "root" });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PurchaseService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=purchase.service.js.map