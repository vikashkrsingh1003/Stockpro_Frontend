import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";

@Injectable({ providedIn: "root" })
export class PaymentService {
  constructor(private http: HttpClient) {}
  reports() { return this.http.get<any[]>(`${API_BASE_URL}/payments/reports`); }
  process(paymentId: unknown) { return this.http.post<any>(`${API_BASE_URL}/payments/reports/${paymentId}/process`, null); }
  verify(data: unknown) { return this.http.post<any>(`${API_BASE_URL}/payments/verify`, data); }
}
