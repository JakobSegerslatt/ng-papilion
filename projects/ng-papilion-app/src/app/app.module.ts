import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgPapilionModule } from 'ng-papilion';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgPapilionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
