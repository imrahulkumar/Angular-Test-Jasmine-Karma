import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec1Component } from './lec1.component';

describe('Testing additional function', () => {
  let component: Lec1Component = new Lec1Component();
  let fixture: ComponentFixture<Lec1Component>;
   
  it('Testing addition function',()=>{

    expect(component.addition(10,20)).toBe(30)
  })
    



});
