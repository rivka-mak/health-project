import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPatientComponent } from './survey-patient.component';

describe('SurveyPatientComponent', () => {
  let component: SurveyPatientComponent;
  let fixture: ComponentFixture<SurveyPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyPatientComponent]
    });
    fixture = TestBed.createComponent(SurveyPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
