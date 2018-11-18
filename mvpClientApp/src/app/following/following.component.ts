import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  @Output() toReduce = new EventEmitter();
  @Input() userId: any
  followings: any[];


  constructor(private userService: UserService, 
    private alertify: AlertifyService, 
    public authService: AuthService) { }

  async getFollowing(id) {
    const follow = await this.userService.getUserFollowersFollowing(id)
    this.followings = follow['following'];
  }

  async ngOnInit() {
    await this.getFollowing(this.userId);
  }

  async unfollow(id) {
    await this.userService.unfollowSomeone(id);
    this.alertify.success('You just unfollowed another user');
    this.followings.splice(this.followings.findIndex(u=>u._id == id), 1);
    this.toReduce.emit(-1);
  }

  route() {
    window.location.reload();
  }

}
