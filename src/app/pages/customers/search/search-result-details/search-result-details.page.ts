import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderCandidate, ServiceProviderUser } from 'src/api/models';
import { Currency } from 'src/app/shared/currency';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { Distance } from 'src/app/shared/distance';
import { SearchFacadeService } from '../search-facade.service';

@Component({
  selector: 'app-search-result-details',
  templateUrl: './search-result-details.page.html',
  styleUrls: ['./search-result-details.page.scss'],
})
export class SearchResultDetailsPage implements OnInit {

  serviceProvider: OrderCandidate;
  orderId: string;
  candidateId: string;
  readonly Currency = Currency;
  readonly Distance = Distance;

  constructor(
    public activatedRoute: ActivatedRoute,
    public searchService: SearchFacadeService,
  ) { }

  @loader()
  @completionNotifier('', false)
  async ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params.order;
    this.candidateId = this.activatedRoute.snapshot.params.result;

    this.serviceProvider = await this.searchService.getCandidate(+this.orderId, +this.candidateId);
  }

}
