import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";

@Injectable({ providedIn: "root" })
export class MovementService {
  constructor(private http: HttpClient) {}
  filtered(filters: Record<string, unknown>) { return this.http.get<any[]>(`${API_BASE_URL}/movements`, { params: paramsFrom(filters) }); }
  byWarehouse(id: string | number) { return this.http.get<any[]>(`${API_BASE_URL}/movements/warehouse/${id}`); }
  transfer(data: unknown) { return this.http.post(`${API_BASE_URL}/movements/transfer`, data); }
}
