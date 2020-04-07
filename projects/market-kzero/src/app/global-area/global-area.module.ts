import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalAreaComponent } from './global-area/global-area.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderContactComponent } from './header-contact/header-contact.component';
import { HeaderSearchComponent } from './header-search/header-search.component';

@NgModule({
  declarations: [GlobalAreaComponent, HeaderContactComponent, HeaderSearchComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  exports: [GlobalAreaComponent],
})
export class GlobalAreaModule {}
