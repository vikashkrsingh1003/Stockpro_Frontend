import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UserService {
    http;
    constructor(http) {
        this.http = http;
    }
    all() { return this.http.get(`${API_BASE_URL}/auth/users`); }
    deactivate(userId) { return this.http.put(`${API_BASE_URL}/auth/deactivate`, null, { params: paramsFrom({ userId }) }); }
    delete(userId) { return this.http.delete(`${API_BASE_URL}/auth/users/${userId}`); }
    role(userId, role) { return this.http.put(`${API_BASE_URL}/auth/users/${userId}/role`, null, { params: paramsFrom({ role }) }); }
    static ɵfac = function UserService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=user.service.js.map