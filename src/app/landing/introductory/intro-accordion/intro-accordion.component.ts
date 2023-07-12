import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-accordion',
  templateUrl: './intro-accordion.component.html',
  styleUrls: ['./intro-accordion.component.css']
})
export class IntroAccordionComponent {
  isOpen = false;

  toggle(){
    this.isOpen = !this.isOpen
  }
}
