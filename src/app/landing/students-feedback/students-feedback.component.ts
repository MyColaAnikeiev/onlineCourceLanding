import { Component, OnInit } from '@angular/core';
import { StudentsFeedbackService } from '../shared/services/students-feedback.service';
import { StudentFeedback } from '../shared/interfaces/student-feedback';

@Component({
  selector: 'app-students-feedback',
  templateUrl: './students-feedback.component.html',
  styleUrls: [
    '../common.css',
    './students-feedback.component.css'
  ]
})
export class StudentsFeedbackComponent implements OnInit{
  studentFeedbacks: StudentFeedback[] = []

  constructor(private feedbackService: StudentsFeedbackService){}

  ngOnInit(): void {
    this.feedbackService.getFeedbacks()
      .subscribe(feedbacks => {
        this.studentFeedbacks = feedbacks
      })
      
  }
}
