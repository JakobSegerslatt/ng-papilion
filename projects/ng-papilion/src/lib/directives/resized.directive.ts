import { Directive, ElementRef, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { ResizedEvent } from './resized-event';

/**
 * A directive that emits new width and height of an element when it is resized
 * Since there isn't a resize event on html elements,
 * the only way to check for changes is through polling which we do through and rxjs interval of 10ms
 */
@Directive({
  selector: '[papResized]'
})
export class ResizedDirective implements OnInit, OnDestroy {
  /**  */
  @Output() m6Resized = new EventEmitter<ResizedEvent>();

  private oldWidth: number;
  private oldHeight: number;

  private sub: Subscription;
  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    this.onResized();

    this.sub = interval(50).subscribe(x => {
      if (this.sizeHasChanged()) {
        this.onResized();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private onResized(): void {
    const newWidth = this.element.nativeElement.clientWidth;
    const newHeight = this.element.nativeElement.clientHeight;

    const event = new ResizedEvent(
      this.element,
      newWidth,
      newHeight,
      this.oldWidth,
      this.oldHeight);

    this.oldWidth = this.element.nativeElement.clientWidth;
    this.oldHeight = this.element.nativeElement.clientHeight;

    this.m6Resized.next(event);
  }

  private sizeHasChanged(): boolean {
    const newWidth = this.element.nativeElement.clientWidth;
    const newHeight = this.element.nativeElement.clientHeight;

    if (newWidth === this.oldWidth && newHeight === this.oldHeight) {
      return false;
    }
    return true;
  }
}
