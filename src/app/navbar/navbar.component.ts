import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { LoggedUser } from '../Authentication/model/logged-user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedUser?: LoggedUser;

  constructor(private userService: UserService, private router:Router, private authService:AuthService) {

  }

 
  user = 'admin';

  ngOnInit(): void {
    this.authService.user().subscribe({
      next: (response) => {
        this.loggedUser = response;
        console.log(this.loggedUser);
      }
    });
    this.loggedUser=this.authService.getUser();


  }

 

  onLogout():void{
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
