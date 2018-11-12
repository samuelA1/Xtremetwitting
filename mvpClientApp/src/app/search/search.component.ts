import { UserService } from './../_services/tweet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTweet: any = {};
  users: any[];
  unFiltered: any[]
  allUsers: any[];

  constructor(private tweetService: UserService) { }

  async search() {
     const users = await this.tweetService.getAllUsers();
     this.allUsers = users['user']
    this.users = (this.searchTweet.search) ?  this.allUsers.filter(u => u.firstName.toLowerCase()
    .includes(this.searchTweet.search.toLowerCase()) ) : this.unFiltered;
  }

  ngOnInit() {
  }

}
