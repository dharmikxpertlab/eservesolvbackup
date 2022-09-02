import { Component, Input, OnInit } from '@angular/core';
import { ORDER_TYPE_LABEL } from 'src/app/shared/order-type';
import * as _ from 'lodash';
import { CUSTOMER_ORDER_STATUS_LABELS } from '../order-status-stepper/order-status-stepper.config';
import { Order, StatusEnum } from 'src/api/models';
import { OrderAreas, OrderTypes } from 'src/app/pages/customers/orders/order-creation/order-creation.config';

@Component({
  selector: 'app-order-small-card',
  templateUrl: './order-small-card.component.html',
  styleUrls: ['./order-small-card.component.scss'],
})
export class OrderSmallCardComponent implements OnInit {

  @Input() order: any;
  readonly StatusEnum = StatusEnum;

  get orderType() {
    return _.find(ORDER_TYPE_LABEL, {
      key: this.order.type
    }).value;
  }

  get orderStatus() {
    return _.find(CUSTOMER_ORDER_STATUS_LABELS, {
      key: this.order.status
    }).value;
  }

  get route() {
    if (this.order.status === StatusEnum.Draft) {
      const orderArea = _.find(OrderAreas, {
        value: this.order.area
      }).id;

      const orderType = _.find(OrderTypes, {
        value: this.order.type
      }).id;
      return ['/customers/orders/new', orderType, 'department', orderArea, 'order', this.order.id];
    }
    return ['/customers/orders/order', this.order.id];
  }

  constructor() { }

  ngOnInit() {}

}
