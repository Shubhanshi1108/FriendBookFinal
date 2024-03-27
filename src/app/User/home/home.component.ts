import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Authentication/model/user.model';
import { PostRequest } from 'src/app/Model/post-request.model';
import { Post } from 'src/app/Model/post.model';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User | undefined;
  allPost?: Post[];
  postModel: PostRequest;
  @ViewChild('form') form: NgForm;

  constructor(private authService: AuthService, private postService: PostService) {
    this.postModel = {
      post: '',
      userId: '',
      userName: '',
      userPhotoId: '',
      postImageId: '',
      isActive: true,
      isAdmin: false,
      profession: ''
    };
  }

  ngOnInit(): void {
    //we get the current user all information in currentUser variable
    this.authService.currentUser().subscribe(user => {
      this.currentUser = user;
      console.log("home Ngonit current user detail", this.currentUser);
    });

    //getAllPost
    this.postService.getAllPost().subscribe({
      next: (response) => {
        this.allPost = response;
        console.log('All Post', this.allPost);
      }
    });
  }

  createPost(): void {
    this.postModel.userId = this.currentUser._id;
    this.postModel.isAdmin = this.currentUser.isAdmin;
    this.postModel.userName = `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    this.postService.addPost(this.postModel)
      .subscribe({
        next: (response) => {
          console.log("Post created Successfully");
          this.form.resetForm();


        }
      });
  }
}
