import { Directive, ElementRef } from '@angular/core';

/**
 * Can be added on an element to check its
 * position and size.
 * Intended to be used with @ViewChild
 *
 * @example
 * <div papElementSize></div>
 * [at]ViewChild(ElementSizeDirective) myElement: ElementSizeDirective;
 * const elWidth = myElement.width;
 */
@Directive({
  selector: '[papElementSize]'
})
export class ElementSizeDirective {

  constructor(private elRef: ElementRef) { }

  /**
   * @param event if the element emits a drag event, it can be used
   * to calculate its position.
   * @return The percentage offset of the event to the leftside of the element
   */
  public calcCoordX(event: DragEvent): number {
    const leftOffset = event.offsetX;
    return leftOffset / this.width * 100;
  }

  /**
   * @param event if the element emits a drag event, it can be used
   * to calculate its position.
   * @return The percentage offset of the event to the topside of the element
   */
  public calcCoordY(event: DragEvent): number {
    const topOffset = event.offsetY;
    return topOffset / this.height * 100;
  }

  /**
   * @returns The current clientWidth of the element
   */
  public get width(): number {
    return this.element.clientWidth;
  }

  /**
   * @returns The current clientHeight of the element
   */
  public get height(): number {
    return this.element.clientHeight;
  }

  private get element(): HTMLElement {
    return this.elRef.nativeElement;
  }
}


