import { Component } from "@angular/core";
import * as i0 from "@angular/core";
export class UnauthorizedPage {
    static ɵfac = function UnauthorizedPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UnauthorizedPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UnauthorizedPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [[1, "p-20", "text-center", "font-black", "text-red-500", "uppercase", "tracking-widest"]], template: function UnauthorizedPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1, "Access Denied");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnauthorizedPage, [{
        type: Component,
        args: [{
                standalone: true,
                template: `<div class="p-20 text-center font-black text-red-500 uppercase tracking-widest">Access Denied</div>`
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UnauthorizedPage, { className: "UnauthorizedPage" }); })();
//# sourceMappingURL=unauthorized.page.js.map