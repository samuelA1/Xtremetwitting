import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model: any = {};
token;
user: any;
message: string;
returnUrl;

  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.returnUrl = res['returnUrl'] || '/'
    } )
  }

  async login () {
    if (this.loginValidation()) {
      const user = await this.authService.login(this.model);
      user['success'] ? (this.token = user['token'], 
      localStorage.setItem('token', this.token),
      localStorage.setItem('user', JSON.stringify(user['user'])),
      this.user = user['user'], this.router.navigateByUrl(this.returnUrl))
       : this.message= user['message']
    } else {
      this.message ='check your input fields'
    }
  }

  loginValidation() {
    if (this.model.email) {
      if (this.model.password) {
        return true;
      } else {
        this.message = 'Enter password'
      }
    } else {
      this.message = 'Enter email'
        }
  }

}
