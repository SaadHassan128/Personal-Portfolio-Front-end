import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] =[]

  getProject() {
    return this.projects;
  }
  updateProject(index: number, projects: Project) {
    this.projects[index] = projects;
  }
}

export interface Project {
  _id?: string;
  title: string;
  img: string;
  desc: string;
  link: string;
  livedemo: string;

}


