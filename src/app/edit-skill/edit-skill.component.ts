import { Component, inject } from '@angular/core';
import {FormControl,FormGroup,Validators,} from '@angular/forms';

import { Skill } from '../about-me/skills.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiskillsService } from '../db-skills/apiskills.service';


@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrl: './edit-skill.component.css',
})
export class EditSkillComponent {
  fetch = inject(ApiskillsService);
  editskillsForm!: FormGroup;
  router = inject(Router);
  activedroute = inject(ActivatedRoute);
  currentid!: string | null;
  currentSkill!: Skill;
  ngOnInit(): void {
    this.editskillsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    });

    this.currentid = this.activedroute.snapshot.paramMap.get('id');
    this.fetch.getSKillbyid(this.currentid).subscribe((res) => {
      this.currentSkill = res.skill;
      console.log(this.currentSkill);
      this.editskillsForm.patchValue({
        name: this.currentSkill.name,})
      
    });
  }
  saveSkill() {

    const element = document.getElementById('img') as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    const formData = new FormData();
    if(file){
      formData.append('file', file);
    }
    this.fetch.uploadImg(formData).subscribe((res) => {
      this.currentSkill.name = this.editskillsForm.value.name;
      this.currentSkill.img = res.filepath;
      this.fetch.editSKill(this.currentid, this.currentSkill).subscribe((res) => {
        console.log(res);
        
      })
    })
    
  }
}
