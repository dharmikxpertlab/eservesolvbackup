import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderTypeSelectionPage } from './order-type-selection.page';

const routes: Routes = [
  {
    path: '',
    component: OrderTypeSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderTypeSelectionPageRoutingModule {}
