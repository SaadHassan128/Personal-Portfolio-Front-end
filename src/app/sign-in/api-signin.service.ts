import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSigninService {

  http = inject(HttpClient);
  isAuthenticated = false;
  auth(){
    this.isAuthenticated = true;
  }

  signin(name : string , password : string) : Observable <any>{
    
    return this.http.post("http://localhost:3000/signIn" , {name , password});
    
  }
  checkAuth() : boolean {
    return this.isAuthenticated;
  }
}
