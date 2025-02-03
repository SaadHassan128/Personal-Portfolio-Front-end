import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApicontactService {
  http = inject(HttpClient);
  getAllcontact(): Observable<any> {
    let token;
    if (typeof window !== 'undefined' && window.localStorage) {
      token = `Bearer ${localStorage.getItem('jwt')}`;
      console.log(typeof token);
    }
    const headers = new HttpHeaders({
      authorization: token ? token : '',
    });
    return this.http.get('http://localhost:3000/contactme', { headers });
  }
  createcontact(contact: Contactme): Observable<any> {
    return this.http.post('http://localhost:3000/contactme', contact);
  }
  getcontactbyid(id: string | null): Observable<any> {
    let token;
    if (typeof window !== 'undefined' && window.localStorage) {
      token = `Bearer ${localStorage.getItem('jwt')}`;
      console.log(typeof token);
    }
    const headers = new HttpHeaders({
      authorization: token ? token : '',
    });
    return this.http.get('http://localhost:3000/contactme/' + id, { headers });
  }
  updatecontact(id: string | null, contact: Contactme): Observable<any> {
    let token;
    if (typeof window !== 'undefined' && window.localStorage) {
      token = `Bearer ${localStorage.getItem('jwt')}`;
      console.log(typeof token);
    }
    const headers = new HttpHeaders({
      authorization: token ? token : '',
    });
    return this.http.patch('http://localhost:3000/contactme/' + id, contact, {
      headers,
    });
  }
  deletecontact(id: string): Observable<any> {
    let token;
    if (typeof window !== 'undefined' && window.localStorage) {
      token = `Bearer ${localStorage.getItem('jwt')}`;
      console.log(typeof token);
    }
    const headers = new HttpHeaders({
      authorization: token ? token : '',
    });
    return this.http.delete('http://localhost:3000/contactme/' + id, {
      headers,
    });
  }
}

export interface Contactme {
  _id?: string;
  name: string;
  email: string;
  phone: number;
  request: String;
}
