import { ProductListPage } from "./product-list.component";
import { of, throwError } from "rxjs";

describe("ProductListPage", () => {
  let api: any;
  let notifications: any;
  let page: ProductListPage;

  beforeEach(() => {
    api = {
      filter: jasmine.createSpy("filter").and.returnValue(of([
        { productId: 1, name: "Laptop", category: "Electronic" }
      ])),
      inactive: jasmine.createSpy("inactive").and.returnValue(of([])),
      activate: jasmine.createSpy("activate").and.returnValue(of({})),
      deactivate: jasmine.createSpy("deactivate").and.returnValue(of({}))
    };
    notifications = { error: jasmine.createSpy("error") };
    page = new ProductListPage(api, notifications);
  });

  it("should load filtered products", () => {
    expect(api.filter).toHaveBeenCalledWith("", "All");
    expect(page.products.length).toBe(1);
    expect(page.products[0].name).toBe("Laptop");
  });

  it("should show notification when product filtering fails", () => {
    api.filter.and.returnValue(throwError(() => ({ error: { message: "Filter failed" } })));

    page.load();

    expect(notifications.error).toHaveBeenCalledWith("Filter failed");
  });
});
