import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { MessageContainerComponent } from './components/message-container/message-container.component';
// Directives
import { CheckCapsLockDirective } from './directives/check-caps-lock.directive';
import { ElementSizeDirective } from './directives/element-size.directive';
import { HighContrastDirective } from './directives/high-contrast.directive';
import { ResizedDirective } from './directives/resized.directive';
// Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
    declarations: [
        // Components
        MessageContainerComponent,
        // Directives
        CheckCapsLockDirective,
        ElementSizeDirective,
        HighContrastDirective,
        ResizedDirective,
        // Pipes
        CapitalizePipe,
        SafePipe
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
    ],
    providers: [],
    exports: [
        // Components
        MessageContainerComponent,
        // Directives
        CheckCapsLockDirective,
        ElementSizeDirective,
        HighContrastDirective,
        ResizedDirective,
        // Pipes
        CapitalizePipe,
        SafePipe
    ]
})
export class NgPapilionModule { }
