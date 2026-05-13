import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AuthShellUiComponent } from "../../shared/auth-shell.component";
import * as i0 from "@angular/core";
import * as i1 from "../../core/api";
import * as i2 from "@angular/router";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function ForgotPasswordPage_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 3);
    i0.ɵɵlistener("ngSubmit", function ForgotPasswordPage_form_1_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitted = true); });
    i0.ɵɵelementStart(1, "input", 4);
    i0.ɵɵtwoWayListener("ngModelChange", function ForgotPasswordPage_form_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 5);
    i0.ɵɵtext(3, "Send Reset Link");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.email);
} }
function ForgotPasswordPage_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "p", 7);
    i0.ɵɵtext(2, "Reset instructions sent!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 8);
    i0.ɵɵtext(4, "Back to Login");
    i0.ɵɵelementEnd()();
} }
export class LoginPage {
    auth;
    router;
    form = { email: "", password: "" };
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    submit() {
        this.auth.login(this.form).subscribe({
            next: (res) => {
                localStorage.setItem("token", res.token);
                if (res.role)
                    localStorage.setItem("role", res.role);
                if (res.email)
                    localStorage.setItem("email", res.email);
                this.router.navigateByUrl("/dashboard");
            },
            error: () => alert("Invalid credentials")
        });
    }
    static ɵfac = function LoginPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginPage)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 22, vars: 2, consts: [["title", "Welcome Back!", "subtitle", "Please sign in to continue", "mark", "S"], [1, "space-y-5", 3, "ngSubmit"], [1, "block"], [1, "block", "text-sm", "font-semibold", "text-gray-700", "mb-2"], ["type", "email", "name", "email", "required", "", "placeholder", "example@mail.com", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "placeholder", "Password", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "flex", "items-center", "gap-2", "text-gray-500"], ["type", "checkbox"], ["routerLink", "/forgot-password", 1, "text-[#7c3aed]", "font-semibold", "hover:underline"], ["type", "submit", 1, "btn-primary", "w-full"], [1, "text-sm", "mt-10", "text-center", "text-gray-500", "font-medium"], ["routerLink", "/register", 1, "text-[#7c3aed]", "font-bold", "hover:underline"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "auth-shell", 0)(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function LoginPage_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(2, "label", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function LoginPage_Template_input_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "label", 2)(7, "span", 3);
            i0.ɵɵtext(8, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function LoginPage_Template_input_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 6)(11, "label", 7);
            i0.ɵɵelement(12, "input", 8);
            i0.ɵɵtext(13, " Remember me");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 9);
            i0.ɵɵtext(15, "Forgot Password");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "button", 10);
            i0.ɵɵtext(17, "Login");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "p", 11);
            i0.ɵɵtext(19, "Not a member? ");
            i0.ɵɵelementStart(20, "a", 12);
            i0.ɵɵtext(21, "Register Now");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.email);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.password);
        } }, dependencies: [CommonModule, FormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.NgModel, i3.NgForm, RouterLink, AuthShellUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [CommonModule, FormsModule, RouterLink, AuthShellUiComponent],
                template: `
    <auth-shell title="Welcome Back!" subtitle="Please sign in to continue" mark="S">
      <form (ngSubmit)="submit()" class="space-y-5">
        <label class="block"><span class="block text-sm font-semibold text-gray-700 mb-2">Email</span><input class="input" type="email" [(ngModel)]="form.email" name="email" required placeholder="example@mail.com"></label>
        <label class="block"><span class="block text-sm font-semibold text-gray-700 mb-2">Password</span><input class="input" type="password" [(ngModel)]="form.password" name="password" required placeholder="Password"></label>
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 text-gray-500"><input type="checkbox"> Remember me</label>
          <a routerLink="/forgot-password" class="text-[#7c3aed] font-semibold hover:underline">Forgot Password</a>
        </div>
        <button class="btn-primary w-full" type="submit">Login</button>
      </form>
      <p class="text-sm mt-10 text-center text-gray-500 font-medium">Not a member? <a routerLink="/register" class="text-[#7c3aed] font-bold hover:underline">Register Now</a></p>
    </auth-shell>
  `
            }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginPage, { className: "LoginPage" }); })();
