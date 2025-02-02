import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skill: Skill[] = [
  ];
  getSkills() {
    return this.skill;
  }
  editSKill(index: number, skill: Skill) {
    this.skill[index] = skill;
  }
}

export interface Skill {
  _id?: string;
  name: string;
  img: string;
}
