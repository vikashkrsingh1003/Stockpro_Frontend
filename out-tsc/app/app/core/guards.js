import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { roleFromToken } from "./api";
export const authGuard = () => {
    const router = inject(Router);
    if (localStorage.getItem("token"))
        return true;
    return router.parseUrl("/login");
};
export function roleGuard(allowed) {
    return () => {
        const router = inject(Router);
        if (!localStorage.getItem("token"))
            return router.parseUrl("/login");
        const role = roleFromToken();
        return allowed.includes(role) ? true : router.parseUrl("/dashboard");
    };
}
//# sourceMappingURL=guards.js.map