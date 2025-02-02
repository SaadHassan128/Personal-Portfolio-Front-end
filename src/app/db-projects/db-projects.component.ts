import { Component, inject, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from '../projects/projects.service';

@Component({
  selector: 'app-db-projects',
  templateUrl: './db-projects.component.html',
  styleUrl: './db-projects.component.css'
})
export class DbProjectsComponent implements OnInit {
constructor(private projectsService: ProjectsService) {}
  projects: Project [] = [];
  deleteId : string | undefined = '';
  editMood = false;
  updateProject() {
    this.editMood = !this.editMood;
  }
  confirmDelete(projectId: string | undefined) {
    if (!projectId) {
      console.error("Project ID is undefined. Cannot delete.");
      return;
    }
  
    const confirmDelete = confirm("Are you sure you want to delete this project?");
    if (confirmDelete) {
      this.deleteProjects(projectId);
    }
  }
  
  ngOnInit() {
    this.projectsService.getAllprojects().subscribe((res) => {
      this.projects = res.data;
    });
  }
  
  deleteProjects(id: string|undefined) {
    if(id){
      this.projectsService.deleteProject(id).subscribe((res) => {
        this.projectsService.getAllprojects().subscribe((res) => {
          this.projects = res.data;
        });
      });
    }
  }
  togleId (id: string|undefined) {
    this.deleteId = id;
  }
}

