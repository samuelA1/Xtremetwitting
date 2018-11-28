import { UserService } from './../_services/user.service';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { TweetService } from '../_services/tweet.service';
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
  @Output() reduce = new EventEmitter();
token: any;
tweet: any = {}
tweets: any[];
  

  constructor(private tweetService: TweetService,
     private alertify: AlertifyService, 
    private authService: AuthService,
    private userService: UserService
    ) { }

  async getTweets() {
    try {
      var tweets = await this.tweetService.getTweets();
      var recentTweets = await this.tweetService.getUserRecentTweets();
      if (tweets['success']) {
        var huge = tweets['tweets'].concat(recentTweets['tweets']);
        this.tweets = huge.sort( function ( a, b ) { return b.dateTweeted - a.dateTweeted; } )
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
        var tweet = await this.tweetService.postTweet(this.tweet);
        this.tweets.unshift({dateTweeted: Date.now(),
        tweet: this.tweet['tweet'], _id: tweet['tweetId'], owner: {firstName: this.authService.user.user.firstName,
        lastName: this.authService.user.user.lastName, username: this.authService.user.user.username,
        picture: this.authService.user.user.picture 
      }});
        if (tweet['success']) {
          this.f.reset();
          this.alertify.success('Tweet created');
          localStorage.removeItem('tweet');
          this.reduce.emit(1);
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

  async deleteTweet(id) {
    this.alertify.confirm('Are you sure you want to delete this tweet?', () => {
      this.tweetService.deleteTweet(id);
      this.tweets.splice(this.tweets.findIndex(t => t._id === id), 1)
      this.alertify.success('Tweet deleted');
      this.reduce.emit(-1);
    })
  }

  tweetValidation() {
    if (this.tweet.tweet) {
      return true
    } else {
      this.alertify.error('Please enter a tweet')
    }
  }

  profile(id) {
    this.userService.userId = id;
    localStorage.setItem('userId', id);

  }
  
  async ngOnInit() {
    this.token = localStorage.getItem('token');
    await this.getTweets()
    this.addRecentTweet()
    this.keepTweet();
  }

  addRecentTweet() {
    this.tweetService.recentTweet.subscribe(tweetObj => this.tweets.unshift(tweetObj))
  }

  keepTweet() {
    if (this.tweet.tweet) {
      localStorage.setItem('tweet', this.tweet.tweet)
    } else if(this.tweet.tweet == '') {
      localStorage.setItem('tweet', '')
    } else {
      this.tweet.tweet = localStorage.getItem('tweet');
    }
  }

}
