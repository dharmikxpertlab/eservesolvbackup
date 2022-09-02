import { NgModule } from '@angular/core';


import { OrderDetailsPageRoutingModule } from './order-details-routing.module';

import { OrderDetailsPage } from './order-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrderDetailsPageRoutingModule
  ],
  declarations: [OrderDetailsPage]
})
export class OrderDetailsPageModule {}
