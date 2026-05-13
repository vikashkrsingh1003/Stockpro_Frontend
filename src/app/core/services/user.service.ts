import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}
  all() { return this.http.get<any[]>(`${API_BASE_URL}/auth/users`); }
  create(data: unknown) { return this.http.post<any>(`${API_BASE_URL}/auth/users`, data); }
  deactivate(userId: unknown) { return this.http.put(`${API_BASE_URL}/auth/deactivate`, null, { params: paramsFrom({ userId }), responseType: "text" }); }
  delete(userId: unknown) { return this.http.delete(`${API_BASE_URL}/auth/users/${userId}`, { responseType: "text" }); }
  role(userId: unknown, role: unknown) { return this.http.put(`${API_BASE_URL}/auth/users/${userId}/role`, null, { params: paramsFrom({ role }), responseType: "text" }); }
}
