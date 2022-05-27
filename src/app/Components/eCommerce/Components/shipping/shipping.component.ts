import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../produc-cart/product-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css', '../../e-commerce-main/e-commerce-main.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts: any;

  constructor(private cartService: ProductCartService) { }

  ngOnInit(): void {
    try
    {
      this.shippingCosts = this.cartService.getShippingPrices();
      console.log(this.shippingCosts);
    }
    catch(ex)
    {
      console.error("eCommerce > Components > shipping > shipping.component.ts > ngOnInit(): " + ex);
    }
  }

}
