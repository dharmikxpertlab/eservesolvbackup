import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderAreaSelectionPage } from './order-area-selection.page';

const routes: Routes = [
  {
    path: '',
    component: OrderAreaSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderAreaSelectionPageRoutingModule {}
