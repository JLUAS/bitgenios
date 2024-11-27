import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTouchClick]'
})
export class TouchClickDirective {
  @Output() appTouchClick = new EventEmitter<Event>();

  private isTouch = false;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.isTouch = true;
    event.preventDefault();
    this.appTouchClick.emit(event);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.isTouch) {
      this.appTouchClick.emit(event);
    }
    this.isTouch = false;
  }

}
