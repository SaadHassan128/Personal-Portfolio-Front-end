import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSkillsComponent } from './db-skills.component';

describe('DbSkillsComponent', () => {
  let component: DbSkillsComponent;
  let fixture: ComponentFixture<DbSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
