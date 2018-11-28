import { AuthService } from './../_services/auth.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  @Output() toReduce = new EventEmitter();
  @Input() userId: any
  followers: any[];
 

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
    this.toReduce.emit(1);
    var found = this.followers.find(u => u._id == id);
    this.followers.push(Object.assign(found, {both: true}));
  }

  async unfollow(id) {
    await this.userService.unfollowSomeone(id);
    this.alertify.success('You just unfollowed another user');
    this.toReduce.emit(-1);
    var found = this.followers.find(u => u._id == id);
    this.followers.push(Object.assign(found, {both: false}));
  }

  // route() {
  //   window.location.reload();
  // }

  profile(id) {
    this.userService.userId = id;
    localStorage.setItem('userId', id);
    window.location.reload();
  }
}
