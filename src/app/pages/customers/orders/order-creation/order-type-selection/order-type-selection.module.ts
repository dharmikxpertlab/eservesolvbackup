import { NgModule } from '@angular/core';

import { OrderTypeSelectionPage } from './order-type-selection.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderTypeSelectionPageRoutingModule } from './order-type-selection-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OrderTypeSelectionPageRoutingModule,
  ],
  declarations: [
    OrderTypeSelectionPage
  ]
})
export class OrderTypeSelectionPageModule {}
