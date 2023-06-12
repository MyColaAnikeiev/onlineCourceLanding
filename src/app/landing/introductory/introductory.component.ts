import { Component } from '@angular/core';

@Component({
  selector: 'app-introductory',
  templateUrl: './introductory.component.html',
  styleUrls: [
    '../common.css',
    './introductory.component.css'
  ]
})
export class IntroductoryComponent {
  courseCons = ['Flexible', 'Learning path', 'Community']
}
