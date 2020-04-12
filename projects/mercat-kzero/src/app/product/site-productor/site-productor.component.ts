import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/product/product.service';
import { productsMock } from '../../core/product/product-mock';

@Component({
  selector: 'app-site-productor',
  templateUrl: './site-productor.component.html',
  styleUrls: ['./site-productor.component.scss']
})
export class SiteProductorComponent implements OnInit {
  tipo: any;
  panelOpenState = false;
  public constructor(public productService: ProductService) {}

  ngOnInit(): void {
    productsMock.forEach((product) => {
      this.tipo = product.typeOfProduct;
    });
    console.log(this.tipo);
  }
}
