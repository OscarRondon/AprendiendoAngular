import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Products } from '../../Classes/Product';
import { ProductCartService } from '../produc-cart/product-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css','../../e-commerce-main/e-commerce-main.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product!: Product|undefined;

  constructor(private routerUrls: Router, private route: ActivatedRoute, private cartService: ProductCartService) { 
  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route.
    this.product = Products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    let itemAdded: boolean = false;
    try
    {
      itemAdded = this.cartService.addToCart(product);
      if(itemAdded)
      {
        alert('Your product has been added to the cart!');
        this.routerUrls.navigateByUrl("eCommerce");
      }
      else
      {
        alert('There was a problem adding Your product to the cart!');
      }

    }
    catch(ex)
    {
      console.error("eCommerce > Components > produc-cart > product-cart.service.ts > addToCart(): " + ex);
    }
    
  }

}
