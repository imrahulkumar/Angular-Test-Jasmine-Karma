import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lec1Component } from './component/lec1/lec1.component';

const routes: Routes = [
  { path: "lec1", component: Lec1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
