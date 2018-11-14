import { UserService } from './_services/user.service';
import { TweetService } from './_services/tweet.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreventChangesGuard } from './_guards/prevent-changes.guard';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddAndGetTweetsComponent } from './addAndGetTweets/addAndGetTweets.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { SearchComponent } from './search/search.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      SuggestionsComponent,
      AddAndGetTweetsComponent,
      TimeAgoPipe,
      SearchComponent,
      SuggestionsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      NgbModule
   ],
   providers: [
      AuthService,
      AuthGuard,
      AlertifyService,
      PreventChangesGuard,
      UserService,
      TweetService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
