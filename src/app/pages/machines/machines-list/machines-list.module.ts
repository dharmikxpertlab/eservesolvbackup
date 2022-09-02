import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinesListPageRoutingModule } from './machines-list-routing.module';

import { MachinesListPage } from './machines-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MachinesListItemComponent } from '../component/machines-list-item/machines-list-item.component';

@NgModule({
  imports: [
    SharedModule,
    MachinesListPageRoutingModule
  ],
  declarations: [
    MachinesListPage,
    MachinesListItemComponent
  ]
})
export class MachinesListPageModule {}
