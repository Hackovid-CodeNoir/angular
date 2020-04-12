import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { SelectProductsComponent } from './select-products/select-products.component';
import { SelectProductItemComponent } from './select-product-item/select-product-item.component';
import { SiteProductorComponent } from './site-productor/site-productor.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    RatingStarsComponent,
    SelectProductsComponent,
    SelectProductItemComponent,
    SiteProductorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  exports: [ProductListComponent, SelectProductsComponent]
})
export class ProductModule {}
