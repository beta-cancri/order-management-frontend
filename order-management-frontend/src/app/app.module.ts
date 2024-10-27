import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { appConfig } from './app.config';  // Import appConfig

@NgModule({
  declarations: [
    HeaderComponent  // Remove AppComponent from declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppComponent  // Import AppComponent here
  ],
  providers: [
    { provide: 'APP_CONFIG', useValue: appConfig }  // Provide appConfig at the root
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
