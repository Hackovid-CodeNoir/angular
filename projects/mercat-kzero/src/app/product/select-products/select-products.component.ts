import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../core/product/product.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectProductsComponent implements OnInit {
  public panelOpenState = false;

  public constructor(public productService: ProductService) {}

  public ngOnInit(): void {}
}
