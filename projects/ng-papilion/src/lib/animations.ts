import { trigger, state, style, transition, animate, keyframes, group, query } from '@angular/animations';

// Developer note: Use 1 & 0 instead of true and false.

export const drawingPointExpand = trigger('drawingPointExpand', [
  transition('* => *', animate('200ms ease-in-out')),
  state(
    '1',
    style({
      width: '*',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      zIndex: 2
    })
  ),
  state(
    '0',
    style({
      width: '40px',
      backgroundColor: '*',
      zIndex: '*'
    })
  )
]);

export const dipSwitch = trigger('dipSwitch', [
  state('1', style({ height: '12px' })),
  state('0', style({ height: '*' })),
  transition('* => *', animate('200ms ease-in-out'))
]);

export const slideReveal = trigger('slideReveal', [
  state('1', style({ height: '12px' })),
  state('0', style({ height: '*' })),
  transition('* => *', animate('200ms ease-in-out'))
]);

export const alarmUpdateAnimation = trigger('alarmUpdateAnimation', [
  transition('* => *', [
    animate(
      '400ms ease-in-out',
      keyframes([
        style({ backgroundColor: '*', offset: 0 }),
        style({ backgroundColor: '#ffeabe', offset: 0.5 }),
        style({ backgroundColor: '*', offset: 1.0 }),
      ])
    )
  ]),
]);

export const alarmArriveAnimation = trigger('alarmArriveAnimation', [
  transition(':enter', [
    animate(
      '600ms ease-in-out',
      keyframes([
        style({ color: 'teal', offset: 0.0 }),
        style({ transform: 'translateX(0px)', offset: 0.0 }),
        style({ transform: 'translateX(5px)', offset: 0.1 }),
        style({ transform: 'translateX(-5px)', offset: 0.2 }),
        style({ transform: 'translateX(5px)', offset: 0.3 }),
        style({ transform: 'translateX(-5px)', offset: 0.4 }),
        style({ transform: 'translateX(5px)', offset: 0.5 }),
        style({ transform: 'translateX(-5px)', offset: 0.6 }),
        style({ transform: 'translateX(5px)', offset: 0.7 }),
        style({ transform: 'translateX(-5px)', offset: 0.8 }),
        style({ transform: 'translateX(5px)', offset: 0.9 }),
        style({ transform: 'translateX(0px)', offset: 1.0 }),
        style({ color: 'red', offset: 1.0 }),
      ])
    )
  ]),
]);


