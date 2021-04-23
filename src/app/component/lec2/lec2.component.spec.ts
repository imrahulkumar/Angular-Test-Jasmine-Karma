import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lec2Component } from './lec2.component';

describe('Lec2Component', () => {
  let component: Lec2Component;
  let fixture: ComponentFixture<Lec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lec2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
