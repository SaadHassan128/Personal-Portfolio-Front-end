import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../projects/projects.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
    http = inject(HttpClient);
    getAllprojects(): Observable<any> {
      return this.http.get('http://localhost:3000/projects');
    }
    createProject(projects: Project): Observable<any> {
      return this.http.post('http://localhost:3000/projects', projects);
    }
    getProjectbyId(id: string | null): Observable<any> {
      return this.http.get('http://localhost:3000/projects/' + id);
    }
    updateProject(id: string | null, projects: Project): Observable<any> {
      return this.http.patch('http://localhost:3000/projects/' + id, projects);
    }
    deleteProject(id: string): Observable<any> {
      return this.http.delete('http://localhost:3000/projects/' + id);
    }
    uploadImg(img: FormData): Observable<any> {
      return this.http.post('http://localhost:3000/upload', img);
    }
  }
