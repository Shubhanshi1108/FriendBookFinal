import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PostRequest } from '../Model/post-request.model';
import { Observable } from 'rxjs';
import { Post } from '../Model/post.model';
interface message{
  message:string
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  apiBaseURL = "http://3.17.216.66:3000/";

  addPost(model:PostRequest):Observable<message>{
    return this.http.post<message>(this.apiBaseURL+'posts/createpost/?addAuth=true',model);
  }

  getPostByUserId(userID:string):Observable<Post>{
    return this.http.get<Post>(this.apiBaseURL + 'posts/' + userID+'/?addAuth=true');
  }

  getAllPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiBaseURL+ 'posts/?addAuth=true');
  }

  updatePost(updatedPost:Post){
    return this.http.put<Post>(this.apiBaseURL+'posts/'+updatedPost.id+'/?addAuth=true', updatedPost);
  }
}