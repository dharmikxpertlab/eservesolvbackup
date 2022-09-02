import { NgModule } from '@angular/core';

import { OrdersPageRoutingModule } from './orders-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgPipesModule } from 'ngx-pipes';


@NgModule({
  imports: [
    SharedModule,
    OrdersPageRoutingModule,
  ],
  declarations: []
})
export class OrdersPageModule {}
