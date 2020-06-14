import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './backend/admin-login/admin-login.component';
import { NavigationComponent } from './frontend/navigation/navigation.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { HamMenuComponent } from './frontend/components/ham-menu/ham-menu.component';
import { NavigationMobileComponent } from './frontend/navigation-mobile/navigation-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavigationComponent,
    HomeComponent,
    HamMenuComponent,
    NavigationMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
