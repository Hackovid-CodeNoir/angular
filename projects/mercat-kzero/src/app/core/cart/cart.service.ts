import { Injectable } from '@angular/core';
import { Product } from '../product/product-interface';
import { SelectionModel } from '@angular/cdk/collections';

export interface CartItem {
  amount: number;
  product: Product;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: SelectionModel<CartItem> = new SelectionModel<CartItem>(true);

  constructor() {}

  public updateCart(productToUpdate: Product, amount: number) {
    const cartItem = this.isActiveOnCart(productToUpdate);
    if (cartItem) {
      this.updateAmount(cartItem, amount);
    } else {
      this.addCartItem(productToUpdate, amount);
    }
  }

  private isActiveOnCart(product: Product): CartItem {
    return this.cartItems.selected.find((cartItem) => cartItem.product.id === product.id);
  }

  private updateAmount(cartItem: CartItem, amount: number): void {
    if (+amount < 1) {
      this.cartItems.deselect(cartItem);
    } else {
      cartItem.amount = amount;
    }
  }

  private addCartItem(product: Product, amount: number): void {
    this.cartItems.select({ product, amount });
  }

  private removeFromCart(product): void {}
}
