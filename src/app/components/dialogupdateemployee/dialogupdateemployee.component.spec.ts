import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogupdateemployeeComponent } from './dialogupdateemployee.component';

describe('DialogupdateemployeeComponent', () => {
  let component: DialogupdateemployeeComponent;
  let fixture: ComponentFixture<DialogupdateemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogupdateemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogupdateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
