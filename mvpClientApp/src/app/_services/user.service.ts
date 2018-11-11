import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

get headers() {
  const token = localStorage.getItem('token');
  return token ? new HttpHeaders().set('Authorization', token) : null;
}


  getTweets() {
  return this.http.get(this.apiUrl + 'recent', {headers: this.headers}).toPromise();
}

postTweet(tweet: any) {
  return this.http.post(this.apiUrl + 'tweet',tweet, {headers: this.headers}).toPromise();
}

}
