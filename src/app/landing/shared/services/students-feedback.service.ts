import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { dummyStutendsFeedback } from './dummyStudentsFeedback';
import { StudentFeedback } from '../interfaces/student-feedback';

@Injectable({
  providedIn: 'root'
})
export class StudentsFeedbackService {

  getFeedbacks(): Observable<StudentFeedback[]>{
    return of(dummyStutendsFeedback).pipe(delay(50))
  }

  constructor() { }
}
