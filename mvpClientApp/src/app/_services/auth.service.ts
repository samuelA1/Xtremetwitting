import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

get headers() {
  const token = localStorage.getItem('token');
  return token ? new HttpHeaders().set('Authorization', token) : null;
}

register(model: any) {
  return this.http.post(this.apiUrl + 'auth/login', model).toPromise();
}

login(model: any) {
  return this.http.post(this.apiUrl + 'auth/login', model).toPromise();
}



}