export const eventListAnimation = trigger('eventListAnimation', [
  // The ENTER-transition
  transition(':enter', [
    animate(
      '300ms',
      keyframes([
        style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
        // style({ opacity: 0.5, transform: 'translateY(10px)', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ])
    )
  ]),
  // Any State to State, e.g. 1 -> 2
  transition('* => *', [
    animate(
      '300ms',
      keyframes([
        style({ transform: 'translateY(-100%)', offset: 0 }),
        // style({ transform: 'translateY(10px)', offset: 0.3 }),
        style({ transform: 'translateY(0)', offset: 1.0 })
      ])
    )
  ]),
  // The LEAVE-transition
  transition(':leave', [animate('300ms', keyframes([style({ opacity: 1, offset: 0 }), style({ opacity: 0, offset: 1 })]))])
]);

// Works with ngFor loops, where the element determines the state either it's anything or it's void
export const expandOnInit = trigger('expandOnInit', [
  transition(
    'void => *',
    animate(
      '150ms ease-in',
      keyframes([
        style({ width: '0px', overflow: 'hidden', offset: 0 }),
        style({ width: '*', overflow: 'hidden', offset: 0.5 }), // We hava a spike issue here, unknown reason
        style({ width: '*', overflow: 'hidden', offset: 1.0 })
      ])
    )
  ),
  transition(
    '* => void',
    animate(
      '250ms ease-out',
      keyframes([style({ width: '*', overflow: 'hidden', offset: 0 }), style({ width: '0px', overflow: 'hidden', offset: 1.0 })])
    )
  )
]);

export const expandHeight = trigger('expandHeight', [
  state('1', style({ height: '*', overflow: 'initial' })),
  state('0', style({ height: '0px', overflow: 'hidden' })),
  state('void', style({ height: '0px', overflow: 'hidden' })),
  transition('* => *', animate('150ms ease-in-out'))
  // transition('void => 0', animate('150ms ease-in', style({ height: '0px' })))
]);

export const expandWidth = trigger('expandWidth', [
  transition('* => *', animate('250ms ease-in-out')),
  state(
    '1',
    style({
      width: '*',
      overflow: 'hidden'
    })
  ),
  state(
    '0',
    style({
      width: '0px',
      overflow: 'hidden'
    })
  )
]);

export const fadeInOut = trigger('fadeInOut', [
  // The ENTER-transition
  transition(':enter', [
    animate(
      '500ms ease-in',
      keyframes([style({ opacity: 0, visibility: 'hidden', offset: 0 }), style({ opacity: 1, visibility: 'visible', offset: 1.0 })])
    )
  ]),
  // The LEAVE-transition
  transition(':leave', [animate('200ms ease-out', keyframes([style({ opacity: 1, offset: 0 }), style({ opacity: 0, offset: 1 })]))])
]);

export const fastFadeInOut = trigger('fastFadeInOut', [
  // Fade in
  transition('1 => 0', animate('200ms ease-out')),
  // Fade out
  transition('0 => 1', animate('150ms 100ms ease-in')),
  state(
    '1',
    style({
      opacity: 1,
      display: 'initial'
    })
  ),
  state(
    '0',
    style({
      opacity: 0,
      display: 'none'
    })
  )
]);

export const rotateUp = trigger('rotateUp', [
  state('1', style({ transform: 'rotate(180deg)' })),
  state('0', style({ transform: 'rotate(0deg)' })),
  state('void', style({ transform: 'rotate(0deg)' })),
  transition('* => *', animate('150ms ease-in-out'))
  // transition('void => 0', animate('150ms ease-in', style({ height: '0px' })))
]);

export const rotateNode = trigger('rotateNode', [
  state('1', style({ transform: 'rotate(90deg)' })),
  state('0', style({ transform: 'rotate(0deg)' })),
  state('void', style({ transform: 'rotate(0deg)' })),
  transition('* => *', animate('150ms ease-in-out'))
  // transition('void => 0', animate('150ms ease-in', style({ height: '0px' })))
]);

export const rotateNodeReverse = trigger('rotateNodeReverse', [
  state('1', style({ transform: 'rotate(-90deg)' })),
  state('0', style({ transform: 'rotate(0deg)' })),
  state('void', style({ transform: 'rotate(0deg)' })),
  transition('* => *', animate('150ms ease-in-out'))
  // transition('void => 0', animate('150ms ease-in', style({ height: '0px' })))
]);

export const rotate180 = trigger('rotate180', [
  state('0', style({ transform: 'rotate(-180deg)' })),
  state('1', style({ transform: 'rotate(0deg)' })),
  state('void', style({ transform: 'rotate(0deg)' })),
  transition('* => *', animate('200ms ease-in-out'))
  // transition('void => 0', animate('150ms ease-in', style({ height: '0px' })))
]);

export const spinnerFadeInOut = trigger('spinnerFadeInOut', [
  // Fade in
  // transition(':enter', [
  //   animate('200ms ease-in', keyframes([
  //     style({ opacity: 0, display: 'none', offset: 0 }),
  //     style({ opacity: 0, display: 'initial', offset: 0.1 }),
  //     style({ opacity: 1, display: 'initial', offset: 1.0 })
  //   ]))
  // ]),
  transition('0 => 1', [
    animate(
      '200ms ease-in',
      keyframes([
        style({ opacity: 0, display: 'none', offset: 0 }),
        style({ opacity: 0, display: 'initial', offset: 0.1 }),
        style({ opacity: 1, display: 'initial', offset: 1.0 })
      ])
    )
  ]),
  // Fade out
  transition('1 => 0', [
    animate(
      '200ms ease-out',
      keyframes([
        style({ opacity: 1, display: 'initial', offset: 0 }),
        style({ opacity: 0, display: 'initial', offset: 0.9 }),
        style({ opacity: 0, display: 'none', offset: 1.0 })
      ])
    )
  ])
]);

export const sidebarFlyInOut = trigger('sidebarFlyInOut', [
  // Expanding
  transition('1 => 0', animate('100ms 150ms ease-in')),
  // Collapse
  transition('0 => 1', animate('150ms ease-out')),
  state(
    '1',
    style({
      width: '*',
      overflow: 'hidden'
    })
  ),
  state(
    '0',
    style({
      width: '50px',
      overflow: 'hidden'
    })
  )
]);

export const simpleHide = trigger('simpleHide', [
  state(
    '1',
    style({
      opacity: '1'
    })
  ),
  state(
    '0',
    style({
      opacity: '0'
    })
  ),
  transition('0 => 1', animate('100ms 100ms ease-in')),
  transition('1 => 0', animate('100ms ease-out'))
]);

/**
 * ROUTE ANIMATIONS
 */

const animationTime = 300;

const fadeRouting = [
  group([
    // The components will be placed according in the viewport and slide through the page.
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
    query(':enter', [style({ opacity: 0, display: 'none' }), animate(800, style({ opacity: 1, display: 'initial' }))], { optional: true }),
    query(':leave', [style({ opacity: 1, display: 'initial' }), animate(300, style({ opacity: 0, display: 'none' }))], { optional: true })
  ])
];

const slideDown = [
  group([
    // The components will be placed according in the viewport and slide through the page.
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateY(-100%)' }), animate(animationTime, style({ transform: 'translateY(0%)' }))], {
        optional: true
      }),
      query(':leave', [style({ transform: 'translateY(0%)' }), animate(animationTime, style({ transform: 'translateY(100%)' }))], {
        optional: true
      })
    ])
  ])
];

