import { Component, OnInit } from '@angular/core';
import { Location, Order, StatusEnum } from 'src/api/models';
import { NotificationService } from 'src/app/shared/services/notifications.service';
import { OrderListSectionHeading } from '../orders/orders-list/orders-list.config';
import { DashboardFacadeService } from './dashboard-facade.service';
import { OrderStatusSections } from './dashboard.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  orders: Order[];
  locations: Location[] = [];
  readonly OrderStatusSections = OrderStatusSections;
  readonly Section = OrderListSectionHeading;

  constructor(
    public dashboardService: DashboardFacadeService,
    public notifications: NotificationService
  ) { }

  async ionViewDidEnter() {
    this.orders = await this.dashboardService.getOrders() as Order[];
    this.locations = await this.dashboardService.getLocations();
  }

  async ngOnInit() {
    await this.notifications.init();
  }

}
