import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./locations-list/locations-list.module').then(m => m.LocationsListPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./location-edit/location-edit.module').then(m => m.LocationEditPageModule)
  },
  {
    path: ':location',
    loadChildren: () => import('./location-detail/location-detail.module').then(m => m.LocationDetailPageModule)
  },
  {
    path: ':location/edit',
    loadChildren: () => import('./location-edit/location-edit.module').then(m => m.LocationEditPageModule)
  },
  {
    path: ':location/machines',
    loadChildren: () => import('../machines/machines.module').then(m => m.MachinesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsPageRoutingModule {}
