import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";

@Injectable({ providedIn: "root" })
export class AlertService {
  constructor(private http: HttpClient) {}
  all(filters: Record<string, unknown> = {}) { return this.http.get<any[]>(`${API_BASE_URL}/alerts`, { params: paramsFrom(filters) }); }
  unreadCount() { return this.http.get<number>(`${API_BASE_URL}/alerts/count/unread`); }
  acknowledge(id: unknown) { return this.http.put(`${API_BASE_URL}/alerts/${id}/acknowledge`, null); }
  markRead(id: unknown) { return this.http.put(`${API_BASE_URL}/alerts/${id}/read`, null); }
}
