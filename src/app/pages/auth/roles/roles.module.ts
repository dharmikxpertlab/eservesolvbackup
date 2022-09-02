import { NgModule } from '@angular/core';

import { RolesPageRoutingModule } from './roles-routing.module';

import { RolesPage } from './roles.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RolesPageRoutingModule
  ],
  declarations: [RolesPage]
})
export class RolesPageModule {}
