import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

get headers() {
  const token = localStorage.getItem('token');
  return token ? new HttpHeaders().set('Authorization', token) : null;
}

addTweet(model: any) {
  return
}

}
