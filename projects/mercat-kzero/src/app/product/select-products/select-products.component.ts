import { Component } from '@angular/core';
import { seller } from './seller';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.scss']
})
export class SelectProductsComponent {
  seller = seller;
  value = 0;
  currentValue: number;
  precio = 1.37;

  plusValue() {
    this.value++;
  }

  minusValue() {
    if (this.value > 0) {
      this.value--;
    }
  }
}
