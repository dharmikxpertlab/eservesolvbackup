import { NgModule } from '@angular/core';

import { LocationEditPageRoutingModule } from './location-edit-routing.module';

import { LocationEditPage } from './location-edit.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    SharedModule,
    LocationEditPageRoutingModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: [LocationEditPage]
})
export class LocationEditPageModule {}
