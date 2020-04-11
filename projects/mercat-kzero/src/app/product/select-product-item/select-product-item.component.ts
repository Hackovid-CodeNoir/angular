import { Component, Input } from '@angular/core';
import { Product } from '../../core/product/product-interface';

@Component({
  selector: 'app-select-product-item',
  templateUrl: './select-product-item.component.html',
  styleUrls: ['./select-product-item.component.scss']
})
export class SelectProductItemComponent {
  @Input() public product: Product;
  value = 0;

  increment() {
    if (this.value < this.product.availableStock) {
      this.value++;
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }
}
