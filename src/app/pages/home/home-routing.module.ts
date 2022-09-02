import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalGuard } from '../auth/approval.guard';
import { AuthGuard } from '../auth/auth.guard';
import { HomeGuard } from '../auth/home.guard';
import { RoleGuard } from '../auth/role.guard';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [HomeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
