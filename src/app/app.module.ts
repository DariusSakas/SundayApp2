import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exmpl1Component } from './exmpl1/exmpl1.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { AppCalculatorComponent } from './app-calculator/app-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    Exmpl1Component,
    NavigationBarComponent,
    ProductListComponent,
    OneWayBindingComponent,
    ContactFormComponent,
    AppCalculatorComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
