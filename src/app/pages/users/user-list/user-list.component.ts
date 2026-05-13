import { Component } from "@angular/core";
import { UserService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListPage {
  users: any[] = [];
  roles = ["ADMIN", "MANAGER", "STAFF", "OFFICER"];
  query = "";
  roleFilter = "ALL";
  statusFilter = "ALL";
  createOpen = false;
  creating = false;
  confirmOpen = false;
  pendingAction: "deactivate" | "delete" | null = null;
  pendingUser: any = null;
  actionLoading = false;
  newUser: any = {
    fullName: "",
    email: "",
    phone: "",
    department: "",
    role: "STAFF",
    password: ""
  };

  constructor(private api: UserService, private notifications: NotificationService) { this.load(); }

  load() {
    this.api.all().subscribe((d) => this.users = d || []);
  }

  get filteredUsers() {
    const search = this.query.trim().toLowerCase();

    return this.users.filter((user) => {
      const role = this.cleanRole(user.role);
      const active = this.isActive(user);
      const text = [
        this.displayName(user),
        user.email,
        user.phone,
        user.department,
        role
      ].filter(Boolean).join(" ").toLowerCase();

      const matchesSearch = !search || text.includes(search);
      const matchesRole = this.roleFilter === "ALL" || role === this.roleFilter;
      const matchesStatus = this.statusFilter === "ALL"
        || (this.statusFilter === "ACTIVE" && active)
        || (this.statusFilter === "INACTIVE" && !active);

      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  get totalUsers() {
    return this.users.length;
  }

  get activeUsers() {
    return this.users.filter((user) => this.isActive(user)).length;
  }

  get inactiveUsers() {
    return this.users.filter((user) => !this.isActive(user)).length;
  }

  roleCount(role: string) {
    return this.users.filter((user) => this.cleanRole(user.role) === role).length;
  }

  openCreateUser() {
    this.newUser = { fullName: "", email: "", phone: "", department: "", role: "STAFF", password: "" };
    this.createOpen = true;
  }

  createUser() {
    if (!this.newUser.fullName || !this.newUser.email || !this.newUser.password || !this.newUser.role) {
      this.notifications.error("Full name, email, password, and role are required");
      return;
    }
    this.creating = true;
    this.api.create(this.newUser).subscribe({
      next: () => {
        this.notifications.successDialog("User created successfully");
        this.createOpen = false;
        this.creating = false;
        this.load();
      },
      error: (err) => {
        this.creating = false;
        this.notifications.error(err?.error?.message || err?.error || "Unable to create user");
      }
    });
  }

  userId(user: any) {
    return user.userId ?? user.id;
  }

  cleanRole(role: string) {
    return (role || "OFFICER").replace("ROLE_", "");
  }

  displayName(user: any) {
    return user.fullName || user.name || user.email || "User";
  }

  department(user: any) {
    return user.department || "General access";
  }

  initial(user: any) {
    return this.displayName(user).trim().charAt(0) || "U";
  }

  isActive(user: any) {
    if (user.active !== undefined) return user.active;
    if (user.isActive !== undefined) return user.isActive;
    return true;
  }

  roleClass(role: string) {
    const clean = this.cleanRole(role);
    if (clean === "ADMIN") return "role-admin";
    if (clean === "MANAGER") return "role-manager";
    if (clean === "STAFF") return "role-staff";
    return "role-officer";
  }

  changeRole(user: any, role: string) {
    const id = this.userId(user);
    if (!id || role === this.cleanRole(user.role)) return;
    this.api.role(id, role).subscribe({
      next: () => {
        user.role = role;
      },
      error: (err) => this.notifications.error(err?.error?.message || err?.error || "Unable to update user role")
    });
  }

  deactivateUser(user: any) {
    const id = this.userId(user);
    if (!id) {
      this.notifications.errorDialog("User id missing.");
      return;
    }
    this.openConfirm("deactivate", user);
  }

  deleteUser(user: any) {
    const id = this.userId(user);
    if (!id) {
      this.notifications.errorDialog("User id missing.");
      return;
    }
    this.openConfirm("delete", user);
  }

  openConfirm(action: "deactivate" | "delete", user: any) {
    this.pendingAction = action;
    this.pendingUser = user;
    this.confirmOpen = true;
  }

  closeConfirm() {
    if (this.actionLoading) return;
    this.confirmOpen = false;
    this.pendingAction = null;
    this.pendingUser = null;
  }

  confirmTitle() {
    return this.pendingAction === "delete" ? "Delete User" : "Deactivate User";
  }

  confirmMessage() {
    const name = this.pendingUser ? this.displayName(this.pendingUser) : "this user";
    return this.pendingAction === "delete"
      ? `Delete ${name} permanently? This action cannot be undone.`
      : `Deactivate ${name}? They will no longer be able to login.`;
  }

  confirmButtonText() {
    if (this.actionLoading) return this.pendingAction === "delete" ? "Deleting..." : "Deactivating...";
    return this.pendingAction === "delete" ? "Delete User" : "Deactivate User";
  }

  runPendingAction() {
    if (!this.pendingUser || !this.pendingAction) return;
    const id = this.userId(this.pendingUser);
    this.actionLoading = true;
    const request = this.pendingAction === "delete" ? this.api.delete(id) : this.api.deactivate(id);
    request.subscribe({
      next: () => {
        const action = this.pendingAction;
        this.actionLoading = false;
        this.closeConfirm();
        this.notifications.successDialog(action === "delete" ? "User deleted successfully" : "User deactivated successfully");
        this.load();
      },
      error: (err) => {
        this.actionLoading = false;
        this.closeConfirm();
        this.load();
        this.notifications.errorDialog(err?.error?.message || err?.error || "Unable to complete this action");
      }
    });
  }
}
