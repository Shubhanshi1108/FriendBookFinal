import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { registerUser } from '../model/register-user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: registerUser;

  constructor(private userService: UserService, private authService: AuthService) {
    this.model = {
      firstName: '',
      lastName: '',
      email: '',
      dob: null,
      gender: '',
      password: ''
    };

  }

  onFormSubmit() {
    this.authService.registerUser(this.model).subscribe({
      next: (response) => {
        console.log(this.model);
        console.log(response);
      },
      error: (error) => {
        if (error.error && error.error.message === 'you are over your space quota') {
          console.error('Registration failed: Storage quota exceeded');
          // Display a user-friendly message to the user here
        } else {
          console.error('Registration failed:', error);
          // Handle other types of errors
        }
      }
    });
  }
}
