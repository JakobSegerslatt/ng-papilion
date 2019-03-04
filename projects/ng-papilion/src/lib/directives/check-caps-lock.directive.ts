import {
  Directive, EventEmitter, HostListener, Output, Input,
} from '@angular/core';

/**
 * Starts to listen for every keydown event,
 * if caps lock is pressed and changed from previous time
 * we emit an event<boolean>
 *
 * This can also be used with 2-way binding.
 *
 * @example
 * <input papCheckCapsLock (papCheckCapsLockChange)="capsLock = $event" />
 * <div *ngIf="capsLock">You have capslock activated!</div>
 *
 * @example
 * <input [(papCheckCapsLock)]="capsLock" />
 * <div *ngIf="capsLock">You have capslock activated!</div>
 */
@Directive({
  selector: '[papCheckCapsLock]'
})
export class CheckCapsLockDirective {
  /**
   * Input which enables 2-way data binding
   * of the capslock state
   */
  @Input() papCheckCapsLock = false;
  /** Emits a boolean everytime the caps is changed */
  @Output() papCheckCapsLockChange = new EventEmitter<boolean>();

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const newCapsOn = event.getModifierState && event.getModifierState('CapsLock');

    /** Check if it has changed and we should emit a new state */
    if (newCapsOn !== this.papCheckCapsLock) {
      this.papCheckCapsLock = newCapsOn;
      this.papCheckCapsLockChange.emit(this.papCheckCapsLock);
    }
  }
}
