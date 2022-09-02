import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./machines-list/machines-list.module').then(m => m.MachinesListPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./machine-edit/machine-edit.module').then( m => m.MachineEditPageModule)
  },
  {
    path: ':machine',
    loadChildren: () => import('./machine-detail/machine-detail.module').then(m => m.MachineDetailPageModule)
  },
  {
    path: ':machine/edit',
    loadChildren: () => import('./machine-edit/machine-edit.module').then(m => m.MachineEditPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinesPageRoutingModule {}
