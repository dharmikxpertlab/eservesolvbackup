import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswordVerifiedPage } from './reset-password-verified.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordVerifiedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordVerifiedPageRoutingModule {}
