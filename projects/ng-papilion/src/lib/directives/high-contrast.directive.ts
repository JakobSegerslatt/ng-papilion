import { Directive, Input, ElementRef, OnChanges, Renderer2 } from '@angular/core';

/**
 * Checks the input value as a color and
 * automatically sets the classes'light-text' or 'dark-text'
 * depending on which will be more visible.
 *
 * If input is not provided, it checks the element for it's computed backgroundcolor
 *
 * @example
 * <div [papHighContrast]="myBackgroundcolor"></div>
 *
 * @example
 * <div papHighContrast></div>
 */
@Directive({
  selector: '[papHighContrast]'
})
export class HighContrastDirective implements OnChanges {
  /** Expects a css color value, e.g. 'red', '#55c9a3' or 'rgb(131,167,28)' */
  @Input() m6HighContrast: string;

  constructor(private el: ElementRef) { }

  /** Everytime the input color is changed, check which class to set */
  ngOnChanges() {
    this.applyContrastClass();
  }

  /**
   * Adds the corresponding class to an element based
   * on the input color or computed backgroundcolor
   */
  private applyContrastClass() {
    const backgroundColor = this.m6HighContrast || window.getComputedStyle(this.el.nativeElement).backgroundColor;

    if (backgroundColor.length > 0) {
      // Format color
      const rgb = this.extractRGBColors(backgroundColor);

      // Switch the text color accordingly
      const textColor = this.getContrastYIQ(rgb);

      // Remove old class names
      this.el.nativeElement.classList.remove('light-text');
      this.el.nativeElement.classList.remove('dark-text');

      if (textColor === 'light') {
        this.el.nativeElement.classList.add('light-text');
      } else {
        this.el.nativeElement.classList.add('dark-text');
      }
    }
  }

  /**
   * Accepts an object with rgb values as properties
   *
   * Calulation based on
   * http://24ways.org/2010/calculating-color-contrast/
   */
  private getContrastYIQ(color: RGBValues): 'dark' | 'light' {
    const { r, g, b } = color;

    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    return (yiq >= 128) ? 'dark' : 'light';
  }

  /** Accepts css color value and returns an object with its rgb values */
  private extractRGBColors(color: string): RGBValues {
    let r: number;
    let g: number;
    let b: number;

    /** Check HEXCOLOR */
    if (color[0] === '#') {
      r = parseInt(color.substr(1, 2), 16);
      g = parseInt(color.substr(3, 2), 16);
      b = parseInt(color.substr(5, 2), 16);
    } else if (color.substr(0, 3).toLocaleLowerCase() === 'rgb') {
      /** RGB COLOR rgb(255, 152, 0) */
      color = color.substr(4);

      let rgbR = color.split(',')[0];
      if (rgbR !== null) {
        rgbR = rgbR.replace(/[^0-9.]/g, '');
        r = Number(rgbR);
      }

      let rgbG = color.split(',')[1];
      if (rgbG !== null) {
        rgbG = rgbG.replace(/[^0-9.]/g, '');
        g = Number(rgbG);
      }

      let rgbB = color.split(',')[2];
      if (rgbB !== null) {
        rgbB = rgbB.replace(/[^0-9.]/g, '');
        b = Number(rgbB);
      }
    } else {
      /** String color, e.g. 'red' or 'salmon' */
      // TODO: figure out how to convert 'salmon' to rgb.
    }

    return { r, g, b };
  }
}

interface RGBValues {
  r: number;
  g: number;
  b: number;
}
