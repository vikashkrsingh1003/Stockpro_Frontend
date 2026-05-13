import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
export class AuthService {
    http;
    router;
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    login(data) { return this.http.post(`${API_BASE_URL}/auth/login`, data); }
    register(data) { return this.http.post(`${API_BASE_URL}/auth/register`, data); }
    profile() { return this.http.get(`${API_BASE_URL}/auth/profile`); }
    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        this.router.navigateByUrl("/login");
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
    }], () => [{ type: i1.HttpClient }, { type: i2.Router }], null); })();
//# sourceMappingURL=auth.service.js.map