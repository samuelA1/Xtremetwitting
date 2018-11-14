import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  suggestions: any[];

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  async ngOnInit() {
    const suggestion = await this.userService.getSuggestions();
    this.suggestions = suggestion['suggestions']
  }

  async follow(id) {
    await this.userService.followSomeone(id);
    this.suggestions.splice(this.suggestions.findIndex(u=> u._id == id), 1)
    this.alertify.success('You just followed another user')
  }

}
