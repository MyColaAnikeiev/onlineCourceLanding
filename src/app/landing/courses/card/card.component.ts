import { Component, Input } from '@angular/core';
import { Course } from '../../shared/interfaces/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [
    '../../common.css',
    './card.component.css'
  ]
})
export class CardComponent {
  @Input('course-data') course!: Course;
}
