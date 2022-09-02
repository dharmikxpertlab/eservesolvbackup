import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: ':order/results',
    loadChildren: () => import('./search-results/search-results.module').then(m => m.SearchResultsPageModule)
  },
  {
    path: ':order/results/:result',
    loadChildren: () => import('./search-result-details/search-result-details.module').then(m => m.SearchResultDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
