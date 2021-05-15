import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exmpl1Component } from './exmpl1.component';

describe('Exmpl1Component', () => {
  let component: Exmpl1Component;
  let fixture: ComponentFixture<Exmpl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exmpl1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exmpl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
