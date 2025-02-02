import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../services/service.service';

@Injectable({
  providedIn: 'root',
})
export class ApiservicesService {
  http = inject(HttpClient);
  getAllservices(): Observable<any> {
    return this.http.get('http://localhost:3000/services');
  }
  createService(service: Service): Observable<any> {
    return this.http.post('http://localhost:3000/services', service);
  }
  getServicesbyId(id: string | null): Observable<any> {
    return this.http.get('http://localhost:3000/services/' + id);
  }
  updateService(id: string | null, service: Service): Observable<any> {
    return this.http.patch('http://localhost:3000/services/' + id, service);
  }
  deleteService(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/services/' + id);
  }
  uploadImg(img: FormData): Observable<any> {
    return this.http.post('http://localhost:3000/upload', img);
  }
}
