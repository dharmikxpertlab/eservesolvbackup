import { NgModule } from '@angular/core';

import { OrderFormPageRoutingModule } from './order-form-routing.module';

import { OrderFormPage } from './order-form.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrderFormPageRoutingModule
  ],
  declarations: [OrderFormPage]
})
export class OrderFormPageModule {}
