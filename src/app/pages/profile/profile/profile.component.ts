import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { pageImports } from "../../page-imports";

@Component({
  standalone: true,
  imports: pageImports,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfilePage {
  profile: any = {};
  form = {
    fullName: "",
    email: "",
    phone: "",
    department: "",
    role: ""
  };
  loading = true;
  saving = false;

  constructor(
    private auth: AuthService,
    private notifications: NotificationService,
    private router: Router
  ) {
    this.load();
  }

  load() {
    this.loading = true;
    this.auth.profile().subscribe({
      next: (profile) => {
        this.profile = profile || {};
        this.form = {
          fullName: this.profile.fullName || "",
          email: this.profile.email || "",
          phone: this.profile.phone || "",
          department: this.profile.department || "",
          role: (this.profile.role || "").replace("ROLE_", "")
        };
        this.auth.publishProfile(this.profile);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.notifications.errorDialog(err?.error?.message || err?.error || "Unable to load profile");
      }
    });
  }

  save() {
    if (!this.form.fullName.trim()) {
      this.notifications.error("Full name is required");
      return;
    }

    this.saving = true;
    const payload = {
      fullName: this.form.fullName.trim(),
      phone: this.form.phone?.trim(),
      department: this.form.department?.trim()
    };

    this.auth.updateProfile(payload).subscribe({
      next: (profile) => {
        this.profile = profile || {};
        this.auth.publishProfile(this.profile);
        this.saving = false;
        this.notifications.successDialog("Profile updated successfully");
      },
      error: (err) => {
        this.saving = false;
        this.notifications.errorDialog(err?.error?.message || err?.error || "Unable to update profile");
      }
    });
  }

  cancel() {
    this.router.navigateByUrl("/dashboard");
  }

  initials() {
    const source = this.form.fullName || this.form.email || "User";
    return source.trim().split(/\s+/).slice(0, 2).map((part) => part.charAt(0)).join("").toUpperCase();
  }
}
