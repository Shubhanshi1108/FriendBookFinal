import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Authentication/model/user.model';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  id: string;
  loggedUser: User;
  constructor(private userService: UserService, private authService: AuthService, private router:Router) {

  }
  ngOnInit(): void {
    this.id = this.authService.getUser().id;
    console.log(this.id);
    if (this.id) {
      this.userService.getUserById(this.id)
      .subscribe({
        next:(response)=>{
          this.loggedUser= response;
          console.log(this.loggedUser);
        }
      });

    }
  }

  updateProfileSetting():void{
    const updatedUser:User=this.loggedUser;
    this.userService.updateUser(updatedUser).subscribe({
      next:(response)=>{
        console.log("User Updated Successfully");
        this.router.navigateByUrl('home');
      }
    });
  }
}
