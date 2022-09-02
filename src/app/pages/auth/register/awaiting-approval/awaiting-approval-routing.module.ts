import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwaitingApprovalPage } from './awaiting-approval.page';

const routes: Routes = [
  {
    path: '',
    component: AwaitingApprovalPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwaitingApprovalPageRoutingModule {}
