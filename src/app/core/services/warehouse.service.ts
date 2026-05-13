import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_BASE_URL } from "../api-config";
import { paramsFrom } from "../http/params";

@Injectable({ providedIn: "root" })
export class WarehouseService {
  constructor(private http: HttpClient) {}
  all() { return this.http.get<any[]>(`${API_BASE_URL}/warehouses`); }
  byId(id: string | number) { return this.http.get<any>(`${API_BASE_URL}/warehouses/${id}`); }
  create(data: unknown) { return this.http.post(`${API_BASE_URL}/warehouses`, data); }
  update(id: string | number, data: unknown) { return this.http.put(`${API_BASE_URL}/warehouses/${id}`, data); }
  delete(id: string | number) { return this.http.delete(`${API_BASE_URL}/warehouses/${id}`); }
  status(id: string | number, active: boolean) { return this.http.put(`${API_BASE_URL}/warehouses/${id}/status`, null, { params: { active } }); }
  inventory(id: string | number) { return this.http.get<any[]>(`${API_BASE_URL}/warehouses/${id}/inventory`); }
  stock(warehouseId: unknown, productId: unknown, quantity: unknown, reason: unknown) {
    return this.http.post(`${API_BASE_URL}/warehouses/${warehouseId}/stock`, null, { params: paramsFrom({ productId, quantity, reason }) });
  }
  adjustStock(data: unknown) {
    return this.http.post(`${API_BASE_URL}/warehouses/stock/adjustment`, data);
  }
  issueStock(warehouseId: unknown, productId: unknown, quantity: unknown, reason: unknown) {
    return this.http.post(`${API_BASE_URL}/warehouses/stock/issue`, { warehouseId, productId, quantity, reason });
  }
  writeOffStock(warehouseId: unknown, productId: unknown, quantity: unknown, reason: unknown) {
    return this.http.post(`${API_BASE_URL}/warehouses/stock/write-off`, { warehouseId, productId, quantity, reason });
  }
  returnStock(warehouseId: unknown, productId: unknown, quantity: unknown, reason: unknown, returnType: unknown) {
    return this.http.post(`${API_BASE_URL}/warehouses/stock/return`, { warehouseId, productId, quantity, reason, returnType });
  }
  updateThreshold(warehouseId: unknown, productId: unknown, threshold: unknown) {
    return this.http.put(`${API_BASE_URL}/warehouses/${warehouseId}/stock/threshold`, null, { params: paramsFrom({ productId, threshold }) });
  }
  deleteStock(warehouseId: unknown, productId: unknown) {
    return this.http.delete(`${API_BASE_URL}/warehouses/${warehouseId}/stock`, { params: paramsFrom({ productId }) });
  }
}
