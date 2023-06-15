import { Component, Input } from '@angular/core';
import { Course } from '../../shared/interfaces/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: [
    '../../common.css',
    './course-card.component.css'
  ]
})
export class CourseCardComponent {
  @Input('course-data') course!: Course;
}
