import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Authentication/model/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users? :User[];
  
  constructor(private userService:UserService){

  }

  ngOnInit(): void {
    this.userService.allUser().subscribe({
      next:(response)=>{
        this.users= response;
        console.log(this.users);
      }
    });
  }
}
