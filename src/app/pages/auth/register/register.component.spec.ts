import { RegisterPage } from "./register.component";
import { of, throwError } from "rxjs";

describe("RegisterPage", () => {
  let auth: any;
  let router: any;
  let notifications: any;
  let page: RegisterPage;

  beforeEach(() => {
    auth = {
      sendRegistrationOtp: jasmine.createSpy("sendRegistrationOtp").and.returnValue(of("sent")),
      register: jasmine.createSpy("register").and.returnValue(of({})),
      googleLogin: jasmine.createSpy("googleLogin")
    };
    router = { navigateByUrl: jasmine.createSpy("navigateByUrl") };
    notifications = {
      error: jasmine.createSpy("error"),
      success: jasmine.createSpy("success")
    };
    page = new RegisterPage(auth, router, notifications);
  });

  it("should block OTP request when registration details are missing", () => {
    page.sendOtp();

    expect(auth.sendRegistrationOtp).not.toHaveBeenCalled();
    expect(notifications.error).toHaveBeenCalledWith("Please fill all registration details first");
  });

  it("should send registration OTP when form is valid", () => {
    page.form = { fullName: "Saurav", email: "saurav@test.com", password: "secret", phone: "9876543210", otp: "" };

    page.sendOtp();

    expect(auth.sendRegistrationOtp).toHaveBeenCalledWith(page.form);
    expect(page.otpSent).toBeTrue();
    expect(page.sendingOtp).toBeFalse();
    expect(notifications.success).toHaveBeenCalledWith("OTP sent to your email");
  });

  it("should request OTP first when submit is clicked before OTP is sent", () => {
    spyOn(page, "sendOtp");

    page.submit();

    expect(page.sendOtp).toHaveBeenCalled();
    expect(auth.register).not.toHaveBeenCalled();
  });

  it("should register and navigate to login after OTP verification", () => {
    page.otpSent = true;
    page.form = { fullName: "Saurav", email: "saurav@test.com", password: "secret", phone: "9876543210", otp: "123456" };

    page.submit();

    expect(auth.register).toHaveBeenCalledWith(page.form);
    expect(notifications.success).toHaveBeenCalledWith("Registration successful! Please login.");
    expect(router.navigateByUrl).toHaveBeenCalledWith("/login");
  });

  it("should stop creating and show backend error when registration fails", () => {
    auth.register.and.returnValue(throwError(() => ({ error: { message: "OTP invalid" } })));
    page.otpSent = true;
    page.form.otp = "000000";

    page.submit();

    expect(page.creating).toBeFalse();
    expect(notifications.error).toHaveBeenCalledWith("OTP invalid");
  });
});
