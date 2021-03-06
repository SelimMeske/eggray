import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './backend/admin-login/admin-login.component';
import { NavigationComponent } from './frontend/navigation/navigation.component';
import { HomeComponent } from './frontend/pages/home/home.component';
import { HamMenuComponent } from './frontend/components/ham-menu/ham-menu.component';
import { NavigationMobileComponent } from './frontend/navigation-mobile/navigation-mobile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainInterceptor } from './services/main.interceptor';
import { AddUserComponent } from './backend/add-user/add-user.component';
import { AdminPanelComponent } from './backend/admin-panel/admin-panel.component';
import { AuthGuardService } from './services/auth_guard/auth-guard.service';
import { AddArtistComponent } from './backend/add-artist/add-artist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllArtistPostsComponent } from './backend/all-artist-posts/all-artist-posts.component';
import { SinglePostComponent } from './backend/single-post/single-post.component';
import { NotificationComponent } from './frontend/components/notification/notification.component';
import { ArtistsComponent } from './frontend/pages/artists/artists.component';
import { FooterComponent } from './frontend/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavigationComponent,
    HomeComponent,
    HamMenuComponent,
    NavigationMobileComponent,
    AddUserComponent,
    AdminPanelComponent,
    AddArtistComponent,
    AllArtistPostsComponent,
    SinglePostComponent,
    NotificationComponent,
    ArtistsComponent,
    FooterComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
