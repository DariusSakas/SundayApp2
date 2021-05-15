import { Component } from '@angular/core';
//@angular/core is decorator for component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SundayApp2';
  bestFoodEver: string = 'Kebab';
}
