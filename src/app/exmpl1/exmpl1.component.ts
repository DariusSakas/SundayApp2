import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exmpl1',
  templateUrl: './exmpl1.component.html',
  styleUrls: ['./exmpl1.component.scss'],
})
export class Exmpl1Component implements OnInit {
  cityArr: string[] = ['Vilnius', 'Kaunas', 'Klaipeda'];
  isSunday: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log('component initialized');
  }
}
