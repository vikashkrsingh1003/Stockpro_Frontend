import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { AuthShellUiComponent } from "../../../shared/auth-shell/auth-shell.component";

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AuthShellUiComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordPage {
  email = "";
  otp = "";
  newPassword = "";
  otpSent = false;
  submitted = false;
  loading = false;
  showPassword = false;

  constructor(private auth: AuthService, private notifications: NotificationService) {}

  sendOtp() {
    if (!this.email) {
      this.notifications.error("Please enter your email");
      return;
    }
    this.loading = true;
    this.auth.sendForgotPasswordOtp(this.email).subscribe({
      next: () => {
        this.otpSent = true;
        this.notifications.success("OTP sent to your email");
        this.loading = false;
      },
      error: (err) => {
        this.notifications.error(this.errorMessage(err, "Unable to send OTP"));
        this.loading = false;
      }
    });
  }

  submit() {
    if (!this.otpSent) {
      this.sendOtp();
      return;
    }
    if (!this.otp || !this.newPassword) {
      this.notifications.error("Please enter OTP and new password");
      return;
    }
    this.loading = true;
    this.auth.resetForgotPassword({ email: this.email, otp: this.otp, newPassword: this.newPassword }).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
      },
      error: (err) => {
        this.notifications.error(this.errorMessage(err, "Unable to reset password"));
        this.loading = false;
      }
    });
  }

  private errorMessage(err: any, fallback: string) {
    if (typeof err?.error === "string" && err.error.trim()) return err.error;
    if (err?.error?.message) return err.error.message;
    if (err?.message) return err.message;
    return fallback;
  }
}
