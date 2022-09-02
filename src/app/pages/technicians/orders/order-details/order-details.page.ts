import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeOrder, Order, RolesEnum, ServiceProviderUser, StatusEnum } from 'src/api/models';
import { ServiceProviderOrderSteps } from 'src/app/shared/components/order/order-status-stepper/order-status-stepper.config';
import { EmployeeFacadeService } from '../employee-facade.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  order: EmployeeOrder;
  serviceProvider: ServiceProviderUser;
  readonly RolesEnum = RolesEnum;
  readonly ServiceProviderOrderSteps = ServiceProviderOrderSteps;
  candidateID: string;

  get status() {
    if (this.order) {
      return this.order.status;
    }
  }

  get complete() {
    if (this.order) {
      return this.status === StatusEnum.Complete;
    }
    return false;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    public employeeService: EmployeeFacadeService,
  ) { }

  async ngOnInit() {
    const orderId = await this.activatedRoute.snapshot.params.order;
    this.order = await this.employeeService.getOrder(orderId);
  }

  async ionViewDidEnter() {
    this.candidateID = await this.activatedRoute.snapshot.params.id;
    if (this.candidateID) {
      this.employeeService.chooseEmployee(this.candidateID);
    }
  }

  async ionViewWillLeave() {
    this.employeeService.resetChosenEmployee();
  }

  async stateChange() {
    this.order = await this.employeeService.getOrder(this.order.id);
    this.performActionBasedOnState(this.order.status);
  }

  performActionBasedOnState(state) {

  }

}
