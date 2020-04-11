import { Component } from '@angular/core';
import { ProductService } from '../../core/product/product.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.scss']
})
export class SelectProductsComponent {
  public constructor(private productService: ProductService) {}
}
