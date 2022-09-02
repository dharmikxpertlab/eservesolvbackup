import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Type2DeEnum } from 'src/api/models';
import { ORDER_TYPE_LABEL } from 'src/app/shared/order-type';
import { TimeService } from 'src/app/shared/services/time.service';

@Component({
  selector: 'app-order-type-badge',
  templateUrl: './order-type-badge.component.html',
  styleUrls: ['./order-type-badge.component.scss'],
})
export class OrderTypeBadgeComponent implements OnInit {

  @Input() order: any;
  readonly OrderType = Type2DeEnum;

  get orderType() {
    return _.find(ORDER_TYPE_LABEL, {
      key: this.order.type
    }).value;
  }

  constructor(public timeService: TimeService) { }

  ngOnInit() {}

}
