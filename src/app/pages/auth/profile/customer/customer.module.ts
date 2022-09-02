import { NgModule } from '@angular/core';

import { CustomerPageRoutingModule } from './customer-routing.module';

import { CustomerPage } from './customer.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CustomerPageRoutingModule
  ],
  declarations: [CustomerPage]
})
export class CustomerPageModule {}