const slideLeft = [
  group([
    // The components will be placed according in the viewport and slide through the page.
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
    query(':enter', [style({ transform: 'translateX(100%)' }), animate(animationTime, style({ transform: 'translateX(0%)' }))], {
      optional: true
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate(animationTime, style({ transform: 'translateX(-100%)' }))], {
      optional: true
    })
  ])
];

const slideRight = [
  // The components will be placed according in the viewport and slide through the page.
  query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate(animationTime, style({ transform: 'translateX(0%)' }))], {
      optional: true
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate(animationTime, style({ transform: 'translateX(100%)' }))], {
      optional: true
    })
  ])
];

const slideUp = [
  group([
    // The components will be placed according in the viewport and slide through the page.
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
    query(':enter', [style({ transform: 'translateY(100%)' }), animate(animationTime, style({ transform: 'translateY(0%)' }))], {
      optional: true
    }),
    query(':leave', [style({ transform: 'translateY(0%)' }), animate(animationTime, style({ transform: 'translateY(-100%)' }))], {
      optional: true
    })
  ])
];

export function detailsToListTransitions(fromState, toState): boolean {
  if (fromState && toState === 'list') {
    const fromSplit: string[] = fromState.split('_');
    return fromSplit[0] === 'details';
  } else {
    return false;
  }
}

export function detailsTransitions(fromState, toState): boolean {
  if (fromState && toState) {
    const fromSplit: string[] = fromState.split('_');
    const fromId: string = fromSplit[1];
    const toSplit: string[] = toState.split('_');
    const toId: string = toSplit[1];
    return !!fromId && !!toId;
  } else {
    return false;
  }
}

export function listToDetailsTransitions(fromState, toState): boolean {
  if (fromState === 'list' && toState) {
    const toSplit: string[] = toState.split('_');
    return toSplit[0] === 'details';
  } else {
    return false;
  }
}

// Animation between routes
export const routerTransition = trigger('routerTransition', [
  // Content fades OUT/IN
  transition(detailsTransitions, fadeRouting),
  transition(
    'guides => wizards, ' +
    'guides => settings, ' +
    'guides => events, ' +
    'wizards => guides, ' +
    'wizards => settings, ' +
    'wizards => events, ' +
    'wizard => guides, ' +
    'wizard => events, ' +
    'events => guides, ' +
    'events => wizard, ' +
    'events => settings, ' +
    'settings => guides, ' +
    'settings => events, ' +
    'settings => wizards', fadeRouting),

  // Content slides to the RIGHT =>
  transition(detailsToListTransitions, slideRight),
  transition(
    'guide => guides, ' +
    'wizard => wizards', slideRight),

  // Content slides to the LEFT <=
  transition(listToDetailsTransitions, slideLeft),
  transition(
    'guides => guide, ' +
    'wizards => wizard', slideLeft),

  // Content slides UP
  transition('systems => *, ' +
    'dashboard => calendar, ' +
    'dashboard => schedules, ' +
    'dashboard => list, ' +
    'dashboard => batch, ' +
    'dashboard => units-configuration, ' +
    'dashboard => dbimport, ' +
    'list => calendar, ' +
    'list => schedules, ' +
    'list => dbimport, ' +
    'units-configuration => calendar, ' +
    'units-configuration => schedules, ' +
    'units-configuration => batch, ' +
    'units-configuration => dbimport, ' +
    'calendar => schedules, ' +
    'calendar => batch, ' +
    'calendar => dbimport, ' +
    'schedules => batch, ' +
    'schedules => dbimport, ' +
    'batch => dbimport, ' +
    'guides => *, ' +
    'guide => *, ' +
    'wizards => *, ' +
    'wizard => *, ' +
    'events => *, ' +
    'settings => *', slideUp),

  // Content slides DOWN
  transition(
    '* => systems, ' +
    '* => dashboard, ' +
    'units-configuration => dashboard, ' +
    'calendar => list, ' +
    'calendar => units-configuration, ' +
    'schedules => list, ' +
    'schedules => units-configuration, ' +
    'schedules => calendar, ' +
    'batch => units-configuration, ' +
    'batch => calendar, ' +
    'batch => schedules, ' +
    'dbimport => list , ' +
    'dbimport => units-configuration, ' +
    'dbimport => calendar , ' +
    'dbimport => schedules, ' +
    'dbimport => batch, ' +
    'details => *, ' +
    '* => guides, ' +
    '* => guide, ' +
    '* => wizards, ' +
    '* => events, ' +
    '* => settings', slideDown),
]);
