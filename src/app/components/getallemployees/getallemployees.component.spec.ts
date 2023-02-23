import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallemployeesComponent } from './getallemployees.component';

describe('GetallemployeesComponent', () => {
  let component: GetallemployeesComponent;
  let fixture: ComponentFixture<GetallemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallemployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
