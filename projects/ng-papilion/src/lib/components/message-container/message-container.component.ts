import { Component, OnInit, Input, ViewChild, OnDestroy, SimpleChange, OnChanges } from '@angular/core';

/**
 * Uses content projection to wrap some information in
 * a colored box, which helps catching the users attention.
 *
 * Always set the type input.
 * Set the optional icon input if possible.
 *
 * The container also has a rippleId input, which the parent component
 * can use with the ripple service, to trigger a ripple on the box.
 */
@Component({
  selector: 'pap-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() type: 'info' | 'warn' = 'info';

  /** Optional to set but strongly recommended */
  @Input() icon: string;
  /** Only has an effect if icon is set */
  @Input() iconColor: 'primary' | 'warn';

  /** Gets set on init */
  containerClass: 'info-container' | 'warn-container';

  constructor() { }


  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    const typeChange = changes.objType;
    if (typeChange && !typeChange.firstChange) {
      this.calcVariables();
    }
  }

  ngOnInit() {
    this.calcVariables();
  }

  ngOnDestroy() {
  }

  calcVariables() {
    if (this.isInfo) {
      this.icon = this.icon || 'info';
      this.iconColor = 'primary';
      this.containerClass = 'info-container';
    } else if (this.isWarn) {
      this.icon = this.icon || 'warning';
      this.iconColor = 'warn';
      this.containerClass = 'warn-container';
    }
  }

  get isInfo(): boolean {
    return this.type === 'info';
  }

  get isWarn(): boolean {
    return this.type === 'warn';
  }
}
