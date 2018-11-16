import { AlertifyService } from './../_services/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {}

  constructor(private authService: AuthService,
     private router: Router,
      private alertify: AlertifyService) { }

  async register () {
    try {
      if (this.loginValidation()) {
        var user = await this.authService.register(this.user);
        user['success'] ? (this.alertify.success('Registration successful'),
        localStorage.setItem('token', user['token']),
        this.router.navigate(['']))
         : this.alertify.message(user['message'])
      } else {
        this.alertify.error('Check your input fields')
          }
    } catch (error) {
      this.alertify.error(error.message);
    }
  }

  loginValidation() {
    if (this.user.email) {
      if (this.user.password) {
        if (this.user.firstName) {
          if (this.user.lastName) {
            if (this.user.username) {
              return true;
            } else {
              this.alertify.error('Enter your username')
            }
          } else {
            this.alertify.error('Enter your last name')
          }
        } else {
          this.alertify.error('Enter your first name')
        }
      } else {
        this.alertify.error('Enter your password')
      }
    } else {
      this.alertify.error('Enter your email')
            }
  }

  ngOnInit() {
  }

}
