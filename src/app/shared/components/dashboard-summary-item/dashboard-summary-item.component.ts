import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-summary-item',
  templateUrl: './dashboard-summary-item.component.html',
  styleUrls: ['./dashboard-summary-item.component.scss'],
})
export class DashboardSummaryItemComponent implements OnInit {

  @Input() items: any[];
  @Input() routerLinkUrl;
  @Input() heading: string;
  @Input() buttonText: string;

  constructor() { }

  ngOnInit() {
  }

}
