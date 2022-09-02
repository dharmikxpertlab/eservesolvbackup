import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/api/models';
import { TimeService } from 'src/app/shared/services/time.service';
import { EmployeeFacadeService } from '../../employee-facade.service';
import * as _ from 'lodash';
import { Distance } from 'src/app/shared/distance';

@Component({
  selector: 'app-order-detail-item-large',
  templateUrl: './order-detail-item-large.component.html',
  styleUrls: ['./order-detail-item-large.component.scss'],
})
export class OrderDetailItemLargeComponent implements OnInit {

  @Input() order: any;
  company: Company;
  readonly Distance = Distance;

  constructor(
    public employeeService: EmployeeFacadeService
  ) { }

  async ngOnInit() {
    this.company = await this.employeeService.getCompanyFromOrder(this.order);
  }

}
