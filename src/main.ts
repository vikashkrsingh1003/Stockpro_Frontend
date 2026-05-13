import { ApplicationConfig, Component, inject } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, RouterOutlet } from "@angular/router";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { routes } from "./app/app.routes";
import { authInterceptor } from "./app/core/auth.interceptor";
import { NotificationOutletComponent } from "./app/shared/notification-outlet/notification-outlet.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NotificationOutletComponent],
  template: `
    <router-outlet />
    <app-notifications />
  `
})
class AppComponent {}

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
