import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";

@Injectable({ providedIn: "root" })
export class PurchaseService {
  constructor(private http: HttpClient) {}
  all(filters: Record<string, unknown> = {}) { return this.http.get<any[]>(`${API_BASE_URL}/purchase-orders`, { params: paramsFrom(filters) }); }
  create(data: unknown) { return this.http.post(`${API_BASE_URL}/purchase-orders`, data); }
  submit(id: unknown) { return this.http.put(`${API_BASE_URL}/purchase-orders/${id}/submit`, null); }
  approve(id: unknown) { return this.http.put(`${API_BASE_URL}/purchase-orders/${id}/approve`, null); }
  reject(id: unknown, reason: string) { return this.http.put(`${API_BASE_URL}/purchase-orders/${id}/reject`, null, { params: { reason } }); }
  cancel(id: unknown, reason: string) { return this.http.put(`${API_BASE_URL}/purchase-orders/${id}/cancel`, null, { params: { reason } }); }
  receive(id: unknown, productId: unknown, receivedQty: unknown) {
    return this.http.post(`${API_BASE_URL}/purchase-orders/${id}/receive`, null, { params: paramsFrom({ productId, receivedQty }) });
  }
  overdue() { return this.http.get<any[]>(`${API_BASE_URL}/purchase-orders/overdue`); }
}
