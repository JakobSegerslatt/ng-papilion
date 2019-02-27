import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MessageContainerComponent } from './components/message-container/message-container.component';


@NgModule({
    declarations: [
        MessageContainerComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
    ],
    providers: [],
    exports: [
        MessageContainerComponent
    ]
})
export class NgPapilionModule { }
