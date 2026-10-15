import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html'
})
export class Profile implements OnInit {
  name = '';
  email = '';
  mobile = '';

  ngOnInit() {
    this.name = localStorage.getItem('name') || '';
    this.email = localStorage.getItem('email') || '';
    this.mobile = localStorage.getItem('mobile') || '';
  }
}