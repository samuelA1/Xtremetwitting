import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addAndGetTweets',
  templateUrl: './addAndGetTweets.component.html',
  styleUrls: ['./addAndGetTweets.component.css']
})
export class AddAndGetTweetsComponent implements OnInit {
  @ViewChild('f') f: NgForm;
token: any;
tweet: any = {}
tweets: any[];
  

  constructor(private userService: UserService,
     private alertify: AlertifyService, 
    private authService: AuthService,
    ) { }

  async getTweets() {
    try {
      const tweets = await this.userService.getTweets();
      const recentTweets = await this.userService.getUserRecentTweets();
      if (tweets['success']) {
        this.tweets = tweets['tweets'].concat(recentTweets['tweets'])
      } else {
        this.alertify.message('No tweets')
      }
    } catch (error) {
      this.alertify.error(error.message);
    }
  } 

  async postTweet() {
    try {
      if (this.tweetValidation()) {
        this.tweets.unshift({dateTweeted: Date.now(),
        tweet: this.tweet['tweet'], owner: {firstName: this.authService.user.user.firstName,
        lastName: this.authService.user.user.lastName, username: this.authService.user.user.username,
        picture: this.authService.user.user.picture
      }});
        const tweet = await this.userService.postTweet(this.tweet);
        if (tweet['success']) {
          this.f.reset();
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
  
  async ngOnInit() {
    this.token = localStorage.getItem('token');
    await this.getTweets()
    this.addRecentTweet()
  }

  addRecentTweet() {
    this.userService.recentTweet.subscribe(tweetObj => this.tweets.unshift(tweetObj))
  }

}