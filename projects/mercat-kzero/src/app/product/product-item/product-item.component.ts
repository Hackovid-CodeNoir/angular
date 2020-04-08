import { Component, Input } from '@angular/core';
import { sellers } from '../product-list/sellers';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() seller: any;
  public sellers = sellers;

  ratingClicked: number;

  ratingComponentClick(clickObj: any): void {
    const item = this.sellers.find((seller: any) => seller.id === clickObj.itemId);
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
    }
  }
}
