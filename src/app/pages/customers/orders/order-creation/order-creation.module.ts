import { NgModule } from '@angular/core';

import { OrderCreationPageRoutingModule } from './order-creation-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrderCreationPageRoutingModule
  ],
  declarations: [
  ]
})
export class OrderCreationPageModule {}
