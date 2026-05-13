import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { AuthShellUiComponent } from "../../../shared/auth-shell/auth-shell.component";

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, AuthShellUiComponent],
  templateUrl: './o-auth-callback.component.html',
  styleUrl: './o-auth-callback.component.css'
})
export class OAuthCallbackPage {
  message = "Please wait...";
  failed = false;

  constructor(route: ActivatedRoute, router: Router) {
    const token = route.snapshot.queryParamMap.get("token");
    const refreshToken = route.snapshot.queryParamMap.get("refreshToken");
    if (token) {
      localStorage.setItem("token", token);
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
      router.navigateByUrl("/dashboard");
    } else {
      this.failed = true;
      this.message = "Google sign-in failed. Please try again.";
    }
  }
}
