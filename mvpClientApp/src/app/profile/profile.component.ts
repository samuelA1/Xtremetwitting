import { AuthService } from './../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from './../_services/alertify.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from './../_services/user.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

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
  statusChange: string;
  modalRef: BsModalRef;
  profile: any = {};

  constructor(private userService: UserService, 
    private alertify: AlertifyService, 
    private route: ActivatedRoute,
    private modalService: BsModalService,
    public authService: AuthService) { }
    
  async ngOnInit() {
    this.route.params.subscribe(res => {this.userId = res['id'];})
    this.route.params.subscribe(res => {this.tabChange = res['change'] || 1 });
    await this.getUser(this.userId);
    this.canFollow();
    this.statusChange = 'following'
  }

  async getUser(id) {
    var user = await this.userService.getUser(id);
    try {
      if (user['success']) {
        this.user = user['user'];
        this.profile = Object.assign({}, {
          firstName: user['user'].firstName,
          lastName:user['user'].lastName,
          bio: user['user'].profile.bio,
          location: user['user'].profile.location,
          website: user['user'].profile.website
        })
        this.tweets = user['tweets'];
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

  async unfollow(id) {
    await this.userService.unfollowSomeone(id);
    this.alertify.success('You just unfollowed another user')
    this.numberOfFollowing -= 1;
  }

  reduce(model: number) {
    if (model == -1) {
      this.numberOfFollowing -= 1;
    } else if(model == 1) {
      this.numberOfFollowing +=1;
    }
  }

  update

  // Modal window
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  async updateProfile() {
    try {
      var update  = await this.userService.upDateProfile(this.profile);
      if (update['success']) {
        this.alertify.success('Your profile has been updated')
        this.user = Object.assign({picture: this.user.picture, _id: this.user._id, username: this.user.username}, {
          firstName: this.profile.firstName,
          lastName:this.profile.lastName,
          profile :{bio: this.profile.bio,
          location: this.profile.location,
          website: this.profile.website}
        })
      } else {
        this.alertify.error('Your profile could not be updated')
      }
    } catch (error) {
      this.alertify.error(error.message);
    }
  }
}
