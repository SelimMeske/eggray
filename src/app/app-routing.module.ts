import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './frontend/pages/home/home.component';
import { AdminLoginComponent } from './backend/admin-login/admin-login.component';
import { AdminPanelComponent } from './backend/admin-panel/admin-panel.component';
import { AddUserComponent } from './backend/add-user/add-user.component';
import { AuthGuardService } from './services/auth_guard/auth-guard.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminLoginComponent},
  {path: 'panel', component: AdminPanelComponent, canActivate: [AuthGuardService]},
  {path: 'add-user', component: AddUserComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
