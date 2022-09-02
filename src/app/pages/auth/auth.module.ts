import { NgModule } from '@angular/core';

import { AuthPageRoutingModule } from './auth-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    AuthPageRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class AuthPageModule {}
