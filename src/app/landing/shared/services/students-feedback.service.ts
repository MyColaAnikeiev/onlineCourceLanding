import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { mockStutendsFeedback } from './mockStudentsFeedback';
import { StudentFeedback } from '../interfaces/student-feedback';

@Injectable({
  providedIn: 'root'
})
export class StudentsFeedbackService {

  getFeedbacks(): Observable<StudentFeedback[]>{
    return of(mockStutendsFeedback).pipe(delay(50))
  }

  constructor() { }
}
