import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";

@Injectable({ providedIn: "root" })
export class AnalyticsService {
  constructor(private http: HttpClient) {}
  dashboard() { return this.http.get<any>(`${API_BASE_URL}/analytics/dashboard`); }
  valuation() { return this.http.get<number>(`${API_BASE_URL}/analytics/valuation`); }
  topMoving(limit = 10) { return this.http.get<any[]>(`${API_BASE_URL}/analytics/top-moving`, { params: { limit } }); }
  deadStock() { return this.http.get<any[]>(`${API_BASE_URL}/analytics/dead-stock`); }
  utilization() { return this.http.get<any[]>(`${API_BASE_URL}/analytics/warehouses/utilization`); }
  supplierSpend() { return this.http.get<any[]>(`${API_BASE_URL}/analytics/supplier-spend`); }
  async downloadCsv(endpoint: string, filename: string) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/analytics/export/${endpoint}`, { headers: { Authorization: `Bearer ${token}` } });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}
