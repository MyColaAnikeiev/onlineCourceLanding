import { AfterViewChecked, AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';


@Directive({
  selector: '[appDragScrollLeft]'
})
export class DragScrollLeftDirective implements AfterViewInit, AfterViewChecked{

  dragging = false
  lastClientX = 0
  leftShift = 0
  maxLeftShift = 0

  touchId = 0
  
  /**
   * minimum number of pixels to scroll in order to prevent link clicking
   */
  clickPreventingThreshold = 5
  lastMoveDiff = 0

  /**
   * Any value that change any time content changes.
   */
  contentChanged = false
  @Input('contentHash') set contentHash (obj: any){
    this.contentChanged = true
  }

  constructor(private elm: ElementRef) { }

  ngAfterViewInit(): void {
    this.calcMaxShift()
  }

  ngAfterViewChecked(): void {
    if(this.contentChanged){
      this.calcMaxShift()
      this.contentChanged = false;
    }
  }

  @HostBinding('style.left') left = '0'

  @HostListener('window:resize') 
  onResize(){
    this.calcMaxShift()
    this.leftShift = Math.min(this.leftShift, this.maxLeftShift)
    this.setScrollLeft(this.leftShift)
  }

  @HostListener('click')
  onClick(){
    if(Math.abs(this.lastMoveDiff) >= this.clickPreventingThreshold){
      return false
    }
    return true
  }

  @HostListener('mousedown', ['$event.clientX']) 
  dragStart(clientX: number){
    this.lastClientX = clientX;
    this.dragging = true;
    this.lastMoveDiff = 0
    return false
  }

  @HostListener('touchstart', ['$event'])
  touchStart(evt: TouchEvent){
    if(evt.touches.length == 1){
      const touch = evt.touches[0]
      this.touchId = touch.identifier
      this.dragStart(touch.clientX)
    }
  }

  @HostListener('window:mouseup') 
  @HostListener('window:mouseleave')
  dragEnd(){
    this.dragging = false
    this.leftShift = Math.max(-this.maxLeftShift, Math.min(0, this.leftShift))
    return false
  }

  @HostListener('window:touchend', ['$event'])
  onTouchEnd(evt: TouchEvent){
    if(!this.drag){
      return
    }

    if(evt.touches.length == 0){
      this.dragEnd()
    }else{
      const endedTouch = Array.from(evt.changedTouches)
        .find(touch => touch.identifier == this.touchId)
      if(endedTouch){
        const newTouch = evt.touches[0]
        this.touchId = newTouch.identifier
        const touchesDiff = newTouch.clientX - endedTouch.clientX
        this.lastClientX += touchesDiff
      }
    }
  }


  @HostListener('touchmove', ['$event'])
  onTouchMove(evt: TouchEvent){
    if(!this.dragging){
      return
    }

    const touch = Array.from(evt.touches)
      .find(touch => touch.identifier == this.touchId)
    if(touch){
      this.drag(touch.clientX)
    }
  }

  @HostListener('mousemove', ['$event.clientX'])
  onMouseMove(mouseX: number){
    if(this.dragging){
      this.drag(mouseX)
    }
  }

  setScrollLeft(shiftX: number): void{
    const left = Math.max(-this.maxLeftShift, Math.min(0, shiftX))
    this.left = left + 'px'
  }

  drag(clientX: number): void{
    const diff = clientX - this.lastClientX;
    this.lastClientX = clientX
    this.leftShift += diff
    this.setScrollLeft(this.leftShift)
    this.lastMoveDiff += diff
  }

  calcMaxShift(): void{
    const contentContainer = (<HTMLElement>this.elm.nativeElement)
    const hostContainer = contentContainer.parentElement
    this.maxLeftShift = Math.max(0, contentContainer.offsetWidth - hostContainer!.offsetWidth)
  }
}
