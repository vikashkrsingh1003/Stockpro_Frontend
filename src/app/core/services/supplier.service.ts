import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";

@Injectable({ providedIn: "root" })
export class SupplierService {
  constructor(private http: HttpClient) {}
  all() { return this.http.get<any[]>(`${API_BASE_URL}/suppliers`); }
  byId(id: string | number) { return this.http.get<any>(`${API_BASE_URL}/suppliers/${id}`); }
  search(q: string) { return this.http.get<any[]>(`${API_BASE_URL}/suppliers/search`, { params: { q } }); }
  create(data: unknown) { return this.http.post(`${API_BASE_URL}/suppliers`, data); }
  update(id: string | number, data: unknown) { return this.http.put(`${API_BASE_URL}/suppliers/${id}`, data); }
  deactivate(id: string | number) { return this.http.put(`${API_BASE_URL}/suppliers/${id}/deactivate`, null); }
  delete(id: string | number) { return this.http.delete(`${API_BASE_URL}/suppliers/${id}`); }
  rating(id: string | number, score: number) { return this.http.put(`${API_BASE_URL}/suppliers/${id}/rating`, null, { params: { score } }); }
}
