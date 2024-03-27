import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendRequest } from '../Model/friend-request.model';
import { Friend } from '../Model/friend.model';

export interface message{
  message:string;
}
@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http:HttpClient) { }
  apiBaseURL = "http://3.17.216.66:3000/";

  createRequest(request:FriendRequest):Observable<message>{
    return this.http.post<message>(this.apiBaseURL + 'friends/createrequest/?addAuth=true',request);
  }

  updateRequest(request:FriendRequest):Observable<void>{
    return this.http.put<void>(this.apiBaseURL + 'friends/'+ request.userId+'/?addAuth=true',request);
  };

  getAllFriendRequest():Observable<Friend[]>{
    return this.http.get<Friend[]>(this.apiBaseURL + 'friends/?addAuth=true');
  }
  
  getFriendRequestById(id:string):Observable<Friend>{
    return this.http.get<Friend>(this.apiBaseURL+'friends/'+id+'/?addAuth=true');
  }
}
