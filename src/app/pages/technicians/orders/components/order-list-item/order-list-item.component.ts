import { Component, Input, OnInit } from '@angular/core';
import { Company, Order } from 'src/api/models';
import { TimeService } from 'src/app/shared/services/time.service';
import { EmployeeFacadeService } from '../../employee-facade.service';
import { Type2DeEnum as OrderTypeEnum } from 'src/api/models';
import * as _ from 'lodash';
import { ORDER_TYPE_LABEL } from 'src/app/shared/order-type';
import { Distance } from 'src/app/shared/distance';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss'],
})
export class OrderListItemComponent implements OnInit {

  @Input() order: any;
  company: Company;
  readonly OrderType = OrderTypeEnum;
  readonly Distance = Distance;

  get orderType() {
    return _.find(ORDER_TYPE_LABEL, {
      key: this.order.type
    }).value;
  }

  constructor(
    public employeeService: EmployeeFacadeService,
    public timeService: TimeService
  ) { }

  async ngOnInit() {
    this.company = await this.employeeService.getCompanyFromOrder(this.order);
  }

}
