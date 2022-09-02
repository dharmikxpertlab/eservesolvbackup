import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineDetailPageRoutingModule } from './machine-detail-routing.module';

import { MachineDetailPage } from './machine-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineDetailPageRoutingModule
  ],
  declarations: [MachineDetailPage]
})
export class MachineDetailPageModule {}
