import { jwtDecode } from "jwt-decode";
export function roleFromToken() {
    const token = localStorage.getItem("token");
    if (!token)
        return "GUEST";
    try {
        const decoded = jwtDecode(token);
        return (decoded.role || "GUEST").replace("ROLE_", "");
    }
    catch {
        return "GUEST";
    }
}
export function emailFromToken() {
    const token = localStorage.getItem("token");
    if (!token)
        return "User";
    try {
        const decoded = jwtDecode(token);
        return decoded.sub || "User";
    }
    catch {
        return "User";
    }
}
//# sourceMappingURL=token.utils.js.map