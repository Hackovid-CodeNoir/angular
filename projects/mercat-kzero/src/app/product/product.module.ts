import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, RatingStarsComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [ProductListComponent],
})
export class ProductModule {}
