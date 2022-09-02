import { Component, Input, OnInit } from '@angular/core';
import { OrderCandidate } from 'src/api/models';
import { Currency } from 'src/app/shared/currency';
import { Distance } from 'src/app/shared/distance';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {

  @Input() serviceProvider: any;
  readonly Currency = Currency;
  readonly Distance = Distance;
  @Input() detail = false;

  get distance() {
    if (this.serviceProvider && (this.serviceProvider.distance != null)) {
      return this.serviceProvider.distance.toFixed(1).toString();
    }

    return null;
  }

  constructor() { }

  ngOnInit() {}

}
