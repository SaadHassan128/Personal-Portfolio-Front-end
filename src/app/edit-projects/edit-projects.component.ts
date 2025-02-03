import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../db-projects/projects.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from '../projects/projects.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrl: './edit-projects.component.css',
})
export class EditProjectsComponent {
  fetch = inject(ProjectsService);
  editProjectForm!: FormGroup;
  router = inject(Router);
  activedroute = inject(ActivatedRoute);
  currentid!: string | null;
  currentproject!: Project;
  ngOnInit(): void {
    this.editProjectForm = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      livedemo: new FormControl('', Validators.required),
    });

    this.currentid = this.activedroute.snapshot.paramMap.get('id');
    this.fetch.getProjectbyId(this.currentid).subscribe((res) => {
      this.currentproject = res.projects;
      console.log(this.currentproject);
      this.editProjectForm.patchValue({
        title: this.currentproject.title,
        desc: this.currentproject.desc,
        link: this.currentproject.link,
        livedemo: this.currentproject.livedemo,
      });
    });
  }
  saveProject() {
    const element = document.getElementById('img') as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    const formData = new FormData();
    this.currentproject.title = this.editProjectForm.value.title;
    this.currentproject.desc = this.editProjectForm.value.desc;
    this.currentproject.link = this.editProjectForm.value.link;
    this.currentproject.livedemo = this.editProjectForm.value.livedemo;
    if (file) {
      formData.append('file', file);
      this.fetch.uploadImg(formData).subscribe((res) => {
        this.currentproject.img = res.filepath;
        this.fetch
          .updateProject(this.currentid, this.currentproject)
          .subscribe((res) => {
            console.log(res);
            this.router.navigate(['/dashboard/db-projects']);
          });
      });
    } else {
      this.fetch
        .updateProject(this.currentid, this.currentproject)
        .subscribe((res) => {
          console.log(res);
          this.router.navigate(['/dashboard/db-projects']);
        });
    }
  }
}
