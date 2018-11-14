import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

getAllUsers() {
  return this.http.get(this.apiUrl + 'users', {headers: this.headers}).toPromise();
}

getSuggestions() {
  return this.http.get(this.apiUrl + 'follow/suggestions', {headers: this.headers}).toPromise();
}

followSomeone(id) {
  return this.http.post(this.apiUrl + 'follow/follow/' + id, {}, {headers: this.headers}).toPromise();
}

}
