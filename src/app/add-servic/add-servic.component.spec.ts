import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicComponent } from './add-servic.component';

describe('AddServicComponent', () => {
  let component: AddServicComponent;
  let fixture: ComponentFixture<AddServicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddServicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
