import { NgModule } from '@angular/core';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    SharedModule,
    RegisterPageRoutingModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
