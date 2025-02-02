import { Component, inject } from '@angular/core';
import { ApiskillsService } from '../db-skills/apiskills.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrl: './add-skill.component.css'
})
export class AddSkillComponent {
  fetch = inject(ApiskillsService);
  addForm!: FormGroup;
  router = inject(Router);
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    });
    
  }
  saveSkill(){
    const element = document.getElementById('img') as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    const formData = new FormData();
    if(file){
      formData.append('file', file);
    }
    this.fetch.uploadImg(formData).subscribe((res) => {
      const newSKill = {
        name: this.addForm.value.name,
        img: res.filepath,
      }
      this.fetch.createSkill(newSKill).subscribe((res) => {
        this.router.navigate(['/dashboard/db-skills']);
      })
    })
  }
}
