import { NgModule } from '@angular/core';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    SharedModule,
    ProfilePageRoutingModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: []
})
export class ProfilePageModule {}
