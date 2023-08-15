import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course, CoursesRepository } from '../shared/interfaces/course';
import { RepositoryService } from '../shared/services/repository.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(@Inject(RepositoryService) private repo: CoursesRepository){}

  getListOfTechnologies(): Observable<string[]> {
    return this.repo.getCourses().pipe(
      map(courses => Object.keys(courses))
    )
  }

  getCourses(technology: string): Observable<Course[]>{
    return this.repo.getCourses().pipe(
      map(courses => courses[technology] ?? [])
    )
  }

}
