import { NgModule } from '@angular/core';

import { TechniciansPageRoutingModule } from './technicians-routing.module';

import { TechniciansPage } from './technicians.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TechniciansPageRoutingModule
  ],
  declarations: [TechniciansPage]
})
export class TechniciansPageModule {}
