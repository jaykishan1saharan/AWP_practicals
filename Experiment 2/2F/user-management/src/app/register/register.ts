import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html'
})
export class Register {
  username = '';
  email = '';
  password = '';
  mobile = '';

  Register() {
    localStorage.setItem('name', this.username);
    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
    localStorage.setItem('mobile', this.mobile);

    alert('Registration Successful!');
  }
}