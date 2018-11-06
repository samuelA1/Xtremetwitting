import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model: any = {};
returnUrl;
helper = new JwtHelperService();


  constructor(private router: Router, 
    private authService: AuthService, 
    private route: ActivatedRoute,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.returnUrl = res['returnUrl'] || '/'
    } )
  }

  async login () {
    try {
      if (this.loginValidation()) {
        const user = await this.authService.login(this.model);
        user['success'] ? (this.alertify.success('Login successful'),
        localStorage.setItem('token', user['token']),
        this.router.navigateByUrl(this.returnUrl))
         : this.alertify.message(user['message'])
      } else {
        this.alertify.error('Check your input fields')
          }
    } catch (error) {
      this.alertify.error('Unable to login. Check your email and password');
    }
  }

  loginValidation() {
    if (this.model.email) {
      if (this.model.password) {
        return true;
      } else {
        this.alertify.message('Enter your password')
      }
    } else {
      this.alertify.message('Enter your email')
            }
  }

}
