import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor(private http: HttpClient) { }
  loginId: number;
  username: string;
  password: string;
  ngOnInit(): void {
  }
  Login() {
    const loginBean = {
      clientUserId: this.username ,
      userPassword: this.password
    };
    // alert(this.username);
    this.http.post<any>('https://spl.sabpaisa.in/clientOnBoarding/userAuthentication/', loginBean).subscribe(data => {
      this.loginId = data.loginId;
      if (this.loginId > 0) {
        alert('TRUE');
      } else {
        alert('FALSE');
      }
  });
    // alert(this.loginId);
  }
}
