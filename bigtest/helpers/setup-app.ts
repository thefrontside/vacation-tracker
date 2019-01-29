
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { SpyLocation } from "@angular/common/testing";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import startMirage from '../network/start';
import { NgZone } from '@angular/core';

export function setupApp(AppModule) {

  AppModule.ngInjectorDef.imports[1].ngInjectorDef.imports[0].providers[0][0] = { provide: Location, useClass: SpyLocation };

  beforeEach(async function () {
    let root = this.root = document.createElement("app-root");

    document.body.appendChild(root);

    this.app = await platformBrowserDynamic().bootstrapModule(AppModule);

    this.server = startMirage();
    this.server.logging = false;

    let router = this.app.injector.get(Router);
    let zone = this.app.injector.get(NgZone);

    this.visit = url => zone.run(() => router.navigateByUrl(url));

    Object.defineProperty(this, 'currentURL', {
      get() {
        return router.url;
      }
    })
  });

  afterEach(async function() {
    if (this.app) {
      await this.app.destroy();
    }
    this.server.shutdown();
  });
}