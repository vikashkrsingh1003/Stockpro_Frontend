import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class MovementService {
    http;
    constructor(http) {
        this.http = http;
    }
    filtered(filters) { return this.http.get(`${API_BASE_URL}/movements`, { params: paramsFrom(filters) }); }
    byWarehouse(id) { return this.http.get(`${API_BASE_URL}/movements/warehouse/${id}`); }
    static ɵfac = function MovementService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MovementService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MovementService, factory: MovementService.ɵfac, providedIn: "root" });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MovementService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=movement.service.js.map