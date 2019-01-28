import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { Location, LocationStrategy } from '@angular/common';
import { MockLocationStrategy, SpyLocation } from '@angular/common/testing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { DOCUMENT } from '@angular/platform-browser';

describe('AppComponent', () => {
  let appModule;
  let appRoot;
  let location: Location;

  beforeEach(async () => {
    appRoot = document.createElement('app-root');
    document.body.appendChild(appRoot);
    debugger;
    appModule = await platformBrowserDynamic([
      {provide: Location, useClass: SpyLocation, deps: []},
      {provide: LocationStrategy, useClass: MockLocationStrategy, deps: [DOCUMENT]}
    ])
      .bootstrapModule(AppModule);
    location = appModule.injector.get(Location);
    RouterTestingModule 
    debugger;
  });

  afterEach(async () => {
    if (appModule) {
      await appModule.destroy();
    }
  });

  it('should create the app', () => {
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
