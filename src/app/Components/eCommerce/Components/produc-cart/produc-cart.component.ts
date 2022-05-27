import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//
import { Product } from '../../Classes/Product';
import { ProductCartService } from './product-cart.service';

@Component({
  selector: 'app-produc-cart',
  templateUrl: './produc-cart.component.html',
  styleUrls: ['./produc-cart.component.css', '../../e-commerce-main/e-commerce-main.component.css']
})
export class ProducCartComponent implements OnInit {

  items!: Product[];
  checkoutForm!: FormGroup;

  constructor(
    private cartService: ProductCartService,
    private oFormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    try {
      this.items = this.cartService.getItems();
      this.checkoutForm = this.oFormBuilder.group({
        name: '',
        address: ''
      });
    }
    catch (ex) {
      console.error("eCommerce > Components > produc-cart > product-cart.component.ts > ngOnInit(): " + ex);
    }
  }

  onSubmit(): void {
    try {
      // Process checkout data here
      this.items = this.cartService.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
    }
    catch (ex) {
      console.error("eCommerce > Components > produc-cart > product-cart.component.ts > onSubmit(): " + ex);
    }

  }

}
