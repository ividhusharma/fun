import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPatientComponent } from './read-patient.component';

describe('ReadPatientComponent', () => {
  let component: ReadPatientComponent;
  let fixture: ComponentFixture<ReadPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
