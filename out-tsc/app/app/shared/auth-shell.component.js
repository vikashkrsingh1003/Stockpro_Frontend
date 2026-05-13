import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class AuthShellUiComponent {
    title = "";
    subtitle = "";
    mark = "S";
    static ɵfac = function AuthShellUiComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthShellUiComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthShellUiComponent, selectors: [["auth-shell"]], inputs: { title: "title", subtitle: "subtitle", mark: "mark" }, standalone: true, features: [i0.ɵɵStandaloneFeature], ngContentSelectors: _c0, decls: 14, vars: 3, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-[#9b6dff]", "via-[#6e72ff]", "to-[#ffb199]", "p-3", "sm:p-8"], [1, "w-full", "max-w-[1000px]", "bg-white", "rounded-2xl", "md:rounded-[40px]", "shadow-2xl", "flex", "flex-col", "md:flex-row", "overflow-hidden", "min-h-0", "md:min-h-[600px]"], [1, "w-full", "md:w-[45%]", "p-5", "sm:p-8", "md:p-12", "flex", "flex-col", "justify-center"], [1, "mb-6", "md:mb-8"], [1, "w-12", "h-12", "bg-[#7c3aed]", "rounded-xl", "flex", "items-center", "justify-center", "mb-6", "text-white", "text-2xl", "font-bold"], [1, "text-2xl", "md:text-3xl", "font-bold", "text-gray-800", "mb-2"], [1, "text-gray-400", "font-medium"], [1, "hidden", "md:flex", "flex-1", "bg-gray-50", "items-center", "justify-center", "p-12", "border-l", "border-gray-50"], [1, "w-full", "max-w-sm", "aspect-square", "rounded-[40px]", "bg-gradient-to-br", "from-purple-100", "via-white", "to-orange-100", "flex", "items-center", "justify-center", "text-[#7c3aed]", "text-8xl", "font-black", "shadow-inner"]], template: function AuthShellUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2", 5);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 6);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵprojection(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 7)(12, "div", 8);
            i0.ɵɵtext(13, "S");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.mark);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.subtitle);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthShellUiComponent, [{
        type: Component,
        args: [{
                selector: "auth-shell",
                standalone: true,
                template: `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9b6dff] via-[#6e72ff] to-[#ffb199] p-3 sm:p-8">
      <div class="w-full max-w-[1000px] bg-white rounded-2xl md:rounded-[40px] shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-0 md:min-h-[600px]">
        <div class="w-full md:w-[45%] p-5 sm:p-8 md:p-12 flex flex-col justify-center">
          <div class="mb-6 md:mb-8">
            <div class="w-12 h-12 bg-[#7c3aed] rounded-xl flex items-center justify-center mb-6 text-white text-2xl font-bold">{{mark}}</div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{{title}}</h2>
            <p class="text-gray-400 font-medium">{{subtitle}}</p>
          </div>
          <ng-content />
        </div>
        <div class="hidden md:flex flex-1 bg-gray-50 items-center justify-center p-12 border-l border-gray-50">
          <div class="w-full max-w-sm aspect-square rounded-[40px] bg-gradient-to-br from-purple-100 via-white to-orange-100 flex items-center justify-center text-[#7c3aed] text-8xl font-black shadow-inner">S</div>
        </div>
      </div>
    </div>
  `
            }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], mark: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthShellUiComponent, { className: "AuthShellUiComponent" }); })();
//# sourceMappingURL=auth-shell.component.js.map