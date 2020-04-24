import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;

  saveName(value) {
    if (value) {
      this.userName = value;
      window.localStorage.username = this.userName;
      this.router.navigate(['/start']);
      return;
    }
    alert('Please fill in the name form');
  }

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
}
