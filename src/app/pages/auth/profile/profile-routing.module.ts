import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'service-provider',
    canActivate: [AuthGuard],
    loadChildren: () => import('./service-provider/service-provider.module').then( m => m.ServiceProviderPageModule)
  },
  {
    path: 'service-provider/:serviceProviderUserId',
    canActivate: [AuthGuard],
    loadChildren: () => import('./service-provider/service-provider.module').then( m => m.ServiceProviderPageModule)
  },
  {
    path: 'customer',
    canActivate: [AuthGuard],
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
