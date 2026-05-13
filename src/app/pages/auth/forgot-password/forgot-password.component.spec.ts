import { ForgotPasswordPage } from "./forgot-password.component";
import { of, throwError } from "rxjs";

describe("ForgotPasswordPage", () => {
  let auth: any;
  let notifications: any;
  let page: ForgotPasswordPage;

  beforeEach(() => {
    auth = {
      sendForgotPasswordOtp: jasmine.createSpy("sendForgotPasswordOtp").and.returnValue(of("sent")),
      resetForgotPassword: jasmine.createSpy("resetForgotPassword").and.returnValue(of("reset"))
    };
    notifications = {
      error: jasmine.createSpy("error"),
      success: jasmine.createSpy("success")
    };
    page = new ForgotPasswordPage(auth, notifications);
  });

  it("should require email before sending forgot password OTP", () => {
    page.sendOtp();

    expect(auth.sendForgotPasswordOtp).not.toHaveBeenCalled();
    expect(notifications.error).toHaveBeenCalledWith("Please enter your email");
  });

  it("should send forgot password OTP", () => {
    page.email = "user@test.com";

    page.sendOtp();

    expect(auth.sendForgotPasswordOtp).toHaveBeenCalledWith("user@test.com");
    expect(page.otpSent).toBeTrue();
    expect(page.loading).toBeFalse();
    expect(notifications.success).toHaveBeenCalledWith("OTP sent to your email");
  });

  it("should call sendOtp when submit happens before OTP is sent", () => {
    spyOn(page, "sendOtp");

    page.submit();

    expect(page.sendOtp).toHaveBeenCalled();
    expect(auth.resetForgotPassword).not.toHaveBeenCalled();
  });

  it("should reset password with email, OTP, and new password", () => {
    page.email = "user@test.com";
    page.otpSent = true;
    page.otp = "123456";
    page.newPassword = "new-secret";

    page.submit();

    expect(auth.resetForgotPassword).toHaveBeenCalledWith({
      email: "user@test.com",
      otp: "123456",
      newPassword: "new-secret"
    });
    expect(page.submitted).toBeTrue();
    expect(page.loading).toBeFalse();
  });

  it("should show backend error when reset fails", () => {
    auth.resetForgotPassword.and.returnValue(throwError(() => ({ error: "Invalid OTP" })));
    page.otpSent = true;
    page.otp = "000000";
    page.newPassword = "new-secret";

    page.submit();

    expect(page.loading).toBeFalse();
    expect(notifications.error).toHaveBeenCalledWith("Invalid OTP");
  });
});
