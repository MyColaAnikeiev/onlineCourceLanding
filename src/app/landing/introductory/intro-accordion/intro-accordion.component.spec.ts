import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroAccordionComponent } from './intro-accordion.component';

describe('IntroAccordionComponent', () => {
  let component: IntroAccordionComponent;
  let fixture: ComponentFixture<IntroAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroAccordionComponent]
    });
    fixture = TestBed.createComponent(IntroAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
