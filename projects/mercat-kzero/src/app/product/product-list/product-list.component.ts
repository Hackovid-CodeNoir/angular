import { Component } from '@angular/core';
import { sellers } from './sellers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public sellers = sellers;
}
