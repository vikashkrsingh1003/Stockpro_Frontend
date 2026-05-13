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
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterPage {
  form = { fullName: "", email: "", password: "", phone: "", otp: "" };
  showPassword = false;
  otpSent = false;
  sendingOtp = false;
  creating = false;

  constructor(private auth: AuthService, private router: Router, private notifications: NotificationService) {}
  sendOtp() {
    if (!this.form.fullName || !this.form.email || !this.form.password || !this.form.phone) {
      this.notifications.error("Please fill all registration details first");
      return;
    }
    this.sendingOtp = true;
    this.auth.sendRegistrationOtp(this.form).subscribe({
      next: () => {
        this.otpSent = true;
        this.notifications.success("OTP sent to your email");
        this.sendingOtp = false;
      },
      error: (err) => {
        this.notifications.error(this.errorMessage(err, "Unable to send OTP"));
        this.sendingOtp = false;
      }
    });
  }
  submit() {
    if (!this.otpSent) {
      this.sendOtp();
      return;
    }
    if (!this.form.otp) {
      this.notifications.error("Please enter the OTP sent to your email");
      return;
    }
    this.creating = true;
    this.auth.register(this.form).subscribe({
      next: () => {
        this.notifications.success("Registration successful! Please login.");
        this.router.navigateByUrl("/login");
      },
      error: (err) => {
        this.notifications.error(this.errorMessage(err, "Error during registration"));
        this.creating = false;
      }
    });
  }
  googleLogin() { this.auth.googleLogin(); }

  private errorMessage(err: any, fallback: string) {
    if (typeof err?.error === "string" && err.error.trim()) return err.error;
    if (err?.error?.message) return err.error.message;
    if (err?.message) return err.message;
    return fallback;
  }
}
