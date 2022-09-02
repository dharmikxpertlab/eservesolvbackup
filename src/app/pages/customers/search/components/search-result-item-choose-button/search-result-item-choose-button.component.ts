import { Component, Input, OnInit } from '@angular/core';
import { OrderCandidate } from 'src/api/models';
import { SearchFacadeService } from '../../search-facade.service';

@Component({
  selector: 'app-search-result-item-choose-button',
  templateUrl: './search-result-item-choose-button.component.html',
  styleUrls: ['./search-result-item-choose-button.component.scss'],
})
export class SearchResultItemChooseButtonComponent implements OnInit {

  @Input() candidate: OrderCandidate;
  @Input() expand = 'block';

  constructor(
    public searchService: SearchFacadeService
  ) { }

  ngOnInit() {}

  async choose() {
    this.searchService.chooseCandidate(this.candidate.id);
  }

}
