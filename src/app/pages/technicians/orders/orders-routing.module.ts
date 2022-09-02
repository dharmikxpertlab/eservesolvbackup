import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./orders-list/orders-list.module').then(m => m.OrdersListPageModule)
  },
  {
    path: ':section',
    loadChildren: () => import('./orders-list/orders-list.module').then(m => m.OrdersListPageModule)
  },
  {
    path: 'order/:order',
    loadChildren: () => import('./order-details/order-details.module').then(m => m.OrderDetailsPageModule)
  },
  {
    path: 'order/:order/:employee',
    loadChildren: () => import('./order-details/order-details.module').then(m => m.OrderDetailsPageModule)
  },
  {
    path: 'order/:order/feedback',
    loadChildren: () => import('./order-feedback/order-feedback.module').then(m => m.OrderFeedbackPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPageRoutingModule {}
