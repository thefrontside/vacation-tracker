import AppInteractor from "../interactors/app";
import { when } from "@bigtest/convergence";
import { setupApp } from "../helpers/setup-app";
import { AppModule } from "../../src/app/app.module";

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
      return this.router.navigateByUrl("/hello-world");
    });

    it("changed location", function() {
      expect(this.router.url).toBe("/hello-world");
    });

    it(
      "shows Hello World",
      when(() => {
        expect(app.helloWorldText).toBe("Hello World!!!");
      })
    );
  });
});
