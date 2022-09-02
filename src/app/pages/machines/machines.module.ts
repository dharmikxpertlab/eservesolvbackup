import { NgModule } from '@angular/core';

import { MachinesPageRoutingModule } from './machines-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MachinesPageRoutingModule
  ],
  declarations: []
})
export class MachinesPageModule {}
