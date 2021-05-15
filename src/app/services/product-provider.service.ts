import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductProviderService {
  products = [
    {
      productName: 'Kebabas',
      productPadaziukas: 'Cesnakinis',
      city: 'Vilnius',
    },
    {
      productName: 'Kebabas',
      productPadaziukas: 'Pikantiskas',
      city: 'Kaunas',
    },
    { productName: 'Pita', productPadaziukas: 'Mixas', city: 'Utena' },
  ];

  provideProducts(): object[] {
    return this.products;
  }
  constructor() {}
}
