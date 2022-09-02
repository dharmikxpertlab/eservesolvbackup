import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordVerifiedPageRoutingModule } from './reset-password-verified-routing.module';

import { ResetPasswordVerifiedPage } from './reset-password-verified.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ResetPasswordVerifiedPageRoutingModule
  ],
  declarations: [ResetPasswordVerifiedPage]
})
export class ResetPasswordVerifiedPageModule {}
