import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessageContainerComponent } from './components/message-container/message-container.component';


@NgModule({
    declarations: [
        MessageContainerComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [MessageContainerComponent]
})
export class NgPapilionModule { }
