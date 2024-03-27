import { Injectable } from '@angular/core';
import { LoggedUser } from '../Authentication/model/logged-user.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticateRequest } from '../Authentication/model/authentication-request.model';
import { User } from '../Authentication/model/user.model';
import { registerUser } from '../Authentication/model/register-user.model';
import { CookieService } from 'ngx-cookie-service';

interface message{
  message:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user = new BehaviorSubject<LoggedUser | undefined>(undefined);


  constructor(private http: HttpClient, private cookieService: CookieService) { }
  apiBaseURL = "http://3.17.216.66:3000/";

  registerUser(newUser: registerUser): Observable<message> {
    return this.http.post<message>(this.apiBaseURL + 'users/register', newUser)
      .pipe(
        map(response => response)
      );
  }

  authenticate(request: AuthenticateRequest): Observable<User> {
    return this.http.post<User>(this.apiBaseURL + 'users/authenticate', { email: request.email, password: request.password });
  }

  setUser(user: LoggedUser): void {
    this.$user.next(user);
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-role', user.role);
    localStorage.setItem('user-id',user.id)
  }

  user(): Observable<LoggedUser | undefined> {
    return this.$user.asObservable();
  }

  getUser(): LoggedUser | undefined {
    const email = localStorage.getItem('user-email');
    const role = localStorage.getItem('user-role');
    const id= localStorage.getItem('user-id');
    if (email) {
      const user: LoggedUser = {
        email: email,
        role: role,
        id:id
      }
      return user;
    }
    return undefined;

  }

  logout(): void {
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
    this.$user.next(undefined);

  }
}

