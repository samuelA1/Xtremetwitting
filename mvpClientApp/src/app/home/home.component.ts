import { UserService } from './../_services/user.service';
import { AuthService } from './../_services/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
token: any;
numberOfTweets: number;
numberOfFollowers: number;
numberOfFollowing: number;
bio: any;
location: any;
  constructor(public authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    if (this.authService.user) {
      this.getUserTweets(this.authService.user.user._id);
    }
    
  }

  async getUserTweets(id) {
    const tweets= await this.userService.getUserTweets();
    const follow = await this.userService.getUserFollowersFollowing(id)
    this.numberOfTweets = tweets['tweets'].length;
    this.bio = tweets['bio']
    this.location = tweets['location']
    this.numberOfFollowers = follow['followers'].length;
    this.numberOfFollowing = follow['following'].length;
  }

  reduceSomething(model: number) {
    if(model == -1) {
      this.numberOfTweets -=1
    } else if (model == 1) {
      this.numberOfTweets +=1
    } else if(model == 2) {
      this.numberOfFollowing +=1
    }
  }

}
