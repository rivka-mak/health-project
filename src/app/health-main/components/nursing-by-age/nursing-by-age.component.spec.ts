import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingByAgeComponent } from './nursing-by-age.component';

describe('NursingByAgeComponent', () => {
  let component: NursingByAgeComponent;
  let fixture: ComponentFixture<NursingByAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NursingByAgeComponent]
    });
    fixture = TestBed.createComponent(NursingByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
