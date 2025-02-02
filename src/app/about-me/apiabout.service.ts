import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiaboutService {

  http = inject(HttpClient);
  getAllhome(): Observable<any> {
    return this.http.get('http://localhost:3000/aboutme');
  }
  createhome(aboutme: Aboutme): Observable<any> {
    return this.http.post('http://localhost:3000/aboutme', aboutme);
  }
  getHomebyid(id: string | null): Observable<any> {
    return this.http.get('http://localhost:3000/aboutme/' + id);
  }
  updatehome(id: string | null, aboutme: Aboutme): Observable<any> {
    return this.http.patch('http://localhost:3000/aboutme/' + id, aboutme);
  }
  deletehome(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/home/' + id);
  }
}


export interface Aboutme {
  _id?: string;
  title: string;
  firstDesc: string;
  secondDesc: string;

}
