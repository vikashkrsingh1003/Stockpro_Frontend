import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { emailFromToken, roleFromToken } from "../core/api";
import * as i0 from "@angular/core";
import * as i1 from "../core/api";
import * as i2 from "@angular/common";
function LayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵlistener("click", function LayoutComponent_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.open = false); });
    i0.ɵɵelementEnd();
} }
function LayoutComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 29)(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r3.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.name);
} }
function LayoutComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.unread > 99 ? "99+" : ctx_r1.unread);
} }
export class LayoutComponent {
    auth;
    alerts;
    open = typeof window === "undefined" ? true : window.innerWidth >= 1024;
    role = roleFromToken();
    email = emailFromToken();
    unread = 0;
    menu = [
        { name: "Dashboard", icon: "▦", path: "/dashboard", roles: null },
        { name: "Products", icon: "▣", path: "/products", roles: null },
        { name: "Warehouses", icon: "▤", path: "/warehouses", roles: ["ADMIN", "MANAGER", "STAFF", "OFFICER"] },
        { name: "Movements", icon: "⇆", path: "/movements", roles: ["ADMIN", "MANAGER", "STAFF", "OFFICER"] },
        { name: "Suppliers", icon: "☷", path: "/suppliers", roles: ["ADMIN", "MANAGER", "STAFF", "OFFICER"] },
        { name: "Orders", icon: "🛒", path: "/purchase-orders", roles: ["ADMIN", "MANAGER", "STAFF", "OFFICER"] },
        { name: "Alerts", icon: "!", path: "/alerts", roles: null },
        { name: "Reports", icon: "▥", path: "/reports", roles: ["ADMIN", "MANAGER"] },
        { name: "Users", icon: "◎", path: "/users", roles: ["ADMIN", "MANAGER"] }
    ].filter((m) => !m.roles || m.roles.includes(this.role));
    constructor(auth, alerts) {
        this.auth = auth;
        this.alerts = alerts;
        this.alerts.unreadCount().subscribe({ next: (count) => this.unread = count || 0, error: () => null });
    }
    static ɵfac = function LayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LayoutComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i1.AlertService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 40, vars: 10, consts: [[1, "flex", "bg-[#fcfcfd]", "min-h-screen", "font-sans", "overflow-hidden", "relative"], ["class", "fixed inset-0 bg-black/40 z-40 lg:hidden", 3, "click", 4, "ngIf"], [1, "bg-[#0f172a]", "border-r", "border-white/5", "h-screen", "w-72", "max-w-[85vw]", "flex", "flex-col", "shadow-2xl", "transition-transform", "duration-300", "overflow-hidden", "z-50", "shrink-0", "fixed", "lg:sticky", "lg:top-0", "lg:translate-x-0"], [1, "p-5", "md:p-8", "flex", "items-center", "justify-between", "whitespace-nowrap"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "bg-[#7c3aed]", "rounded-xl", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-xl"], [1, "text-xl", "font-bold", "text-white", "tracking-tight"], [1, "p-2", "hover:bg-white/10", "text-slate-400", "hover:text-white", "rounded-xl", "lg:hidden", 3, "click"], [1, "flex-1", "px-4", "space-y-2", "mt-4", "overflow-y-auto"], ["routerLinkActive", "bg-[#7c3aed] text-white shadow-lg shadow-purple-900/20", "class", "w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-slate-400 hover:bg-white/5 hover:text-white transition-all whitespace-nowrap", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "p-6", "border-t", "border-white/5", "bg-white/5", "whitespace-nowrap"], [1, "w-full", "flex", "items-center", "gap-4", "px-5", "py-4", "text-red-400", "hover:bg-red-500/10", "rounded-2xl", "transition-all", 3, "click"], [1, "p-2", "bg-red-500/10", "rounded-lg"], [1, "text-sm", "font-bold"], [1, "flex-1", "flex", "flex-col", "min-w-0", "h-screen", "overflow-y-auto"], [1, "h-16", "md:h-20", "bg-[#0f172a]", "border-b", "border-white/5", "flex", "items-center", "justify-between", "px-3", "sm:px-4", "md:px-8", "sticky", "top-0", "z-30", "shadow-2xl"], [1, "p-3", "bg-white/5", "text-white", "rounded-2xl", "hover:bg-white/10", "border", "border-white/5", "shadow-lg", 3, "click"], [1, "flex", "items-center", "gap-3", "md:gap-6"], ["routerLink", "/alerts", 1, "p-2.5", "hover:bg-white/5", "text-slate-500", "hover:text-white", "rounded-2xl", "relative"], ["class", "absolute top-1 right-1 min-w-4 h-4 px-1 bg-red-500 text-white text-[9px] font-black rounded-full border-2 border-[#0f172a] flex items-center justify-center", 4, "ngIf"], [1, "flex", "items-center", "gap-4", "bg-white/5", "hover:bg-white/10", "p-1.5", "md:pr-4", "rounded-[20px]", "border", "border-white/5", "shadow-lg"], [1, "w-10", "h-10", "bg-[#7c3aed]", "text-white", "rounded-2xl", "flex", "items-center", "justify-center"], [1, "hidden", "md:block", "text-right", "leading-tight"], [1, "text-xs", "font-bold", "text-white", "uppercase", "tracking-tight"], [1, "text-[10px]", "font-black", "text-purple-400", "uppercase", "tracking-[1.5px]"], [1, "flex-1", "p-2", "sm:p-4", "md:p-8"], [1, "max-w-[1600px]", "mx-auto"], [1, "py-4", "md:py-6", "px-4", "md:px-8", "border-t", "border-gray-100", "text-center", "text-xs", "text-gray-400"], [1, "fixed", "inset-0", "bg-black/40", "z-40", "lg:hidden", 3, "click"], ["routerLinkActive", "bg-[#7c3aed] text-white shadow-lg shadow-purple-900/20", 1, "w-full", "flex", "items-center", "gap-4", "px-5", "py-3.5", "rounded-2xl", "text-slate-400", "hover:bg-white/5", "hover:text-white", "transition-all", "whitespace-nowrap", 3, "routerLink"], [1, "text-lg"], [1, "text-sm", "font-bold", "tracking-wide"], [1, "absolute", "top-1", "right-1", "min-w-4", "h-4", "px-1", "bg-red-500", "text-white", "text-[9px]", "font-black", "rounded-full", "border-2", "border-[#0f172a]", "flex", "items-center", "justify-center"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, LayoutComponent_div_1_Template, 1, 0, "div", 1);
            i0.ɵɵelementStart(2, "aside", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
            i0.ɵɵtext(6, "S");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span", 6);
            i0.ɵɵtext(8, "StockPro");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "button", 7);
            i0.ɵɵlistener("click", function LayoutComponent_Template_button_click_9_listener() { return ctx.open = false; });
            i0.ɵɵtext(10, "\u2039");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "nav", 8);
            i0.ɵɵtemplate(12, LayoutComponent_a_12_Template, 5, 3, "a", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 10)(14, "button", 11);
            i0.ɵɵlistener("click", function LayoutComponent_Template_button_click_14_listener() { return ctx.auth.logout(); });
            i0.ɵɵelementStart(15, "span", 12);
            i0.ɵɵtext(16, "\u238B");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "span", 13);
            i0.ɵɵtext(18, "Logout");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(19, "div", 14)(20, "header", 15)(21, "button", 16);
            i0.ɵɵlistener("click", function LayoutComponent_Template_button_click_21_listener() { return ctx.open = !ctx.open; });
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 17)(24, "button", 18);
            i0.ɵɵtext(25, " \uD83D\uDD14 ");
            i0.ɵɵtemplate(26, LayoutComponent_span_26_Template, 2, 1, "span", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 20)(28, "div", 21);
            i0.ɵɵtext(29, "\uD83D\uDC64");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 22)(31, "p", 23);
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "p", 24);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(35, "main", 25)(36, "div", 26);
            i0.ɵɵelement(37, "router-outlet");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "footer", 27);
            i0.ɵɵtext(39, " \u00A9 2024 StockPro Inventory Systems. All rights reserved. ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("translate-x-0", ctx.open)("-translate-x-full", !ctx.open);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngForOf", ctx.menu);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate1(" ", ctx.open ? "\u00D7" : "\u2630", " ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.unread > 0);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.email);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.role);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{
                selector: "app-layout",
                standalone: true,
                imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
                template: `
    <div class="flex bg-[#fcfcfd] min-h-screen font-sans overflow-hidden relative">
      <div *ngIf="open" class="fixed inset-0 bg-black/40 z-40 lg:hidden" (click)="open=false"></div>

      <aside class="bg-[#0f172a] border-r border-white/5 h-screen w-72 max-w-[85vw] flex flex-col shadow-2xl transition-transform duration-300 overflow-hidden z-50 shrink-0 fixed lg:sticky lg:top-0 lg:translate-x-0"
        [class.translate-x-0]="open" [class.-translate-x-full]="!open">
        <div class="p-5 md:p-8 flex items-center justify-between whitespace-nowrap">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-[#7c3aed] rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
            <span class="text-xl font-bold text-white tracking-tight">StockPro</span>
          </div>
          <button class="p-2 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl lg:hidden" (click)="open=false">‹</button>
        </div>

        <nav class="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          <a *ngFor="let item of menu" [routerLink]="item.path" routerLinkActive="bg-[#7c3aed] text-white shadow-lg shadow-purple-900/20"
            class="w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-slate-400 hover:bg-white/5 hover:text-white transition-all whitespace-nowrap">
            <span class="text-lg">{{item.icon}}</span>
            <span class="text-sm font-bold tracking-wide">{{item.name}}</span>
          </a>
        </nav>

        <div class="p-6 border-t border-white/5 bg-white/5 whitespace-nowrap">
          <button (click)="auth.logout()" class="w-full flex items-center gap-4 px-5 py-4 text-red-400 hover:bg-red-500/10 rounded-2xl transition-all">
            <span class="p-2 bg-red-500/10 rounded-lg">⎋</span>
            <span class="text-sm font-bold">Logout</span>
          </button>
        </div>
      </aside>

      <div class="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <header class="h-16 md:h-20 bg-[#0f172a] border-b border-white/5 flex items-center justify-between px-3 sm:px-4 md:px-8 sticky top-0 z-30 shadow-2xl">
          <button (click)="open=!open" class="p-3 bg-white/5 text-white rounded-2xl hover:bg-white/10 border border-white/5 shadow-lg">
            {{open ? "×" : "☰"}}
          </button>
          <div class="flex items-center gap-3 md:gap-6">
            <button routerLink="/alerts" class="p-2.5 hover:bg-white/5 text-slate-500 hover:text-white rounded-2xl relative">
              🔔
              <span *ngIf="unread > 0" class="absolute top-1 right-1 min-w-4 h-4 px-1 bg-red-500 text-white text-[9px] font-black rounded-full border-2 border-[#0f172a] flex items-center justify-center">{{unread > 99 ? "99+" : unread}}</span>
            </button>
            <div class="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-1.5 md:pr-4 rounded-[20px] border border-white/5 shadow-lg">
              <div class="w-10 h-10 bg-[#7c3aed] text-white rounded-2xl flex items-center justify-center">👤</div>
              <div class="hidden md:block text-right leading-tight">
                <p class="text-xs font-bold text-white uppercase tracking-tight">{{email}}</p>
                <p class="text-[10px] font-black text-purple-400 uppercase tracking-[1.5px]">{{role}}</p>
              </div>
            </div>
          </div>
        </header>

        <main class="flex-1 p-2 sm:p-4 md:p-8">
          <div class="max-w-[1600px] mx-auto">
            <router-outlet />
          </div>
        </main>
        <footer class="py-4 md:py-6 px-4 md:px-8 border-t border-gray-100 text-center text-xs text-gray-400">
          © 2026 StockPro Inventory Systems. All rights reserved.
        </footer>
      </div>
    </div>
  `
            }]
    }], () => [{ type: i1.AuthService }, { type: i1.AlertService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LayoutComponent, { className: "LayoutComponent" }); })();
//# sourceMappingURL=layout.component.js.map