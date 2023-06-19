import { Component, Input } from '@angular/core';
import { StudentFeedback } from '../../shared/interfaces/student-feedback';

@Component({
  selector: 'app-student-feedback-card',
  templateUrl: './student-feedback-card.component.html',
  styleUrls: ['./student-feedback-card.component.css']
})
export class StudentFeedbackCardComponent {
  @Input('student-feedback') info!: StudentFeedback
}
