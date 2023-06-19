import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeedbackCardComponent } from './student-feedback-card.component';

describe('StudentFeedbackCardComponent', () => {
  let component: StudentFeedbackCardComponent;
  let fixture: ComponentFixture<StudentFeedbackCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFeedbackCardComponent]
    });
    fixture = TestBed.createComponent(StudentFeedbackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
