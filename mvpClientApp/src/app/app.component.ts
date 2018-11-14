import { NgForm } from '@angular/forms';
import { TweetService } from './_services/tweet.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService } from './_services/alertify.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twitter';
  token;
  helper = new JwtHelperService();
  closeResult: string;
  tweet: any = {}



  constructor(private router: Router,
     public authService: AuthService,
      private alertify: AlertifyService,
      private modalService: NgbModal,
      private userService: TweetService) {
     this.token = localStorage.getItem('token')

    if (!this.helper.isTokenExpired(this.token)) {
      this.router.navigate([''])
      authService.user = this.helper.decodeToken(this.token)
      authService.text = 'Sign out'
    } else (
      this.router.navigate(['/login'])
    )
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.text = '';
    this.authService.user.user = {}
    localStorage.clear();
    this.alertify.success('Logout successful')
  }

  async postTweet() {
    try {
      if (this.tweetValidation()) {
        this.userService.addRecentTweet({dateTweeted: Date.now(),
          tweet: this.tweet['tweet'], owner: {firstName: this.authService.user.user.firstName,
          lastName: this.authService.user.user.lastName, username: this.authService.user.user.username,
          picture: this.authService.user.user.picture
        }});
        const tweet = await this.userService.postTweet(this.tweet);
        if (tweet['success']) {
          this.alertify.success('Tweet created');
        } else {
          this.alertify.error('Unable to create tweet')
        }
      } else {
        this.alertify.error('Please enter a tweet')
      }
    } catch (error) {
      this.alertify.error(error.message);
    }
  }

  tweetValidation() {
    if (this.tweet.tweet) {
      return true
    } else {
      this.alertify.error('Please enter a tweet')
    }
  }

  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
