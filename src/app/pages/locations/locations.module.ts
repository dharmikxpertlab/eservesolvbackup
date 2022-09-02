import { NgModule } from '@angular/core';

import { LocationsPageRoutingModule } from './locations-routing.module';

import { LocationCardComponent } from './components/location-card/location-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LocationsPageRoutingModule,
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class LocationsPageModule {}
