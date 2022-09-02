import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./order-type-selection/order-type-selection.module').then(m => m.OrderTypeSelectionPageModule)
  },
  {
    path: ':kind/department',
    loadChildren: () => import('./order-area-selection/order-area-selection.module').then(m => m.OrderAreaSelectionPageModule)
  },
  {
    path: ':kind/department/:department',
    loadChildren: () => import('./order-form/order-form.module').then( m => m.OrderFormPageModule)
  },
  {
    path: ':kind/department/:department/order/:order',
    loadChildren: () => import('./order-form/order-form.module').then( m => m.OrderFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderCreationPageRoutingModule {}
