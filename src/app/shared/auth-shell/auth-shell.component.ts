import { Component, Input } from "@angular/core";

@Component({
  selector: "auth-shell",
  standalone: true,
  templateUrl: './auth-shell.component.html',
  styleUrl: './auth-shell.component.css'
})
export class AuthShellUiComponent {
  @Input() title = "";
  @Input() subtitle = "";
  @Input() mark = "S";
}
