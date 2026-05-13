import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { API_BASE_URL } from "../api-config";

@Injectable({ providedIn: "root" })
export class AuthService {
  private readonly profileSubject = new BehaviorSubject<any | null>(null);
  readonly profileChanges$ = this.profileSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}
  login(data: unknown) { return this.http.post<any>(`${API_BASE_URL}/auth/login`, data); }
  sendRegistrationOtp(data: unknown) { return this.http.post(`${API_BASE_URL}/auth/register/send-otp`, data, { responseType: "text" }); }
  register(data: unknown) { return this.http.post(`${API_BASE_URL}/auth/register`, data); }
  sendForgotPasswordOtp(email: string) { return this.http.post(`${API_BASE_URL}/auth/forgot-password/send-otp`, { email }, { responseType: "text" }); }
  resetForgotPassword(data: unknown) { return this.http.post(`${API_BASE_URL}/auth/forgot-password/reset`, data, { responseType: "text" }); }
  profile() { return this.http.get<any>(`${API_BASE_URL}/auth/profile`); }
  updateProfile(data: unknown) { return this.http.put<any>(`${API_BASE_URL}/auth/profile`, data); }
  publishProfile(profile: any) {
    if (profile?.fullName) localStorage.setItem("profileName", profile.fullName);
    this.profileSubject.next(profile);
  }
  googleLogin() { window.location.href = `${API_BASE_URL.replace("/api/v1", "")}/oauth2/authorization/google`; }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("profileName");
    this.router.navigateByUrl("/login");
  }
}
