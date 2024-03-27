import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { NetworkComponent } from './User/network/network.component';
import { SettingsComponent } from './User/settings/settings.component';
import { ResetPasswordComponent } from './Authentication/reset-password/reset-password.component';
import { FriendsListComponent } from './User/friends-list/friends-list.component';
import { HomeComponent } from './User/home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
