import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: 'registration-successful',
    loadChildren: () => import('./registration-successful/registration-successful.module').then( m => m.RegistrationSuccessfulPageModule)
  },
  {
    path: 'awaiting-approval',
    loadChildren: () => import('./awaiting-approval/awaiting-approval.module').then( m => m.AwaitingApprovalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
