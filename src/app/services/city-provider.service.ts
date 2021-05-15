import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityProviderService {
  provideCities(): string[] {
    return ['Vilnius', 'Kaunas', 'Klaipeda'];
  }
  constructor() {}
}
