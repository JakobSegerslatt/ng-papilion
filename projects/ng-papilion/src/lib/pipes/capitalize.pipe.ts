import { Pipe, PipeTransform } from '@angular/core';

/**
 * Converts a string to captilized by setting the first char to uppercase
 */
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'string' && value[0] !== null) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
}
