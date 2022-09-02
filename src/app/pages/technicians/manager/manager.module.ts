import { NgModule } from '@angular/core';

import { ManagerPageRoutingModule } from './manager-routing.module';

import { ManagerPage } from './manager.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ManagerPageRoutingModule
  ],
  declarations: [ManagerPage]
})
export class ManagerPageModule {}
