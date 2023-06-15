import { Component } from '@angular/core';
import { Course } from '../shared/interfaces/course';
import { dummyCourses } from './dummyCourses'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [
    '../common.css',
    './courses.component.css'
  ]
})
export class CoursesComponent {
  courses: Course[] = dummyCourses
}
