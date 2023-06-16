import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCardComponent } from './mentor-card.component';

describe('MentorCardComponent', () => {
  let component: MentorCardComponent;
  let fixture: ComponentFixture<MentorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorCardComponent]
    });
    fixture = TestBed.createComponent(MentorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
