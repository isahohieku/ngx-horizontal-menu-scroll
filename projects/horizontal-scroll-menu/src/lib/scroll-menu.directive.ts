import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[ngxScrollMenu]',
  standalone: false
})
export class ScrollMenuDirective {

  @Output() scrolled = new EventEmitter();
  constructor() {
  }

  @HostListener('scroll', ['$event']) scrollMenu(e) {
    const responseObject = {
      left_arrow: false,
      right_arrow: false
    };

    if (e.target.scrollLeft > 0) {
      responseObject.left_arrow = false;
    } else {
      responseObject.left_arrow = true;
    }

    if (e.target.scrollLeft >= (e.target.scrollWidth - e.target.clientWidth)) {
      responseObject.right_arrow = true;
    } else {
      responseObject.right_arrow = false;
    }

    this.scrolled.emit(responseObject);

  }
}
