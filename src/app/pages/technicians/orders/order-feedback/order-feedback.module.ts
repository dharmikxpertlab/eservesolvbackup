import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderFeedbackPageRoutingModule } from './order-feedback-routing.module';

import { OrderFeedbackPage } from './order-feedback.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrderFeedbackPageRoutingModule
  ],
  declarations: [OrderFeedbackPage]
})
export class OrderFeedbackPageModule {}
