import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { mockStutendsFeedback } from '../shared/services/mockStudentsFeedback';
import { StudentFeedback } from '../shared/interfaces/student-feedback';

@Injectable({
  providedIn: 'root'
})
export class StudentsFeedbackService {

  getFeedbacks(): Observable<StudentFeedback[]>{
    return of(mockStutendsFeedback).pipe(delay(50))
  }

  constructor() { }
}
