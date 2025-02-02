import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicontactService {

  http = inject(HttpClient);
  getAllcontact(): Observable<any> {
    return this.http.get('http://localhost:3000/contactme');
  }
  createcontact(contact: Contactme): Observable<any> {
    return this.http.post('http://localhost:3000/contactme', contact);
  }
  getcontactbyid(id: string | null): Observable<any> {
    return this.http.get('http://localhost:3000/contactme/' + id);
  }
  updatecontact(id: string | null, contact: Contactme): Observable<any> {
    return this.http.patch('http://localhost:3000/contactme/' + id, contact);
  }
  deletecontact(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/contactme/' + id);
  }

}

export interface Contactme {
  _id?: string;
  name: string;
  email: string;
  phone: number;
  request: String;
}
