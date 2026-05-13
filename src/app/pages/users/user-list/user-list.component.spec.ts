import { UserListPage } from "./user-list.component";
import { of, throwError } from "rxjs";

describe("UserListPage", () => {
  let api: any;
  let notifications: any;
  let page: UserListPage;

  beforeEach(() => {
    api = {
      all: jasmine.createSpy("all").and.returnValue(of([
        { userId: "1", fullName: "Admin User", email: "admin@test.com", role: "ROLE_ADMIN", active: true, department: "Admin" },
        { userId: "2", fullName: "Staff User", email: "staff@test.com", role: "STAFF", active: false, department: "Warehouse" }
      ])),
      create: jasmine.createSpy("create").and.returnValue(of({})),
      role: jasmine.createSpy("role").and.returnValue(of("ok")),
      deactivate: jasmine.createSpy("deactivate").and.returnValue(of("ok")),
      delete: jasmine.createSpy("delete").and.returnValue(of("ok"))
    };
    notifications = {
      error: jasmine.createSpy("error"),
      errorDialog: jasmine.createSpy("errorDialog"),
      successDialog: jasmine.createSpy("successDialog")
    };
    page = new UserListPage(api, notifications);
  });

  it("should load users on creation", () => {
    expect(api.all).toHaveBeenCalled();
    expect(page.totalUsers).toBe(2);
    expect(page.activeUsers).toBe(1);
    expect(page.inactiveUsers).toBe(1);
  });

  it("should filter users by search, role, and status", () => {
    page.query = "staff";
    page.roleFilter = "STAFF";
    page.statusFilter = "INACTIVE";

    expect(page.filteredUsers.length).toBe(1);
    expect(page.filteredUsers[0].email).toBe("staff@test.com");
  });

  it("should validate required fields before creating user", () => {
    page.createUser();

    expect(api.create).not.toHaveBeenCalled();
    expect(notifications.error).toHaveBeenCalledWith("Full name, email, password, and role are required");
  });

  it("should create user and reload list", () => {
    page.newUser = {
      fullName: "New User",
      email: "new@test.com",
      phone: "9999999999",
      department: "Sales",
      role: "OFFICER",
      password: "secret"
    };

    page.createUser();

    expect(api.create).toHaveBeenCalledWith(page.newUser);
    expect(notifications.successDialog).toHaveBeenCalledWith("User created successfully");
    expect(page.creating).toBeFalse();
    expect(page.createOpen).toBeFalse();
    expect(api.all).toHaveBeenCalledTimes(2);
  });

  it("should update role when role is changed", () => {
    const user = page.users[1];

    page.changeRole(user, "MANAGER");

    expect(api.role).toHaveBeenCalledWith("2", "MANAGER");
    expect(user.role).toBe("MANAGER");
  });

  it("should open confirmation for delete and run pending action", () => {
    const user = page.users[0];

    page.deleteUser(user);
    page.runPendingAction();

    expect(page.confirmOpen).toBeFalse();
    expect(api.delete).toHaveBeenCalledWith("1");
    expect(notifications.successDialog).toHaveBeenCalledWith("User deleted successfully");
  });

  it("should show error dialog when pending action fails", () => {
    api.deactivate.and.returnValue(throwError(() => ({ error: "Cannot deactivate" })));

    page.deactivateUser(page.users[0]);
    page.runPendingAction();

    expect(notifications.errorDialog).toHaveBeenCalledWith("Cannot deactivate");
    expect(page.actionLoading).toBeFalse();
  });
});
