import { NgModule } from '@angular/core';

import { ServiceProviderPageRoutingModule } from './service-provider-routing.module';

import { ServiceProviderPage } from './service-provider.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ServiceProviderPageRoutingModule
  ],
  declarations: [ServiceProviderPage]
})
export class ServiceProviderPageModule {}
