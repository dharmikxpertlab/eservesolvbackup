import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderAreas } from '../order-creation.config';

@Component({
  selector: 'app-order-area-selection',
  templateUrl: './order-area-selection.page.html',
  styleUrls: ['./order-area-selection.page.scss'],
})
export class OrderAreaSelectionPage implements OnInit {

  selectedKind: string;
  readonly OrderAreas = OrderAreas;

  constructor(
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.selectedKind = this.activatedRoute.snapshot.params.kind;
  }

}
