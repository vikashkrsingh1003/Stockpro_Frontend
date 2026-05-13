import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class WarehouseService {
    http;
    constructor(http) {
        this.http = http;
    }
    all() { return this.http.get(`${API_BASE_URL}/warehouses`); }
    byId(id) { return this.http.get(`${API_BASE_URL}/warehouses/${id}`); }
    create(data) { return this.http.post(`${API_BASE_URL}/warehouses`, data); }
    update(id, data) { return this.http.put(`${API_BASE_URL}/warehouses/${id}`, data); }
    delete(id) { return this.http.delete(`${API_BASE_URL}/warehouses/${id}`); }
    status(id, active) { return this.http.put(`${API_BASE_URL}/warehouses/${id}/status`, null, { params: { active } }); }
    inventory(id) { return this.http.get(`${API_BASE_URL}/warehouses/${id}/inventory`); }
    stock(warehouseId, productId, quantity, reason) {
        return this.http.post(`${API_BASE_URL}/warehouses/${warehouseId}/stock`, null, { params: paramsFrom({ productId, quantity, reason }) });
    }
    transfer(data) {
        return this.http.post(`${API_BASE_URL}/warehouses/transfer`, null, { params: paramsFrom(data) });
    }
    issueStock(warehouseId, productId, quantity, reason) {
        return this.http.post(`${API_BASE_URL}/warehouses/stock/issue`, { warehouseId, productId, quantity, reason });
    }
    writeOffStock(warehouseId, productId, quantity, reason) {
        return this.http.post(`${API_BASE_URL}/warehouses/stock/write-off`, { warehouseId, productId, quantity, reason });
    }
    returnStock(warehouseId, productId, quantity, reason, returnType) {
        return this.http.post(`${API_BASE_URL}/warehouses/stock/return`, { warehouseId, productId, quantity, reason, returnType });
    }
    updateThreshold(warehouseId, productId, threshold) {
        return this.http.put(`${API_BASE_URL}/warehouses/${warehouseId}/stock/threshold`, null, { params: paramsFrom({ productId, threshold }) });
    }
    deleteStock(warehouseId, productId) {
        return this.http.delete(`${API_BASE_URL}/warehouses/${warehouseId}/stock`, { params: paramsFrom({ productId }) });
    }
    static ɵfac = function WarehouseService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WarehouseService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WarehouseService, factory: WarehouseService.ɵfac, providedIn: "root" });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WarehouseService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=warehouse.service.js.map