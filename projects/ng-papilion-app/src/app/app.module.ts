import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NgPapilionModule } from 'ng-papilion';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,

        MatIconModule,
        MatCardModule,

        NgPapilionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
