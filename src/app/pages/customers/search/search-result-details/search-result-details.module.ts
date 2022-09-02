import { NgModule } from '@angular/core';

import { SearchResultDetailsPageRoutingModule } from './search-result-details-routing.module';

import { SearchResultDetailsPage } from './search-result-details.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    SharedModule,
    SearchResultDetailsPageRoutingModule,
    NgPipesModule
  ],
  declarations: [SearchResultDetailsPage]
})
export class SearchResultDetailsPageModule {}
