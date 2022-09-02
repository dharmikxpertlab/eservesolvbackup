import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineEditPage } from './machine-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MachineEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineEditPageRoutingModule {}
