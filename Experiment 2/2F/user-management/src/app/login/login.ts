import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html'
})
export class Login {
  email = '';
  password = '';

  constructor(private router: Router) {}

  loginUser() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (this.email === savedEmail &&
        this.password === savedPassword) {
      alert('Login Successful!');
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid Email or Password');
    }
  }
}