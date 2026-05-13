import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout/layout.component";
import { authGuard, roleGuard } from "./core/guards";
import { ForgotPasswordPage } from "./pages/auth/forgot-password/forgot-password.component";
import { LoginPage } from "./pages/auth/login/login.component";
import { OAuthCallbackPage } from "./pages/auth/o-auth-callback/o-auth-callback.component";
import { RegisterPage } from "./pages/auth/register/register.component";
import { AlertCentrePage } from "./pages/alerts/alert-centre/alert-centre.component";
import { DashboardPage } from "./pages/dashboard/dashboard/dashboard.component";
import { MovementsPage } from "./pages/movements/movements/movements.component";
import { PaymentReportsPage } from "./pages/payments/payment-reports/payment-reports.component";
import { AddProductPage } from "./pages/products/add-product/add-product.component";
import { EditProductPage } from "./pages/products/edit-product/edit-product.component";
import { ProductDetailsPage } from "./pages/products/product-details/product-details.component";
import { ProductListPage } from "./pages/products/product-list/product-list.component";
import { ProfilePage } from "./pages/profile/profile/profile.component";
import { PurchaseOrdersPage } from "./pages/purchase-orders/purchase-orders/purchase-orders.component";
import { ReportsPage } from "./pages/reports/reports/reports.component";
import { AddSupplierPage } from "./pages/suppliers/add-supplier/add-supplier.component";
import { EditSupplierPage } from "./pages/suppliers/edit-supplier/edit-supplier.component";
import { SupplierDetailsPage } from "./pages/suppliers/supplier-details/supplier-details.component";
import { SupplierListPage } from "./pages/suppliers/supplier-list/supplier-list.component";
import { UnauthorizedPage } from "./pages/unauthorized/unauthorized/unauthorized.component";
import { UserListPage } from "./pages/users/user-list/user-list.component";
import { AddWarehousePage } from "./pages/warehouses/add-warehouse/add-warehouse.component";
import { EditWarehousePage } from "./pages/warehouses/edit-warehouse/edit-warehouse.component";
import { WarehouseDetailsPage } from "./pages/warehouses/warehouse-details/warehouse-details.component";
import { WarehouseListPage } from "./pages/warehouses/warehouse-list/warehouse-list.component";

export const routes: Routes = [
  { path: "login", component: LoginPage },
  { path: "register", component: RegisterPage },
  { path: "oauth2/callback", component: OAuthCallbackPage },
  { path: "forgot-password", component: ForgotPasswordPage },
  { path: "", pathMatch: "full", redirectTo: "login" },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: "dashboard", component: DashboardPage },
      { path: "profile", component: ProfilePage },
      { path: "products", component: ProductListPage },
      { path: "products/add", component: AddProductPage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
      { path: "products/edit/:id", component: EditProductPage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
      { path: "products/:id", component: ProductDetailsPage },
      { path: "users", component: UserListPage, canActivate: [roleGuard(["ADMIN"])] },
      { path: "warehouses", component: WarehouseListPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF"])] },
      { path: "warehouses/add", component: AddWarehousePage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
      { path: "warehouses/edit/:id", component: EditWarehousePage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
      { path: "warehouses/:id", component: WarehouseDetailsPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF"])] },
      { path: "movements", component: MovementsPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF"])] },
      { path: "suppliers", component: SupplierListPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF", "OFFICER"])] },
      { path: "suppliers/add", component: AddSupplierPage, canActivate: [roleGuard(["ADMIN", "OFFICER"])] },
      { path: "suppliers/edit/:id", component: EditSupplierPage, canActivate: [roleGuard(["ADMIN", "OFFICER"])] },
      { path: "suppliers/:id", component: SupplierDetailsPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF", "OFFICER"])] },
      { path: "alerts", component: AlertCentrePage },
      { path: "purchase-orders", component: PurchaseOrdersPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF", "OFFICER"])] },
      { path: "payments", component: PaymentReportsPage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
      { path: "reports", component: ReportsPage, canActivate: [roleGuard([ "STAFF","ADMIN", "MANAGER", "OFFICER"])] },
      { path: "unauthorized", component: UnauthorizedPage }
    ]
  },
  { path: "**", redirectTo: "dashboard" }
];
