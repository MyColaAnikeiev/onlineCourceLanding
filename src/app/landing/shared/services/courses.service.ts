import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Course } from '../interfaces/course';
import { dummyCourses } from './dummyCourses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getListOfTechnologies(): Observable<string[]> {
    return of(['Web', 'Mobile', 'Data', 'Cloud'])
  }

  getCourses(technology: string): Observable<Course[]>{
    return of(dummyCourses).pipe(delay(50))
  }

  constructor() { }
}
