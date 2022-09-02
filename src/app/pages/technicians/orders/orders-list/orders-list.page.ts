import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeOrder, Order, RolesEnum } from 'src/api/models';
import { EmployeeOrderManager } from 'src/app/models/employee-order-manager';
import { loader } from 'src/app/shared/decorators/loader';
import { EmployeeFacadeService } from '../employee-facade.service';
import { OrderListSectionHeading, OrderListSections } from './orders-list.config';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.page.html',
  styleUrls: ['./orders-list.page.scss'],
})
export class OrdersListPage {

  orders: Order[] | EmployeeOrder[] | EmployeeOrderManager[];
  readonly RolesEnum = RolesEnum;
  section: string;
  readonly OrderListSections = OrderListSections;

  constructor(
    public employeeService: EmployeeFacadeService,
    public activatedRoute: ActivatedRoute,
  ) { }

  @loader()
  async ionViewDidEnter() {
    this.section = this.activatedRoute.snapshot.params.section || OrderListSectionHeading.Requests;
    this.orders = await this.employeeService.getEmployeeOrders();
  }

}
