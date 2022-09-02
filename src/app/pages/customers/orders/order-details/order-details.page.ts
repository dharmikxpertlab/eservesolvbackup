import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order, RolesEnum, ServiceProviderProfile, ServiceProviderUser, StatusEnum } from 'src/api/models';
import { CustomerOrderSteps } from 'src/app/shared/components/order/order-status-stepper/order-status-stepper.config';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { OrdersFacadeService } from '../orders-facade.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage {

  order: Order;
  serviceProvider: ServiceProviderUser;
  readonly CustomerOrderSteps = CustomerOrderSteps;

  constructor(
    private activatedRoute: ActivatedRoute,
    public orderService: OrdersFacadeService,
    public router: Router
  ) { }

  get accepted() {
    if (this.order && this.order.accepted_at) {
      return true;
    }

    return false;
  }

  get cancelled() {
    if (this.order && this.order.status === StatusEnum.Cancelled) {
      return true;
    }

    return false;
  }

  async ionViewDidEnter() {
    const orderId = await this.activatedRoute.snapshot.params.order;
    this.fetchOrder(orderId);
  }

  @completionNotifier('', false)
  async refreshOrder(event) {
    setTimeout(() => {
      this.fetchOrder(this.order.id);

      event.target.complete();
    }, 1000);
  }

  async fetchOrder(orderId?: number) {
    this.order = null;
    this.order = await this.orderService.getOrder(orderId);
    if (this.order.service_provider) {
      this.serviceProvider = await this.orderService.getUserById(this.order.service_provider.id);
    }
  }

  @loader()
  @completionNotifier('Order cancelled!', true)
  async cancelOrder() {
    await this.orderService.cancelOrder(this.order);
    await this.fetchOrder(this.order.id);
  }
}
