import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  @Input('toRemove') toRemove;
  @Output() reduce = new EventEmitter();
  suggestions: any[];

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  async ngOnInit() {
    const suggestion = await this.userService.getSuggestions();
    this.suggestions = suggestion['suggestions']
    this.filterSuggestions();
    
  }

  async follow(id) {
    await this.userService.followSomeone(id);
    this.suggestions.splice(this.suggestions.findIndex(u=> u._id == id), 1)
    this.alertify.success('You just followed another user')
    this.reduce.emit(2);
  }

  filterSuggestions() {
    if (this.toRemove) {
      this.suggestions.splice(this.suggestions.findIndex( u => u._id == this.toRemove), 1)
    }
    
  }



}
