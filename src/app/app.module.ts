import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestsComponent } from './requests/requests.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestListItemComponent } from './request-list-item/request-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    RequestListComponent,
    RequestListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
