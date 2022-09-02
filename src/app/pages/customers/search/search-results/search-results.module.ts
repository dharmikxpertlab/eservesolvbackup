import { NgModule } from '@angular/core';

import { SearchResultsPageRoutingModule } from './search-results-routing.module';

import { SearchResultsPage } from './search-results.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SearchResultsPageRoutingModule
  ],
  declarations: [SearchResultsPage]
})
export class SearchResultsPageModule {}
