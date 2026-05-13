import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AlertService {
    http;
    constructor(http) {
        this.http = http;
    }
    all(filters = {}) { return this.http.get(`${API_BASE_URL}/alerts`, { params: paramsFrom(filters) }); }
    unreadCount() { return this.http.get(`${API_BASE_URL}/alerts/count/unread`); }
    acknowledge(id) { return this.http.put(`${API_BASE_URL}/alerts/${id}/acknowledge`, null); }
    markRead(id) { return this.http.put(`${API_BASE_URL}/alerts/${id}/read`, null); }
    static ɵfac = function AlertService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AlertService, factory: AlertService.ɵfac, providedIn: "root" });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=alert.service.js.map