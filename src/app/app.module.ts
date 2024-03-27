import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { NetworkComponent } from './user/network/network.component';
import { SettingsComponent } from './user/settings/settings.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { FriendsListComponent } from './user/friends-list/friends-list.component';
import { HomeComponent } from './user/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserProfileComponent,
    NavbarComponent,
    ForgotPasswordComponent,
    NetworkComponent,
    SettingsComponent,
    ResetPasswordComponent,
    FriendsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
