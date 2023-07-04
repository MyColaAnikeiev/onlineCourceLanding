import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerPageComponent } from './form-container-page.component';

describe('FormContainerPageComponent', () => {
  let component: FormContainerPageComponent;
  let fixture: ComponentFixture<FormContainerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContainerPageComponent]
    });
    fixture = TestBed.createComponent(FormContainerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
