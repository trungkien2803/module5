import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Output() addProduct = new EventEmitter<Product>();
  createProduct(value) {
    this.addProduct.emit(value);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
