import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Course } from '../interfaces/course';
import { mockCourses } from './mockCourses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getListOfTechnologies(): Observable<string[]> {
    return of(['Web', 'Mobile', 'Data', 'Cloud'])
  }

  getCourses(technology: string): Observable<Course[]>{
    return of(mockCourses).pipe(delay(50))
  }

  constructor() { }
}
