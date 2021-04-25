import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lec1Component } from './component/lec1/lec1.component';
import { Lec2Component } from './component/lec2/lec2.component';

const routes: Routes = [
  {path:"",redirectTo:"lec1",pathMatch:"full"},
  { path: "lec1", component: Lec1Component },
  { path: "add", component: Lec2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
