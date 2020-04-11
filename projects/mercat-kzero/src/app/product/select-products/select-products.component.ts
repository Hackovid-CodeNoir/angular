import { Component } from '@angular/core';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.scss']
})
export class SelectProductsComponent {
  value = 0;
  price = 1.37;

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }
}
