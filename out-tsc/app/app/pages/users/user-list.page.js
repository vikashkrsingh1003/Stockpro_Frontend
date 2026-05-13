import { Component } from "@angular/core";
import { pageImports } from "../page-imports";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../shared/ui.components";
const _c0 = () => ["fullName", "email", "role", "active"];
export class UserListPage {
    users = [];
    constructor(api) { api.all().subscribe((d) => this.users = d || []); }
    static ɵfac = function UserListPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserListPage)(i0.ɵɵdirectiveInject(i1.UserService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserListPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 3, consts: [[1, "page-shell"], ["title", "User Management", "subtitle", "Manage staff roles and access permissions."], [3, "rows", "cols"]], template: function UserListPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "header-card", 1)(2, "table-list", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rows", ctx.users)("cols", i0.ɵɵpureFunction0(2, _c0));
        } }, dependencies: [i2.CommonModule, i3.FormsModule, i4.TableListUiComponent, i4.HeaderCardUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserListPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: pageImports,
                template: `<div class="page-shell"><header-card title="User Management" subtitle="Manage staff roles and access permissions." /><table-list [rows]="users" [cols]="['fullName','email','role','active']" /></div>`
            }]
    }], () => [{ type: i1.UserService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserListPage, { className: "UserListPage" }); })();
//# sourceMappingURL=user-list.page.js.map