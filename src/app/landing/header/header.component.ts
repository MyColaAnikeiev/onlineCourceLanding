import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../common.css',
    './header.component.css',
    './header.component.menu.css'
  ]
})
export class HeaderComponent {
  menuOpen = false

  onMenuClick(){
    this.menuOpen = !this.menuOpen
  }
}
