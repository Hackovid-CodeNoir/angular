import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductListComponent } from '../../product/product-list/product-list.component';
import { Producer } from '../../core/producer/producer.interface';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  constructor(private matDialog: MatDialog) {}

  public onMarkerClicked(producer: Producer): void {
    this.matDialog.open(ProductListComponent, {
      data: producer
    });
  }
}
