import { AuthService } from './../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userId: any;
  numberOfFollowers: number;
  numberOfFollowing: number;
  numberOfTweets: number;
  tweets: any[];
  tabChange: any = 1;
  toFollow: boolean;

  constructor(private userService: UserService, 
    private alertify: AlertifyService, 
    private route: ActivatedRoute,
    private authService: AuthService) { }

  async ngOnInit() {
    this.route.params.subscribe(res => {this.userId = res['id'];})
    await this.getUser(this.userId);
    this.tabChange = 1;
    this.canFollow();
  }

  async getUser(id) {
    const user = await this.userService.getUser(id);
    try {
      if (user['success']) {
        this.user = user['user'];
        this.tweets = user['user'].tweets;
        this.numberOfTweets = user['user'].tweets.length;
        this.numberOfFollowers = user['numFollowers'];
        this.numberOfFollowing = user['numFollowing'];
      } else {
        this.alertify.error('Could not get user information or user does not exist');
      }
    } catch (error) {
      this.alertify.error(error.message);
    }
  }

  change(changes) {
    this.tabChange = changes;
  }

  async canFollow() {
    var suggestions = await this.userService.getSuggestions();
    var suggested = suggestions['suggestions'];
    if (suggested.some((e) =>e._id == this.userId)) {
      this.toFollow = true
    } else {
      this.toFollow = false;
    }

  }

  async follow(id) {
    await this.userService.followSomeone(id);
    this.alertify.success('You just followed another user')
    this.numberOfFollowing += 1;
  }

}
