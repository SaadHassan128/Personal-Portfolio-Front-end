import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihomeService {

  http = inject(HttpClient);
  getAllhome(): Observable<any> {
    return this.http.get('http://localhost:3000/home');
  }
  createhome(home: Home): Observable<any> {
    return this.http.post('http://localhost:3000/home', home);
  }
  getHomebyid(id: string | null): Observable<any> {
    return this.http.get('http://localhost:3000/home/' + id);
  }
  updatehome(id: string | null, home: Home): Observable<any> {
    return this.http.patch('http://localhost:3000/home/' + id, home);
  }
  deletehome(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/home/' + id);
  }
}

export interface Home {
  _id?: string;
  title: string;
  firstDesc: string;
  secondDesc: string;

}
