import { NgModule } from '@angular/core';

import { MachineEditPageRoutingModule } from './machine-edit-routing.module';

import { MachineEditPage } from './machine-edit.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MachineEditPageRoutingModule
  ],
  declarations: [MachineEditPage]
})
export class MachineEditPageModule {}
