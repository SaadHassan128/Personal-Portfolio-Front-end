import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);
  getAllSkills(): Observable<any> {
    return this.http.get('http://localhost:3000/resume');
  }
  updateResume(): Observable<any> {
    return this.http.get('http://localhost:3000/resume');
  }
  uploadImg(img:FormData):Observable<any>{
    return this.http.post('http://localhost:3000/upload',img)
}
}

 export interface Resume {
  link :string;
}
