import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { Location, LocationStrategy } from "@angular/common";
import { MockLocationStrategy, SpyLocation } from "@angular/common/testing";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// imports RouterModule.forRoot(routes)
// imports appRoutingModule
import { AppModule } from "./app.module";

import { DOCUMENT } from "@angular/platform-browser";
import { routes } from "../app/app-routing.module";

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
  let location: Location;

  beforeEach(async () => {
    appRoot = document.createElement("app-root");
    document.body.appendChild(appRoot);
    appModule = await platformBrowserDynamic().bootstrapModule(
      AppTestModule
    );
    location = appModule.injector.get(Location);
    debugger;
  });

  afterEach(async () => {
    if (appModule) {
      await appModule.destroy();
    }
  });

  it("should create the app", () => {
    expect(true).toBeTruthy();
  });

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //       RouterTestingModule
  //     ],
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'vacation-tracker'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('vacation-tracker');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to vacation-tracker!');
  // });
});
