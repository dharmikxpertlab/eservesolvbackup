import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderFeedbackPage } from './order-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: OrderFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderFeedbackPageRoutingModule {}
