import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() addProduct = new EventEmitter<Product[]>();

  createProduct(value) {
    this.products.push(value);
    this.addProduct.emit(this.products);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
