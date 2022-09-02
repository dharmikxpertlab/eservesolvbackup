import { NgModule } from '@angular/core';

import { SupportPageRoutingModule } from './support-routing.module';

import { SupportPage } from './support.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SupportPageRoutingModule
  ],
  declarations: [SupportPage]
})
export class SupportPageModule {}
