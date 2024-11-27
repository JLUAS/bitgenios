import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTouchClick]'
})
export class TouchClickDirective {
  @Output() appTouchClick = new EventEmitter<Event>();

  private isTouch = false;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    alert('Touch start detected');
    this.isTouch = true;
    event.preventDefault();
    this.appTouchClick.emit(event);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    alert('Click detected');
    if (!this.isTouch) {
      this.appTouchClick.emit(event);
    }
    this.isTouch = false;
  }

}
