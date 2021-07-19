import {Component, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  arr: Product[] = [];

  formCreate = false;
  formEdit = false;
  productCurrentIndex = -1;

  constructor() {
  }

  ngOnInit() {
  }

  showFormCreate() {
    this.formCreate = !this.formCreate;
  }

  showFormEdit(index) {
    this.formEdit = !this.formEdit;
    if (this.formEdit) {
      this.productCurrentIndex = index;
    } else {
      this.productCurrentIndex = -1;
    }
  }

  createProduct(value) {
    this.products.push(value);
  }

  deleteProduct(index) {
    this.products.splice(index, 1);
  }

}
