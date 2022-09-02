import { NgModule } from '@angular/core';

import { OrderAreaSelectionPageRoutingModule } from './order-area-selection-routing.module';

import { OrderAreaSelectionPage } from './order-area-selection.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrderAreaSelectionPageRoutingModule
  ],
  declarations: [OrderAreaSelectionPage]
})
export class OrderAreaSelectionPageModule {}
