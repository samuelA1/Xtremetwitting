import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mvpClientApp';
  user;
  token;

  constructor(private router: Router) {
     this.token = localStorage.getItem('token')
    if (this.token) {
      this.router.navigate(['/'])
      this.user = JSON.parse(localStorage.getItem('user'))
    } else (
      this.router.navigate(['/login'])
    )
  }

  logout() {
    localStorage.clear();
    this.user = {};
    this.router.navigate(['/login'])
  }
}
