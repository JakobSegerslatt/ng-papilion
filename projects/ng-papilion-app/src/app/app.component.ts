import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ElementSizeDirective, ResizedEvent } from 'ng-papilion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  /** CheckCapsLockDirective */
  capsLock1: boolean;
  capsLock2: boolean;

  /** ElementSizeDirective */
  @ViewChild(ElementSizeDirective) myElement: ElementSizeDirective;

  /** ResizedDirective */
  resizedEvent: ResizedEvent;

  /** HighContrastDirective */
  contrastColors = [
    // 'red', 'blue', 'teal','coral', 'magenta', 'aqua', 'gold', 'silver',
    '#f44336', '#e91e63', '#9c27b0', '#b39ddb', '#3949ab', '#42a5f5',
    '#2196f3', '#689f38', '#558b2f', '#f57c00', '#ef6c00',
    'rgb(233,30,99)', 'rgb(216,27,96)', 'rgb(255,179,0)', 'rgb(216,67,21)', 'rgb(191,54,12)'
  ];

  /** CapitalizePipe */
  capitalizeStrings = ['foo', 'fooBar', 'Bar', 'BAZ'];
  constructor() {
  }

  ngAfterViewInit() {
    console.log(this);
  }

}
