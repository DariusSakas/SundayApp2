import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exmpl1Component } from './exmpl1/exmpl1.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    Exmpl1Component,
    NavigationBarComponent,
    ProductListComponent,
    OneWayBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
