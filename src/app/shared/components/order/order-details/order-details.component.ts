import { Component, Input, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Company, EmployeeOrder, Order, RolesEnum } from 'src/api/models';

@Component({
  selector: 'app-order-details-component',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {

  @Input() order: Order | EmployeeOrder;
  @Input() userType: RolesEnum = RolesEnum.Customer;
  readonly RolesEnum = RolesEnum;

  constructor(
    public permissionsService: NgxPermissionsService,
  ) { }

}
