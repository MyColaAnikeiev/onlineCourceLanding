import { Component } from '@angular/core';
import { dummyMentors } from './dummyMentors';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent {
  mentors = dummyMentors
}
