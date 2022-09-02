import { NgModule } from '@angular/core';

import { SearchPageRoutingModule } from './search-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SearchPageRoutingModule
  ],
  declarations: []
})
export class SearchPageModule {}
