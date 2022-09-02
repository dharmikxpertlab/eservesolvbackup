import { Component, Input, OnInit } from '@angular/core';
import { Order, Type2DeEnum } from 'src/api/models';
import { TimeService } from 'src/app/shared/services/time.service';
import * as _ from 'lodash';
import { ServiceTimeOptionMultiplicationFactor, ServiceTimeOptions, ServiceTimeTypeEnum } from 'src/app/pages/customers/orders/order-creation/order-creation.config';

@Component({
  selector: 'app-order-emergency-until-text',
  templateUrl: './order-emergency-until-text.component.html',
  styleUrls: ['./order-emergency-until-text.component.scss'],
})
export class OrderEmergencyUntilTextComponent {
  @Input() order: Order;
  readonly OrderType = Type2DeEnum;

  get untilTextLabel() {
    return this.order.type + '_UNTIL_LABEL';
  }

  get emergencyTill() {
    let format;

    if (this.order.type === this.OrderType.PredictiveMaintenance) {
      format = _.find(ServiceTimeOptionMultiplicationFactor, {
        type: ServiceTimeTypeEnum.Date
      }).momentTimeFormat;
    } else {
      format = _.find(ServiceTimeOptionMultiplicationFactor, {
        type: ServiceTimeTypeEnum.Hours
      }).momentTimeFormat;
    }

    return this.timeService.formatTime(this.order.needs_fix_before, format);
  }

  constructor(
    public timeService: TimeService,
  ) { }

}
