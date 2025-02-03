import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiSigninService {
  http = inject(HttpClient);
  auth(token: string) {
    localStorage.setItem('jwt', token);
  }

  signin(name: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/signin', { name, password });
  }
  checkAuth(): boolean {
    // return this.isAuthenticated;
    if (localStorage.getItem('jwt')) {
      return true;
    }
    return false;
  }
}
