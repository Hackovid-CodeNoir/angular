import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrchardListComponent } from './orchard-list/orchard-list.component';
import { OrchardItemComponent } from './orchard-item/orchard-item.component';

@NgModule({
  declarations: [OrchardListComponent, OrchardItemComponent],
  exports: [OrchardListComponent],
  imports: [CommonModule]
})
export class OrchardModule {}
