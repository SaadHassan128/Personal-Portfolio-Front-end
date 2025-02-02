import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiSigninService } from './sign-in/api-signin.service';


@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private apisignin: ApiSigninService , private router: Router) {}

  canActivate(): boolean {
    if (!this.apisignin.checkAuth()) {
      this.router.navigate(['/signIn']);
      return false;
    }
    return true;
  }
}