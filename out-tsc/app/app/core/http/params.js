import { HttpParams } from "@angular/common/http";
export function paramsFrom(filters) {
    let params = new HttpParams();
    Object.entries(filters).forEach(([key, value]) => {
        if (value !== "" && value !== undefined && value !== null)
            params = params.set(key, String(value));
    });
    return params;
}
//# sourceMappingURL=params.js.map