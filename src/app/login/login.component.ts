import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName: string;
password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Login() {
    if (this.userName === undefined || this.userName.length === 0) {
      alert('User name required.');
      return;
    }
    if (this.password === undefined || this.password.length === 0) {
      alert('Password required.');
      return;
    }
    if (this.userName === 'rahmat' && this.password === 'rahmat@321'){
      this.router.navigate(['/home']);
    } else {
      alert('invaild credential');
    }

  }
}
