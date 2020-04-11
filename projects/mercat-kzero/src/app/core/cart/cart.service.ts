import { Injectable } from '@angular/core';
import { Product } from '../product/product-interface';

export interface CartItems {
  amount: string;
  item: Product;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: CartItems[];

  constructor() {}

  public updateCart(productToUpdate: Product, amount: number) {
    console.log(amount, productToUpdate);
  }
}
