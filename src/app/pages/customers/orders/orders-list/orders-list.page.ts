import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/api/models';
import { OrdersFacadeService } from '../orders-facade.service';
import { OrderListSectionHeading, OrderListSections } from './orders-list.config';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.page.html',
  styleUrls: ['./orders-list.page.scss'],
})
export class OrdersListPage {

  orders: Order[];
  readonly OrderListSections = OrderListSections;
  section: string;

  constructor(
    public orderService: OrdersFacadeService,
    public activatedRoute: ActivatedRoute
  ) { }

  async ionViewDidEnter() {
    this.section = this.activatedRoute.snapshot.params.section || OrderListSectionHeading.Draft;
    this.orders = await this.orderService.getOrders();
  }

}
