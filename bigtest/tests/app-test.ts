import AppInteractor from "../interactors/app";
import { when } from "@bigtest/convergence";
import { setupApp } from "../helpers/setup-app";
import { AppModule } from "../../src/app/app.module";
import * as expect from "expect";

describe("AppComponent", () => {
  let app = new AppInteractor();

  setupApp(AppModule);

  it(
    "has a heading",
    when(() => {
      expect(app.hasHeading).toBe(true);
    })
  );

  describe("interacting with a button", () => {
    it("not showing message on page load", () => {
      expect(app.messageIsPresent).toBe(false);
    });

    describe("clicking on the toggle button", () => {
      beforeEach(() => {
        return app.clickToggleButton();
      });

      it("shows the message", () => {
        expect(app.messageIsPresent).toBe(true);
      });
    });
  });

  describe("navigating to HelloWorld", () => {
    beforeEach(function() {
      return this.visit("/hello-world");
    });

    it("changed location", function() {
      expect(this.currentURL).toBe("/hello-world");
    });

    it(
      "shows Hello World",
      when(() => {
        expect(app.helloWorldText).toBe("Hello World!!!");
      })
    );
  });

  describe("navigating to a products page", () => {
    beforeEach(function() {
      return this.visit("/products");
    });

    it("navigated to products", function() {
      expect(this.currentURL).toBe("/products");
    });

    it('showed the product list page', function() {
      expect(app.isProductsListPresent).toBe(true);
    });

    it("shows a list of products", when(() => {
      expect(app.productList().length).toBe(3);
    }));
  });
});
