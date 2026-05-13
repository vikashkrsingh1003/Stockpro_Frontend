import { LoginPage } from "./login.component";
import { of, throwError } from "rxjs";

describe("LoginPage", () => {
  let auth: any;
  let router: any;
  let notifications: any;
  let page: LoginPage;

  beforeEach(() => {
    localStorage.clear();
    auth = {
      login: jasmine.createSpy("login").and.returnValue(of({ token: "token-1", role: "ADMIN", email: "admin@test.com" })),
      googleLogin: jasmine.createSpy("googleLogin")
    };
    router = { navigateByUrl: jasmine.createSpy("navigateByUrl") };
    notifications = { error: jasmine.createSpy("error") };
    page = new LoginPage(auth, router, notifications);
  });

  it("should save auth data and navigate to dashboard after login", () => {
    page.form = { email: "admin@test.com", password: "secret" };

    page.submit();

    expect(auth.login).toHaveBeenCalledWith(page.form);
    expect(localStorage.getItem("token")).toBe("token-1");
    expect(localStorage.getItem("role")).toBe("ADMIN");
    expect(localStorage.getItem("email")).toBe("admin@test.com");
    expect(router.navigateByUrl).toHaveBeenCalledWith("/dashboard");
  });

  it("should show error when login fails", () => {
    auth.login.and.returnValue(throwError(() => new Error("bad credentials")));

    page.submit();

    expect(notifications.error).toHaveBeenCalledWith("Invalid credentials");
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it("should delegate Google login to auth service", () => {
    page.googleLogin();

    expect(auth.googleLogin).toHaveBeenCalled();
  });
});
