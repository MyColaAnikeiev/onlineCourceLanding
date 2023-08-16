import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsFeedbackService } from './students-feedback.service';
import { StudentFeedback } from '../shared/interfaces/student-feedback';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-students-feedback',
  templateUrl: './students-feedback.component.html',
  styleUrls: ['./students-feedback.component.css']
})
export class StudentsFeedbackComponent{
  studentFeedbacks$: Observable<StudentFeedback[]> = this.feedbackService.getFeedbacks()

  constructor(private feedbackService: StudentsFeedbackService){}

}
