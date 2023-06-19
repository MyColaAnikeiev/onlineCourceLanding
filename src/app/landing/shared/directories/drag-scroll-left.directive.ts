import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnDestroy } from '@angular/core';


@Directive({
  selector: '[appDragScrollLeft]'
})
export class DragScrollLeftDirective implements AfterViewInit, OnDestroy{

  dragging = false
  lastClientX = 0
  leftShift = 0
  maxLeftShift = 0

  touchId = 0

  intervalId: ReturnType<typeof setInterval> | null = null

  constructor(private elm: ElementRef) { }

  ngAfterViewInit(): void {
    this.calcMaxShift()
  }

  @HostBinding('style.left') left = '0'

  @HostListener('window:resize') 
  onResize(){
    this.calcMaxShift()
  }

  @HostListener('mousedown', ['$event.clientX']) 
  dragStart(clientX: number){
    this.lastClientX = clientX;
    this.dragging = true;
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
  }

  calcMaxShift(): void{
    const contentContainer = (<HTMLElement>this.elm.nativeElement)
    const hostContainer = contentContainer.parentElement
    this.maxLeftShift = Math.max(0, contentContainer.offsetWidth - hostContainer!.offsetWidth)
  }

  ngOnDestroy(): void {
    if(this.intervalId !== null){
      clearInterval(this.intervalId)
    }
  }
}
