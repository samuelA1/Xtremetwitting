import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  helper = new JwtHelperService()

constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | boolean {
      var token = localStorage.getItem('token');
      if (!this.helper.isTokenExpired(token)) return true;

      this.router.navigate(['/login', {returnUrl: state.url}]);
      return false;
  }
}
