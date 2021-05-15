import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalculatorComponent } from './app-calculator.component';

describe('AppCalculatorComponent', () => {
  let component: AppCalculatorComponent;
  let fixture: ComponentFixture<AppCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
