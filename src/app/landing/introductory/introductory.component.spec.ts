import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductoryComponent } from './introductory.component';

describe('IntroductoryComponent', () => {
  let component: IntroductoryComponent;
  let fixture: ComponentFixture<IntroductoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductoryComponent]
    });
    fixture = TestBed.createComponent(IntroductoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
