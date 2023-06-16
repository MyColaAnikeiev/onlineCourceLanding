import { Component, Input } from '@angular/core';
import { Mentor } from '../../shared/interfaces/mentor';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.css']
})
export class MentorCardComponent {
  @Input() mentor!: Mentor;
}
