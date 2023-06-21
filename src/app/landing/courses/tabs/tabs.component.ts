import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Output('select') tabSelection = new EventEmitter<string>()

  @Input() tabs: string[] = []
  @Input() current = ''

  select(tab: string): void{
    this.current = tab
    this.tabSelection.emit(tab)
  }
}
