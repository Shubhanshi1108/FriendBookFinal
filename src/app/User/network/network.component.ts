import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Authentication/model/user.model';
import { FriendRequest } from 'src/app/Model/friend-request.model';
import { AuthService } from 'src/app/Services/auth.service';
import { FriendService } from 'src/app/Services/friend.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit{
  users? :User[];
  currentUser:User;
  friendRequest: FriendRequest;
  userRequestStates: { [userId: string]: 'Send Request' | 'Request Pending' } = {};

  constructor(private userService:UserService, private authService:AuthService, private friendService:FriendService){
    this.authService.currentUser().subscribe(user => {
      this.currentUser = user;
      console.log("Network Page, current user :", this.currentUser);
    });

    this.friendRequest={
      userId:'',
      friendId:'',
      status:''
    };
  }

  ngOnInit(): void {
    this.userService.allUser().subscribe({
      next:(response)=>{
        this.users= response;
      }
    });
  }

  sendRequest(friend:User){
    console.log("Friend User detail",friend);
    if (this.userRequestStates[friend._id] === 'Request Pending') {
      // Request already sent, prevent duplicate actions
      return;
    };
    this.friendRequest={
      userId:this.currentUser._id,
      friendId:friend._id,
      status:'Request Pending'
    };

    this.userRequestStates[friend._id] = 'Request Pending'; // Update state immediately for UI feedback


    this.friendService.createRequest(this.friendRequest)
    .subscribe({
      next:(response)=>{
        console.log(response);
      }
    })

  }

}
