import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

const routes = [{ path: '', component: MainContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContentRoutingModule {}
