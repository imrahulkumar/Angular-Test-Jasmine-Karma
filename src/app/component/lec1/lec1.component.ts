import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lec1',
  templateUrl: './lec1.component.html',
  styleUrls: ['./lec1.component.css']
})
export class Lec1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addition(num1:number, num2:number){
      return num1 + num2
  }

}
