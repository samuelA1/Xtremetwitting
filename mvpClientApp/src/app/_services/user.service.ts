import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;
  tweet = new BehaviorSubject<any>({});
  recentTweet = this.tweet.asObservable();

constructor(private http: HttpClient) { }

get headers() {
  const token = localStorage.getItem('token');
  return token ? new HttpHeaders().set('Authorization', token) : null;
}

addRecentTweet(tweet: any) {
  this.tweet.next(tweet);
}


getTweets() {
  return this.http.get(this.apiUrl + 'recent', {headers: this.headers}).toPromise();
}

postTweet(tweet: any) {
  return this.http.post(this.apiUrl + 'tweet',tweet, {headers: this.headers}).toPromise();
}

getUserRecentTweets() {
  return this.http.get(this.apiUrl + 'userRecent', {headers: this.headers}).toPromise();
}

}
