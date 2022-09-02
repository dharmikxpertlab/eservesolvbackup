import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechniciansPage } from './technicians.page';

const routes: Routes = [
  {
    path: '',
    component: TechniciansPage
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then( m => m.ManagerPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechniciansPageRoutingModule {}
