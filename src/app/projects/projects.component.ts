import { Component, inject } from '@angular/core';
import { Project } from './projects.service';
import { ProjectsService } from '../db-projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectsService = inject(ProjectsService);
  project: Project[] = [];

  ngOnInit(): void {
    this.projectsService.getAllprojects().subscribe((res) => {
      this.project = res.data;
      this.project.reverse();
    });

  }


  getRowClass(index: number): number {
    return Math.floor(index / 4) + 1;
  }
}
