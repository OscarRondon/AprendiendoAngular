import { Component, OnInit } from '@angular/core';
import { Products } from '../../Classes/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css','../../e-commerce-main/e-commerce-main.component.css']
})
export class ProductListComponent implements OnInit {

  myproducts = Products;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    alert('The product has been shared!');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale ');
  }

}
