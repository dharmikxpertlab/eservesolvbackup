import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeOrder, Order, ServiceProviderUser } from 'src/api/models';
import { DashboardFacadeService } from '../../technicians/dashboard/dashboard-facade.service';
import * as _ from 'lodash';
import { OrderStatusSections } from './dashboard.config';
import { NotificationService } from 'src/app/shared/services/notifications.service';
import { NgxPermissionsObject, NgxPermissionsService } from 'ngx-permissions';
import { EmployeeOrderManager } from 'src/app/models/employee-order-manager';
import { OrderListSectionHeading } from '../orders/orders-list/orders-list.config';
import { loader } from 'src/app/shared/decorators/loader';
import { Subscription } from 'rxjs';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  orders: Order[] | EmployeeOrder[] | EmployeeOrderManager[];
  readonly OrderStatusSections = OrderStatusSections;
  serviceProvider: ServiceProviderUser;
  permissions: NgxPermissionsObject;
  readonly Section = OrderListSectionHeading;
  orderNotificationSubscription: Subscription;

  get isAvailable() {
    return this.serviceProvider && this.serviceProvider.profile?.available;
  }

  constructor(
    public dashboardService: DashboardFacadeService,
    public router: Router,
    public notifications: NotificationService
  ) { }

  @completionNotifier('', false)
  async refreshOrder(event) {
    setTimeout(() => {
      this.fetchOrders();
      event.target.complete();
    }, 1000);
  }

  async ngOnInit() {
    await this.notifications.init();
    this.orderNotificationSubscription = this.notifications.orderNotificationReceived.subscribe((orderReceived) => {
      if (orderReceived) {
        this.fetchOrders();
      }
    });
  }

  @loader()
  async ionViewDidEnter() {
    await this.fetchOrders();
    this.serviceProvider = await this.dashboardService.getServiceProviderUserInfo();
  }

  async toggleAvailability() {
    this.serviceProvider.profile.available = !this.serviceProvider.profile.available;
    this.serviceProvider = await this.dashboardService.updateServiceProviderProfile({
      id: this.serviceProvider.id,
      profile: {
        available: this.serviceProvider.profile.available
      }
    }) as unknown as ServiceProviderUser;
  }

  async fetchOrders() {
    this.orders = await this.dashboardService.getEmployeeOrders();
  }

  ionViewDidLeave() {
    if (this.orderNotificationSubscription) {
      this.orderNotificationSubscription.unsubscribe();
    }
  }
}
