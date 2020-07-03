import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/pages/home/home.component';
import { AdminLoginComponent } from './backend/admin-login/admin-login.component';
import { AdminPanelComponent } from './backend/admin-panel/admin-panel.component';
import { AddUserComponent } from './backend/add-user/add-user.component';
import { AuthGuardService } from './services/auth_guard/auth-guard.service';
import { AddArtistComponent } from './backend/add-artist/add-artist.component';
import { AllArtistPostsComponent } from './backend/all-artist-posts/all-artist-posts.component';
import { ArtistsComponent } from './frontend/pages/artists/artists.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'admin', component: AdminLoginComponent},
  {path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuardService], children: [
    {path: 'add-artist', component: AddArtistComponent},
    {path: 'add-user', component: AddUserComponent},
    {path: 'all-posts', component: AllArtistPostsComponent},
    {path: 'post/:id', component: AddArtistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
