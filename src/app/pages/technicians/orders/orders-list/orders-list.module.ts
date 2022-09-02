import { NgModule } from '@angular/core';

import { OrdersListPageRoutingModule } from './orders-list-routing.module';

import { OrdersListPage } from './orders-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrdersListPageRoutingModule
  ],
  declarations: [OrdersListPage]
})
export class OrdersListPageModule {}
