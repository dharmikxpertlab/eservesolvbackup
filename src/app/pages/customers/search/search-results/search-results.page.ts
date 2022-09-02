import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderCandidate } from 'src/api/models';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { SearchFacadeService } from '../search-facade.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  orderId: string;
  candidates: any[];

  constructor(
    public activatedRoute: ActivatedRoute,
    public searchService: SearchFacadeService,
    public router: Router,
  ) { }

  @loader()
  @completionNotifier('', false)
  async ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params.order;
    this.candidates = await this.searchService.getCandidates(+this.orderId) as unknown as any[];
  }

  @loader()
  async applyFilter(filter) {
    this.candidates = await this.searchService.getCandidates(+this.orderId, filter) as unknown as any[];
  }

  async selectCandidates() {
    const isConfirmed = await this.searchService.openConfirmationPopover();
    if (isConfirmed) {
      await this.submitSelectedCandidates();
      await this.router.navigate(['/customers/dashboard'], {
        replaceUrl: true
      });
    }
  }

  @loader()
  @completionNotifier('', false)
  async submitSelectedCandidates() {
    await this.searchService.selectCandidates(+this.orderId);
  }
}
