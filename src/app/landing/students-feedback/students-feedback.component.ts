import { Component } from '@angular/core';
import { dummyStutendsFeedback } from './dummyStudentsFeedback';

@Component({
  selector: 'app-students-feedback',
  templateUrl: './students-feedback.component.html',
  styleUrls: [
    '../common.css',
    './students-feedback.component.css'
  ]
})
export class StudentsFeedbackComponent {
  studentFeedbacks = dummyStutendsFeedback
}
