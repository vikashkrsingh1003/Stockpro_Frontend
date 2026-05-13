import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { filter } from "rxjs";
import { AuthService, emailFromToken, roleFromToken, AlertService } from "../../core/api";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  open = this.defaultSidebarState();
  theme: "light" | "dark" = this.initialTheme();
  isDashboard = false;
  role = roleFromToken();
  email = emailFromToken();
  profileName = localStorage.getItem("profileName") || "";
  unread = 0;
  menu = [
    { name: "Dashboard", icon: "▦", path: "/dashboard", roles: null },
    { name: "Products", icon: "▣", path: "/products", roles: null },
    { name: "Warehouses", icon: "▤", path: "/warehouses", roles: ["ADMIN", "MANAGER", "STAFF"] },
    { name: "Movements", icon: "⇆", path: "/movements", roles: ["ADMIN", "MANAGER", "STAFF"] },
    { name: "Suppliers", icon: "☷", path: "/suppliers", roles: ["ADMIN", "MANAGER", "STAFF", "OFFICER"] },
    { name: "Orders", icon: "🛒", path: "/purchase-orders", roles: ["ADMIN", "MANAGER", "STAFF", "OFFICER"] },
    { name: "Payments", icon: "₹", path: "/payments", roles: ["ADMIN", "MANAGER"] },
    { name: "Alerts", icon: "!", path: "/alerts", roles: null },
    { name: "Reports", icon: "▥", path: "/reports", roles: ["ADMIN", "MANAGER", "OFFICER"] },
    { name: "Users", icon: "◎", path: "/users", roles: ["ADMIN"] }
  ].filter((m) => !m.roles || m.roles.includes(this.role));

  constructor(public auth: AuthService, private alerts: AlertService, private router: Router) {
    this.applyTheme(this.theme);
    this.isDashboard = this.router.url.startsWith("/dashboard");
    this.open = this.defaultSidebarState();
    this.alerts.unreadCount().subscribe({ next: (count) => this.unread = count || 0, error: () => null });
    this.auth.profile().subscribe({
      next: (profile) => {
        this.profileName = profile?.fullName || this.profileName;
        this.auth.publishProfile(profile);
      },
      error: () => null
    });
    this.auth.profileChanges$.subscribe((profile) => {
      if (profile?.fullName) this.profileName = profile.fullName;
    });
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe((event) => {
      this.isDashboard = event.urlAfterRedirects.startsWith("/dashboard");
      this.open = this.defaultSidebarState();
    });
  }

  closeMobileMenu() {
    if (this.isDashboard || this.isMobile()) {
      this.open = false;
    }
  }

  toggleTheme() {
    this.theme = this.theme === "dark" ? "light" : "dark";
    this.applyTheme(this.theme);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("stockpro-theme", this.theme);
    }
  }

  private initialTheme(): "light" | "dark" {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("stockpro-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark";
  }

  private applyTheme(theme: "light" | "dark") {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("theme-dark", theme === "dark");
    document.body.classList.toggle("theme-light", theme === "light");
  }

  private defaultSidebarState() {
    if (typeof window === "undefined") return true;
    if (window.location.pathname.startsWith("/dashboard")) return false;
    return window.innerWidth >= 1024;
  }

  private isMobile() {
    return typeof window !== "undefined" && window.innerWidth < 1024;
  }
}
