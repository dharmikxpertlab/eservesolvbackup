import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderFeedbackPageRoutingModule } from './order-feedback-routing.module';

import { OrderFeedbackPage } from './order-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderFeedbackPageRoutingModule
  ],
  declarations: [OrderFeedbackPage]
})
export class OrderFeedbackPageModule {}
