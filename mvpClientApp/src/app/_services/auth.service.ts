import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
  user: any;
  helper = new JwtHelperService();
  text: string;


constructor(private http: HttpClient) { }

get headers() {
  const token = localStorage.getItem('token');
  return token ? new HttpHeaders().set('Authorization', token) : null;
}

register(model: any) {
  return this.http.post(this.apiUrl + 'auth/register', model).toPromise()
  .then((res) => {
    this.user = this.helper.decodeToken(res['token'])
    this.text = 'Sign out'
    return res;
  })
}

login(model: any) {
  return this.http.post(this.apiUrl + 'auth/login', model).toPromise()
  .then((res) => {
    this.user = this.helper.decodeToken(res['token'])
    this.text = 'Sign out'
    return res;
  })

}



}
