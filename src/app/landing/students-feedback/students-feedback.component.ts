import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsFeedbackService } from './students-feedback.service';
import { StudentFeedback } from '../shared/interfaces/student-feedback';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-students-feedback',
  templateUrl: './students-feedback.component.html',
  styleUrls: ['./students-feedback.component.css']
})
export class StudentsFeedbackComponent implements OnInit{
  studentFeedbacks$: Observable<StudentFeedback[]> | undefined = undefined

  constructor(private feedbackService: StudentsFeedbackService){}

  ngOnInit(): void {
    this.studentFeedbacks$ = this.feedbackService.getFeedbacks()
  }

}
