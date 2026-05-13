import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export type NotificationType = "success" | "error" | "warning" | "info";

export interface AppNotification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
}

export interface AppMessageDialog {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  confirmText: string;
}

@Injectable({ providedIn: "root" })
export class NotificationService {
  private readonly itemsSubject = new BehaviorSubject<AppNotification[]>([]);
  private readonly dialogSubject = new BehaviorSubject<AppMessageDialog | null>(null);
  readonly items$ = this.itemsSubject.asObservable();
  readonly dialog$ = this.dialogSubject.asObservable();
  private nextId = 1;

  success(message: string, title = "Success") {
    this.show("success", title, message);
  }

  error(message: string, title = "Something went wrong") {
    this.show("error", title, message);
  }

  warning(message: string, title = "Attention") {
    this.show("warning", title, message);
  }

  info(message: string, title = "Info") {
    this.show("info", title, message);
  }

  successDialog(message: string, title = "Success") {
    this.showDialog("success", title, message);
  }

  errorDialog(message: string, title = "Something went wrong") {
    this.showDialog("error", title, message);
  }

  dismiss(id: number) {
    this.itemsSubject.next(this.itemsSubject.value.filter((item) => item.id !== id));
  }

  dismissDialog() {
    this.dialogSubject.next(null);
  }

  private show(type: NotificationType, title: string, message: string) {
    const item: AppNotification = {
      id: this.nextId++,
      type,
      title,
      message,
      time: new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date())
    };
    this.itemsSubject.next([item, ...this.itemsSubject.value].slice(0, 4));
    setTimeout(() => this.dismiss(item.id), 6000);
  }

  private showDialog(type: NotificationType, title: string, message: string) {
    this.dialogSubject.next({
      id: this.nextId++,
      type,
      title,
      message,
      confirmText: "OK"
    });
  }
}
