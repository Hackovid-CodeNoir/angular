import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { Product } from '../../core/product/product-interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-product-item',
  templateUrl: './select-product-item.component.html',
  styleUrls: ['./select-product-item.component.scss']
})
export class SelectProductItemComponent implements OnChanges {
  @Input() public product: Product;
  public amount: FormControl;

  public ngOnChanges(): void {
    this.amount = new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(this.product.availableStock)
    ]);
  }

  public decrement() {
    if (+this.amount.value > 0) {
      this.amount.setValue(+this.amount.value - 1);
    }
  }

  public increment() {
    if (this.amount.value < this.product.availableStock) {
      this.amount.setValue(+this.amount.value + 1);
    }
  }
}
