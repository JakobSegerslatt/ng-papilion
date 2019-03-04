import { Pipe, PipeTransform } from '@angular/core';

/**
 * Converts a string to captilized by setting the first char to uppercase
 */
@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value === 'string' && value[0] !== null) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
}
