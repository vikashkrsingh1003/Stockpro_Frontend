import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AnalyticsService {
    http;
    constructor(http) {
        this.http = http;
    }
    dashboard() { return this.http.get(`${API_BASE_URL}/analytics/dashboard`); }
    valuation() { return this.http.get(`${API_BASE_URL}/analytics/valuation`); }
    topMoving(limit = 10) { return this.http.get(`${API_BASE_URL}/analytics/top-moving`, { params: { limit } }); }
    deadStock() { return this.http.get(`${API_BASE_URL}/analytics/dead-stock`); }
    utilization() { return this.http.get(`${API_BASE_URL}/analytics/warehouses/utilization`); }
    supplierSpend() { return this.http.get(`${API_BASE_URL}/analytics/supplier-spend`); }
    async downloadCsv(endpoint, filename) {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE_URL}/analytics/export/${endpoint}`, { headers: { Authorization: `Bearer ${token}` } });
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }
    static ɵfac = function AnalyticsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnalyticsService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: "root" });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnalyticsService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=analytics.service.js.map