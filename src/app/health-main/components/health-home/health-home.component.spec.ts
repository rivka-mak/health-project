import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthHomeComponent } from './health-home.component';

describe('HealthHomeComponent', () => {
  let component: HealthHomeComponent;
  let fixture: ComponentFixture<HealthHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthHomeComponent]
    });
    fixture = TestBed.createComponent(HealthHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
