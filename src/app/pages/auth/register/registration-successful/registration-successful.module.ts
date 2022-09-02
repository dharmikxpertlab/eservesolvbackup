import { NgModule } from '@angular/core';

import { RegistrationSuccessfulPageRoutingModule } from './registration-successful-routing.module';

import { RegistrationSuccessfulPage } from './registration-successful.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RegistrationSuccessfulPageRoutingModule
  ],
  declarations: [RegistrationSuccessfulPage]
})
export class RegistrationSuccessfulPageModule {}
