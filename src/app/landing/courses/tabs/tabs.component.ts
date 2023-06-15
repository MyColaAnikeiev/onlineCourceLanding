import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Output('select') tabSelection = new EventEmitter<string>()

  tabs = ['Web', 'Mobile', 'Data', 'Cloud']
  current = 'Mobile'

  select(tab: string): void{
    this.current = tab
    this.tabSelection.emit(tab)
  }
}
