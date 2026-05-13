import { LayoutComponent } from "./layout/layout.component";
import { authGuard, roleGuard } from "./core/guards";
import { ForgotPasswordPage, LoginPage, RegisterPage } from "./pages/auth/auth.pages";
import { AlertCentrePage } from "./pages/alerts/alert-centre.page";
import { DashboardPage } from "./pages/dashboard/dashboard.page";
import { MovementsPage } from "./pages/movements/movements.page";
import { AddProductPage, EditProductPage, ProductDetailsPage, ProductListPage } from "./pages/products/product.pages";
import { PurchaseOrdersPage } from "./pages/purchase-orders/purchase-orders.page";
import { ReportsPage } from "./pages/reports/reports.page";
import { AddSupplierPage, EditSupplierPage, SupplierDetailsPage, SupplierListPage } from "./pages/suppliers/supplier.pages";
import { UnauthorizedPage } from "./pages/unauthorized/unauthorized.page";
import { UserListPage } from "./pages/users/user-list.page";
import { AddWarehousePage, EditWarehousePage, WarehouseDetailsPage, WarehouseListPage } from "./pages/warehouses/warehouse.pages";
export const routes = [
    { path: "login", component: LoginPage },
    { path: "register", component: RegisterPage },
    { path: "forgot-password", component: ForgotPasswordPage },
    { path: "", pathMatch: "full", redirectTo: "login" },
    {
        path: "",
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: "dashboard", component: DashboardPage },
            { path: "products", component: ProductListPage },
            { path: "products/add", component: AddProductPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF"])] },
            { path: "products/edit/:id", component: EditProductPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF"])] },
            { path: "products/:id", component: ProductDetailsPage },
            { path: "users", component: UserListPage, canActivate: [roleGuard(["ADMIN"])] },
            { path: "warehouses", component: WarehouseListPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF", "OFFICER"])] },
            { path: "warehouses/add", component: AddWarehousePage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
            { path: "warehouses/edit/:id", component: EditWarehousePage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
            { path: "warehouses/:id", component: WarehouseDetailsPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF", "OFFICER"])] },
            { path: "movements", component: MovementsPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF", "OFFICER"])] },
            { path: "suppliers", component: SupplierListPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF", "OFFICER"])] },
            { path: "suppliers/add", component: AddSupplierPage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
            { path: "suppliers/edit/:id", component: EditSupplierPage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
            { path: "suppliers/:id", component: SupplierDetailsPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF", "OFFICER"])] },
            { path: "alerts", component: AlertCentrePage },
            { path: "purchase-orders", component: PurchaseOrdersPage, canActivate: [roleGuard(["ADMIN", "MANAGER", "STAFF", "OFFICER"])] },
            { path: "reports", component: ReportsPage, canActivate: [roleGuard(["ADMIN", "MANAGER"])] },
            { path: "unauthorized", component: UnauthorizedPage }
        ]
    },
    { path: "**", redirectTo: "dashboard" }
];
//# sourceMappingURL=app.routes.js.map