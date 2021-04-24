import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lec1Component } from './component/lec1/lec1.component';
import { Lec2Component } from './component/lec2/lec2.component';
import { ProductService } from './component/lec1/product.service';

@NgModule({
  declarations: [
    AppComponent,
    Lec1Component,
    Lec2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
