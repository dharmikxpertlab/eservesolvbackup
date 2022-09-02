import { NgModule } from '@angular/core';

import { LocationsListPageRoutingModule } from './locations-list-routing.module';

import { LocationsListPage } from './locations-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LocationsListPageRoutingModule
  ],
  declarations: [LocationsListPage]
})
export class LocationsListPageModule {}
