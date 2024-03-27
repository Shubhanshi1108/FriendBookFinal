import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Authentication/model/user.model';
import { FriendRequest } from 'src/app/Model/friend-request.model';
import { Friend } from 'src/app/Model/friend.model';
import { AuthService } from 'src/app/Services/auth.service';
import { FriendService } from 'src/app/Services/friend.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})


export class FriendsListComponent implements OnInit {
  friends?: Friend[];
  friendList: string[] = [];
  currentUser: User;
  friendRequest: FriendRequest;

  constructor(private userService: UserService, private authService: AuthService, private friendService: FriendService) {
    this.authService.currentUser().subscribe(user => {
      this.currentUser = user;
      console.log("FriendList Page, current user :", this.currentUser);
    });


  }

  ngOnInit(): void {
    this.friendService.getAllFriendRequest().subscribe({
      next: (response) => {
        this.friends = response;

        const friendIds = this.friends
          .filter(friend => friend.userId === this.currentUser._id)
          .map(friend => friend.friendId); // Extract friend IDs

        if (friendIds.length > 0) {
          // Fetch details of friends one by one (assuming getUsersById takes a single ID)
          friendIds.forEach(friendId => {
            this.userService.getUserById(friendId).subscribe({
              next: (friend) => {
                this.friendList.push(`${friend.firstName} ${friend.lastName}`);
              },
              error: (error) => {
                console.error('Error fetching friend:', friendId, error);
                // Handle errors appropriately (e.g., log error, display message)
              }
            });
          });
        } else {
          console.log('No friends found for current user');
          // Handle the case where there are no friends
        }

        console.log(this.friendList);
      },
      error: (error) => {
        console.error('Error fetching friend requests:', error);
        // Handle errors appropriately (e.g., display error message)
      }
    });
  }
}
