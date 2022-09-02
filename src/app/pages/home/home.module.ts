import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
