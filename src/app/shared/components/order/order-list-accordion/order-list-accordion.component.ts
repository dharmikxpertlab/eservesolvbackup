import { Component, Input, OnInit } from '@angular/core';
import { EmployeeOrder, Order, RolesEnum } from 'src/api/models';
import { EmployeeOrderManager } from 'src/app/models/employee-order-manager';
import { OrderListSection } from '../../../../pages/customers/orders/orders-list/orders-list.config';

@Component({
  selector: 'app-order-list-accordion',
  templateUrl: './order-list-accordion.component.html',
  styleUrls: ['./order-list-accordion.component.scss'],
})
export class OrderListAccordionComponent implements OnInit {
  @Input() mode: OrderListSection;
  @Input() expanded = false;
  @Input() orders: Order[] | EmployeeOrder[] | EmployeeOrderManager[];
  readonly RolesEnum = RolesEnum;
  @Input() user = RolesEnum.Customer;

  constructor() { }

  ngOnInit() {
  }

  toggleExpansion() {
    this.expanded = !this.expanded;
  }
}