export class RegisterPage {
    auth;
    router;
    form = { fullName: "", email: "", password: "", phone: "", department: "" };
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    submit() {
        this.auth.register(this.form).subscribe({
            next: () => { alert("Registration successful! Please login."); this.router.navigateByUrl("/login"); },
            error: (err) => alert(err?.error || "Error during registration")
        });
    }
    static ɵfac = function RegisterPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegisterPage)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 23, vars: 5, consts: [["title", "Join Us!", "subtitle", "Create your StockPro account", "mark", "S"], [1, "space-y-4", 3, "ngSubmit"], ["name", "fullName", "required", "", "placeholder", "Full Name", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "phone", "required", "", "placeholder", "Phone Number", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "email", "required", "", "type", "email", "placeholder", "Email", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "department", 1, "input", 3, "ngModelChange", "ngModel"], ["value", ""], ["name", "password", "required", "", "type", "password", "placeholder", "Password", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", "w-full"], [1, "text-sm", "mt-10", "text-center", "text-gray-500", "font-medium"], ["routerLink", "/login", 1, "text-[#7c3aed]", "font-bold", "hover:underline"]], template: function RegisterPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "auth-shell", 0)(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function RegisterPage_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(2, "input", 2);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterPage_Template_input_ngModelChange_2_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.fullName, $event) || (ctx.form.fullName = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 3);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterPage_Template_input_ngModelChange_3_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterPage_Template_input_ngModelChange_4_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "select", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterPage_Template_select_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.department, $event) || (ctx.form.department = $event); return $event; });
            i0.ɵɵelementStart(6, "option", 6);
            i0.ɵɵtext(7, "Select Department");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "option");
            i0.ɵɵtext(9, "Warehouse");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "option");
            i0.ɵɵtext(11, "Inventory");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "option");
            i0.ɵɵtext(13, "Sales");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "option");
            i0.ɵɵtext(15, "Management");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "input", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterPage_Template_input_ngModelChange_16_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "button", 8);
            i0.ɵɵtext(18, "Create Account");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "p", 9);
            i0.ɵɵtext(20, "Already a member? ");
            i0.ɵɵelementStart(21, "a", 10);
            i0.ɵɵtext(22, "Login Here");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.fullName);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.phone);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.email);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.department);
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.form.password);
        } }, dependencies: [CommonModule, FormsModule, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.NgModel, i3.NgForm, RouterLink, AuthShellUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [CommonModule, FormsModule, RouterLink, AuthShellUiComponent],
                template: `
    <auth-shell title="Join Us!" subtitle="Create your StockPro account" mark="S">
      <form (ngSubmit)="submit()" class="space-y-4">
        <input class="input" name="fullName" [(ngModel)]="form.fullName" required placeholder="Full Name">
        <input class="input" name="phone" [(ngModel)]="form.phone" required placeholder="Phone Number">
        <input class="input" name="email" [(ngModel)]="form.email" required type="email" placeholder="Email">
        <select class="input" name="department" [(ngModel)]="form.department">
          <option value="">Select Department</option><option>Warehouse</option><option>Inventory</option><option>Sales</option><option>Management</option>
        </select>
        <input class="input" name="password" [(ngModel)]="form.password" required type="password" placeholder="Password">
        <button class="btn-primary w-full" type="submit">Create Account</button>
      </form>
      <p class="text-sm mt-10 text-center text-gray-500 font-medium">Already a member? <a routerLink="/login" class="text-[#7c3aed] font-bold hover:underline">Login Here</a></p>
    </auth-shell>
  `
            }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterPage, { className: "RegisterPage" }); })();
export class ForgotPasswordPage {
    email = "";
    submitted = false;
    static ɵfac = function ForgotPasswordPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForgotPasswordPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ForgotPasswordPage, selectors: [["ng-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [["title", "Forgot Password?", "subtitle", "Enter your email to get a reset link", "mark", "?"], ["class", "space-y-6", 3, "ngSubmit", 4, "ngIf"], ["class", "text-center bg-purple-50 p-6 rounded-2xl border border-purple-100", 4, "ngIf"], [1, "space-y-6", 3, "ngSubmit"], ["type", "email", "name", "email", "required", "", "placeholder", "example@mail.com", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", "w-full"], [1, "text-center", "bg-purple-50", "p-6", "rounded-2xl", "border", "border-purple-100"], [1, "text-[#7c3aed]", "font-semibold", "mb-4"], ["routerLink", "/login", 1, "text-[#7c3aed]", "font-bold", "hover:underline"]], template: function ForgotPasswordPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "auth-shell", 0);
            i0.ɵɵtemplate(1, ForgotPasswordPage_form_1_Template, 4, 1, "form", 1)(2, ForgotPasswordPage_div_2_Template, 5, 0, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.submitted);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.submitted);
        } }, dependencies: [CommonModule, i4.NgIf, FormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.NgModel, i3.NgForm, RouterLink, AuthShellUiComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordPage, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [CommonModule, FormsModule, RouterLink, AuthShellUiComponent],
                template: `
    <auth-shell title="Forgot Password?" subtitle="Enter your email to get a reset link" mark="?">
      <form *ngIf="!submitted" (ngSubmit)="submitted=true" class="space-y-6">
        <input class="input" type="email" name="email" [(ngModel)]="email" required placeholder="example@mail.com">
        <button class="btn-primary w-full" type="submit">Send Reset Link</button>
      </form>
      <div *ngIf="submitted" class="text-center bg-purple-50 p-6 rounded-2xl border border-purple-100">
        <p class="text-[#7c3aed] font-semibold mb-4">Reset instructions sent!</p>
        <a routerLink="/login" class="text-[#7c3aed] font-bold hover:underline">Back to Login</a>
      </div>
    </auth-shell>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPasswordPage, { className: "ForgotPasswordPage" }); })();
//# sourceMappingURL=auth.pages.js.map