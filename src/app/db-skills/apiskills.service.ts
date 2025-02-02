import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../about-me/skills.service';

@Injectable({
  providedIn: 'root'
})
export class ApiskillsService {
  http = inject(HttpClient);
  getAllSkills(): Observable<any> {
    return this.http.get('http://localhost:3000/skills');
  }
  createSkill(skill: Skill):Observable<any>{
    return this.http.post('http://localhost:3000/skills',skill)
  }
  getSKillbyid(id:string|null):Observable<any>{
    return this.http.get('http://localhost:3000/skills/'+id)  
}
  editSKill(id:string|null,skill:Skill):Observable<any>{
    return this.http.patch('http://localhost:3000/skills/'+id,skill)
  }
  deleteSKill(id:string):Observable<any>{
    return this.http.delete('http://localhost:3000/skills/'+id)
  }
  uploadImg(img:FormData):Observable<any>{
    return this.http.post('http://localhost:3000/upload',img)
}
}
