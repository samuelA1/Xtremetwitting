import { TweetService } from './_services/tweet.service';
import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertifyService } from './_services/alertify.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef: BsModalRef;
  title = 'twitter';
  token;
  helper = new JwtHelperService();
  tweet: any = {}



  constructor(private router: Router,
     public authService: AuthService,
      private alertify: AlertifyService,
      private userService: TweetService,
      private modalService: BsModalService) {
      this.token = localStorage.getItem('token')
      authService.user = this.helper.decodeToken(this.token)
      authService.text = 'Sign out'
  
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm(): void {
    if (this.tweet.tweet) {
      this.alertify.confirm('Are you sure you want to discard this tweet?', () => {
        this.modalRef.hide();
      })
    } else {
      this.modalRef.hide();
    }
    
  }

  


}
