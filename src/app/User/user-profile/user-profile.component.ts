import { Component } from '@angular/core';
import { User } from 'src/app/Authentication/model/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  users? :User[];
  constructor(private userService:UserService){

  }

  ngOnInit(): void {
    this.userService.allUser().subscribe({
      next:(response)=>{
        this.users= response;
      }
    });
  }
}
