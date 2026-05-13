import { jwtDecode } from "jwt-decode";

export function roleFromToken(): string {
  const token = localStorage.getItem("token");
  if (!token) return "GUEST";
  try {
    const decoded = jwtDecode<{ role?: string }>(token);
    return (decoded.role || "GUEST").replace("ROLE_", "");
  } catch {
    return "GUEST";
  }
}

export function emailFromToken(): string {
  const token = localStorage.getItem("token");
  if (!token) return "User";
  try {
    const decoded = jwtDecode<{ sub?: string }>(token);
    return decoded.sub || "User";
  } catch {
    return "User";
  }
}
