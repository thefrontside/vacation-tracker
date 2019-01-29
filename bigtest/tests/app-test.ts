import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Router } from "@angular/router";
import { Location } from "@angular/common";
import { SpyLocation } from "@angular/common/testing";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppComponent } from "../../src/app/app.component";
import { HelloWorldComponent } from "../../src/app/hello-world.component";

import { routes } from "../../src/app/app-routing.module";
import AppInteractor from "../interactors/app";
import { when } from "@bigtest/convergence";

function replaceLocation(module) {
  let [ROUTER_PROVIDERS, providers] = module.providers;
  return {
    ngModule: module.ngModule,
    providers: [
      ROUTER_PROVIDERS.map(provider =>
        provider === Location
          ? { provide: Location, useClass: SpyLocation }
          : provider
      ),
      ...providers
    ]
  };
}
@NgModule({
  imports: [replaceLocation(RouterModule.forRoot(routes))],
  exports: [RouterModule]
})
class AppTestRoutingModule {}

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule, AppTestRoutingModule],
  bootstrap: [AppComponent]
})
class AppTestModule {}

describe("AppComponent", () => {
  let appModule;
  let appRoot;
  let app = new AppInteractor();
  let router: Router;

  beforeEach(async () => {
    appRoot = document.createElement("app-root");
    document.body.appendChild(appRoot);
    appModule = await platformBrowserDynamic().bootstrapModule(AppTestModule);
    router = appModule.injector.get(Router);
  });

  afterEach(async () => {
    if (appModule) {
      await appModule.destroy();
    }
  });

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
    beforeEach(() => {
      return router.navigateByUrl("/hello-world");
    });

    it("changed location", () => {
      expect(router.url).toBe("/hello-world");
    });

    it(
      "shows Hello World",
      when(() => {
        expect(app.helloWorldText).toBe("Hello World!!!");
      })
    );
  });
});
