import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { ProfilePage } from "./profile.component";
import { AuthService } from "../../../core/api";
import { NotificationService } from "../../../core/services/notification.service";
import { of, throwError } from "rxjs";

describe("ProfilePage", () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;
  let auth: any;
  let notifications: any;

  beforeEach(async () => {
    auth = {
      profile: jasmine.createSpy("profile").and.returnValue(of({
        fullName: "Vikash Singh",
        email: "vikash@test.com",
        phone: "9876543210",
        department: "Warehouse",
        role: "ROLE_MANAGER"
      })),
      updateProfile: jasmine.createSpy("updateProfile").and.returnValue(of({ fullName: "Vikash Kumar" })),
      publishProfile: jasmine.createSpy("publishProfile")
    };
    notifications = {
      error: jasmine.createSpy("error"),
      errorDialog: jasmine.createSpy("errorDialog"),
      successDialog: jasmine.createSpy("successDialog")
    };

    await TestBed.configureTestingModule({
      imports: [ProfilePage],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        { provide: AuthService, useValue: auth },
        { provide: NotificationService, useValue: notifications }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load current profile into the form", () => {
    expect(auth.profile).toHaveBeenCalled();
    expect(component.form.fullName).toBe("Vikash Singh");
    expect(component.form.email).toBe("vikash@test.com");
    expect(component.form.role).toBe("MANAGER");
    expect(component.loading).toBeFalse();
  });

  it("should validate full name before saving", () => {
    component.form.fullName = " ";

    component.save();

    expect(auth.updateProfile).not.toHaveBeenCalled();
    expect(notifications.error).toHaveBeenCalledWith("Full name is required");
  });

  it("should trim and update editable profile fields", () => {
    component.form.fullName = "  Vikash Kumar  ";
    component.form.phone = "  1112223333  ";
    component.form.department = "  Admin  ";

    component.save();

    expect(auth.updateProfile).toHaveBeenCalledWith({
      fullName: "Vikash Kumar",
      phone: "1112223333",
      department: "Admin"
    });
    expect(auth.publishProfile).toHaveBeenCalledWith({ fullName: "Vikash Kumar" });
    expect(notifications.successDialog).toHaveBeenCalledWith("Profile updated successfully");
    expect(component.saving).toBeFalse();
  });

  it("should show error dialog when profile update fails", () => {
    auth.updateProfile.and.returnValue(throwError(() => ({ error: { message: "Cannot update" } })));

    component.save();

    expect(component.saving).toBeFalse();
    expect(notifications.errorDialog).toHaveBeenCalledWith("Cannot update");
  });
});
