import { Component } from '@angular/core';
import { CityProviderService } from './services/city-provider.service';
//@angular/core is decorator for component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SundayApp2';
  bestFoodEver: string = 'Kebab';
  description: string = 'lorem1 ipsum';

  cityService = new CityProviderService();
  cities: string[] = this.cityService.provideCities();
}
