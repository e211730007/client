import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartFailurePredictionComponent } from './heart-failure-prediction.component';

describe('HeartFailurePredictionComponent', () => {
  let component: HeartFailurePredictionComponent;
  let fixture: ComponentFixture<HeartFailurePredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartFailurePredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartFailurePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
