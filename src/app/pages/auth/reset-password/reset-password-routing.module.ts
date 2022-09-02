import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswordPage } from './reset-password.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordPage
  },
  {
    path: 'verify',
    loadChildren: () => import('./reset-password-verified/reset-password-verified.module').then( m => m.ResetPasswordVerifiedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordPageRoutingModule {}
