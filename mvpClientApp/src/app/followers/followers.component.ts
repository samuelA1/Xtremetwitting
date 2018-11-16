import { AuthService } from './../_services/auth.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  @Input() userId: any
  followers: any[];
  toFollow: boolean;
  statusChange: string;

  constructor(private userService: UserService, 
    private alertify: AlertifyService, 
    public authService: AuthService) { }

  async getFollowers(id) {
    const follow = await this.userService.getUserFollowersFollowing(id)
    this.followers = follow['followers'];
  }

  async ngOnInit() {
    await this.getFollowers(this.userId);
  }


  async follow(id) {
    await this.userService.followSomeone(id);
    this.alertify.success('You just followed another user')
    this.followers.splice(this.followers.findIndex(u => u._id == id), 1);
  }


  async unfollow(id) {
    await this.userService.unfollowSomeone(id);
    this.alertify.success('You just unfollowed another user')
    this.followers.splice(this.followers.findIndex(u => u._id == id), 1);
    this.reduce.emit(-1);
  }

  async canFollow(id) {
    var suggestions = await this.userService.getSuggestions();
    var suggested = suggestions['suggestions'];
    if (suggested.some((e) =>e._id == id)) {
      this.toFollow = true
    } else {
      this.toFollow = false;
    }

  }

  

}
