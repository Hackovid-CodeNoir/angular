import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ProductModule } from '../product/product.module';
import { MapViewModule } from '../map-view/map-view.module';
import { MainContentRoutingModule } from './main-content-routing.module';
import { DescriptionModule } from '../description/description.module';

@NgModule({
  declarations: [MainContentComponent],
  imports: [CommonModule, ProductModule, MapViewModule, MainContentRoutingModule, DescriptionModule]
})
export class MainContentModule {}
