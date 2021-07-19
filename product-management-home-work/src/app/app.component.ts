import {Component} from '@angular/core';
import {Product} from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-management-home-work';
  products: Product[] = [
    {
      id: 1,
      name: 'Vinamilk',
      price: 7000
    },
    {
      id: 2,
      name: 'Vinamilk',
      price: 7000
    },
    {
      id: 3,
      name: 'Vinamilk',
      price: 7000
    },
  ];

  addProduct(event) {
    this.products = event;
  }
}
