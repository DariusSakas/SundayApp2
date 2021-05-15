import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './app-calculator.component.html',
  styleUrls: ['./app-calculator.component.scss'],
})
export class AppCalculatorComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  screenString: number = 0;

  numbers: number[] = [];
  actions: string[] = [];

  mathString: string = '';
  //functionalitty
  enterSymbol(calculatorForm: NgForm, symbolToEnter: number): void {
    this.screenString = symbolToEnter;
  }
  reset() {
    this.screenString = 0;
  }
  enterAction(actionToEnter: string) {
    this.actions.push(actionToEnter);
    this.numbers.push(this.screenString);
  }
  buildMathString() {
    for (let i = 0; i < this.actions.length; i++) {
      this.mathString = this.mathString + this.numbers[i] + this.actions[i];
    }
    this.mathString = this.mathString + this.numbers;
  }
}
