import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AwaitingApprovalPage } from './awaiting-approval.page';
import { AwaitingApprovalPageRoutingModule } from './awaiting-approval-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AwaitingApprovalPageRoutingModule,
  ],
  declarations: [
    AwaitingApprovalPage,
  ],
})
export class AwaitingApprovalPageModule {}
