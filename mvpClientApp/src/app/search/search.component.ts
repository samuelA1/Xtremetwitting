import { UserService } from './../_services/user.service';
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

  constructor( private userService: UserService) { }

  async search() {
     const users = await this.userService.getAllUsers();
     this.allUsers = users['user']
    this.users = (this.searchTweet.search) ?  this.allUsers.filter(u => u.firstName.toLowerCase()
    .includes(this.searchTweet.search.toLowerCase()) ) : this.unFiltered;
  }

  ngOnInit() {
  }

  route(id) {
    this.userService.userId = id;
    localStorage.setItem('userId', id);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

}
