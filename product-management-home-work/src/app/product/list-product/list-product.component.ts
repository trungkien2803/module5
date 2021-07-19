import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor() { }

  ngOnInit() {
  }

}
