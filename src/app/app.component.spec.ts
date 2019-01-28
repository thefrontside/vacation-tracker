import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { Location } from "@angular/common";
import { SpyLocation } from "@angular/common/testing";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppComponent } from "./app.component";
import { routes } from "../app/app-routing.module";
import AppInteractor from '../../bigtest/interactors/app';
import { when } from '@bigtest/convergence';

function replaceLocation(module) {
  let [ROUTER_PROVIDERS, providers] = module.providers;
  return {
    ngModule: module.ngModule,
    providers: [
      ROUTER_PROVIDERS.map(provider =>
        provider === Location ? ({ provide: Location, useClass: SpyLocation }) : provider
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
  declarations: [AppComponent],
  imports: [BrowserModule, AppTestRoutingModule],
  bootstrap: [AppComponent]
})
class AppTestModule {}

describe("AppComponent", () => {
  let appModule;
  let appRoot;
  let app = new AppInteractor();
  let location: SpyLocation;

  beforeEach(async () => {
    appRoot = document.createElement("app-root");
    document.body.appendChild(appRoot);
    appModule = await platformBrowserDynamic().bootstrapModule(
      AppTestModule
    );
    location = appModule.injector.get(Location);
  });

  afterEach(async () => {
    if (appModule) {
      await appModule.destroy();
    }
  });

  it("has a heading", when(() => {
    expect(app.hasHeading).toBe(true);
  }));

  describe('navigating to HelloWorld', () => {
    beforeEach(() => {
      location.go('/hello-world');
    });

    it('changed location', () => {
      expect(location.path).toBe('/hello-world');
    });

    it('shows Hello World', when(() => {
      expect(app.hello.isPresent).toBe(true);
    }));
  });

});
