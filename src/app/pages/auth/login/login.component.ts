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
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginPage {
  form = { email: "", password: "" };
  showPassword = false;

  constructor(private auth: AuthService, private router: Router, private notifications: NotificationService) {}
  submit() {
    this.auth.login(this.form).subscribe({
      next: (res) => {
        localStorage.setItem("token", res.token);
        if (res.role) localStorage.setItem("role", res.role);
        if (res.email) localStorage.setItem("email", res.email);
        this.router.navigateByUrl("/dashboard");
      },
      error: () => this.notifications.error("Invalid credentials")
    });
  }
  googleLogin() { this.auth.googleLogin(); }
}
