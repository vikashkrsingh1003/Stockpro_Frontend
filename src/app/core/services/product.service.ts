import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor(private http: HttpClient) {}
  all() { return this.http.get<any>(`${API_BASE_URL}/products`); }
  allActive() { return this.http.get<any[]>(`${API_BASE_URL}/products/all`); }
  inactive() { return this.http.get<any[]>(`${API_BASE_URL}/products/inactive`); }
  byId(id: string | number) { return this.http.get<any>(`${API_BASE_URL}/products/${id}`); }
  bySku(sku: string) { return this.http.get<any>(`${API_BASE_URL}/products/sku/${sku}`); }
  create(data: unknown) { return this.http.post<any>(`${API_BASE_URL}/products`, data); }
  update(id: string | number, data: unknown) { return this.http.put(`${API_BASE_URL}/products/${id}`, data); }
  imageSrc(url: string | null | undefined) {
    if (!url) return "";
    if (/^https?:\/\//i.test(url)) return url;
    return `${API_BASE_URL.replace(/\/api\/v1$/, "")}${url.startsWith("/") ? url : `/${url}`}`;
  }
  deactivate(id: string | number) { return this.http.put(`${API_BASE_URL}/products/deactivate/${id}`, null); }
  activate(id: string | number) { return this.http.put(`${API_BASE_URL}/products/${id}/activate`, null); }
  delete(id: string | number) { return this.http.delete(`${API_BASE_URL}/products/${id}`); }
  search(name: string) { return this.http.get<any[]>(`${API_BASE_URL}/products/search`, { params: { name } }); }
  category(category: string) { return this.http.get<any[]>(`${API_BASE_URL}/products/category/${category}`); }
  filter(query: string, category: string) {
    return this.http.get<any[]>(`${API_BASE_URL}/products/filter`, { params: paramsFrom({ query, category: category === "All" ? "" : category }) });
  }
}
