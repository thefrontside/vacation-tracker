
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { SpyLocation } from "@angular/common/testing";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

export function setupApp(AppModule) {
  let appModule;

  AppModule.ngInjectorDef.imports[1].ngInjectorDef.imports[0].providers[0][0] = { provide: Location, useClass: SpyLocation };

  beforeEach(async function () {
    let root = this.root = document.createElement("app-root");

    document.body.appendChild(root);

    appModule = await platformBrowserDynamic().bootstrapModule(AppModule);

    this.router = appModule.injector.get(Router);
  });

  afterEach(async () => {
    if (appModule) {
      await appModule.destroy();
    }
  });
}