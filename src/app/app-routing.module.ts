import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './User/home/home.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { NetworkComponent } from './User/network/network.component';
import { FriendsListComponent } from './User/friends-list/friends-list.component';
import { SettingsComponent } from './User/settings/settings.component';
import { ResetPasswordComponent } from './Authentication/reset-password/reset-password.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'users',component:UserListComponent},
  {path:'network',component:NetworkComponent},
  {path:'friends',component:FriendsListComponent},
  {path:'setting',component:SettingsComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
  {path:'register',component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'forgotPassword',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
