import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { AuthenticateRequest } from '../model/authentication-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: AuthenticateRequest;
  role: string;

  constructor(private userService: UserService, private cookieService: CookieService, private router: Router,
    private authService: AuthService) {
    this.model = {
      email: '',
      password: ''
    }


  }

  authenticateUser() {
    console.log(this.model);
    this.authService.authenticate(this.model).subscribe({
      next: (response) => {
        if (response.isAdmin) {
          this.role = "Admin"
        }
        else {
          this.role = "User"
        }

        console.log(response);

        //set auth cookie
        this.cookieService.set('Authorization', `Bearer ${response.token}`,
          undefined, '/', undefined, true, 'Strict');

        //set user
        this.authService.setUser({
          email: response.email,
          role: this.role,
          id: response._id
          
        });

        //redirect back to home
        this.router.navigateByUrl('home');
      },
      error: (error) => {

        console.error('Registration failed:', error);
        // Handle other types of errors
      }
    }
    );
  }
}
