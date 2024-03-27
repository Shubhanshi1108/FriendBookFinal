import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Authentication/model/user.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  apiBaseURL = "http://3.17.216.66:3000/";

  allUser():Observable<User[]>{
    return this.http.get<User[]>(this.apiBaseURL + 'users/?addAuth=true');
  }

  getUserById(userId:string):Observable<User>{
    return this.http.get<User>(this.apiBaseURL+'users/'+userId);
  }

  getUserByEmail(email:string):Observable<User>{
    return this.http.post<User>(this.apiBaseURL+'users/finduserbyemail?addAuth=true',{email:email});
  }

  updateUser(updatedUser:User):Observable<User>{
    return this.http.put<User>(this.apiBaseURL+'users/?addAuth=true'+updatedUser._id,updatedUser);
  }
}
