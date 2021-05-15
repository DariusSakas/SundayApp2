import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exmpl1Component } from './exmpl1/exmpl1.component';

@NgModule({
  declarations: [
    AppComponent,
    Exmpl1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
