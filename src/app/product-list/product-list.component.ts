import { Component } from '@angular/core';
import { ProductProviderService } from '../services/product-provider.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor() {}
  productList = new ProductProviderService();
  products = this.productList.provideProducts();
}
