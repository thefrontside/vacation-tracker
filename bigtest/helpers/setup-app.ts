
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Router } from "@angular/router";
import { Location } from "@angular/common";
import { SpyLocation } from "@angular/common/testing";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppComponent } from "../../src/app/app.component";
import { HelloWorldComponent } from "../../src/app/hello-world.component";

import { routes } from "../../src/app/app-routing.module";

export function setupApp() {
  let appModule;

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

  beforeEach(async function () {
    let root = this.root = document.createElement("app-root");

    document.body.appendChild(root);

    appModule = await platformBrowserDynamic().bootstrapModule(AppTestModule);

    this.router = appModule.injector.get(Router);
  });

  afterEach(async () => {
    if (appModule) {
      await appModule.destroy();
    }
  });
}