import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { Product, Products } from '../../Classes/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  items: Product[] = [];

  constructor(
    private oHttpClient: HttpClient
  ) { }

  addToCart(product: Product): boolean {
    let itemAdded: boolean = false;
    try
    {
      this.items.push(product);
      itemAdded = true;
    }
    catch(ex)
    {
      console.error("eCommerce > Components > produc-cart > product-cart.service.ts > addToCart(): " + ex);
      itemAdded = false;
    }
    return itemAdded;
  }

  removeFromCart(productId: number)
  {
    let indexProduct = -1;
    try
    { 
      indexProduct = this.items.findIndex(x => x.id == productId);
      this.items.splice(indexProduct, 1);
    }
    catch(ex)
    {
      console.error("eCommerce > Components > produc-cart > product-cart.service.ts > removeFromCart(): " + ex);
    }
  }

  itemExist(productId: number): boolean{

    let indexProduct = -1;
    let itemExist: boolean = false;
    try
    { 
      indexProduct = this.items.findIndex(x => x.id == productId);
      if(indexProduct >= 0)
        itemExist = true;
    }
    catch(ex)
    {
      console.error("eCommerce > Components > produc-cart > product-cart.service.ts > itemExist(): " + ex);
    }
    return itemExist;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    let shippings = undefined;
    try
    { 
      shippings = this.oHttpClient.get<{type: string, price: number}[]>('/assets/eCommerce/JsonFiles/shipping.json');
    }
    catch(ex)
    {
      console.error("eCommerce > Components > produc-cart > product-cart.service.ts > getShippingPrices(): " + ex);
    }
    return shippings
  }
  
}
