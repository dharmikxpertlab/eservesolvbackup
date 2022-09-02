import { Injectable } from '@angular/core';
import { Location } from 'src/api/models';
import { Order } from 'src/api/models/order';
import { LocationsService, OrdersService } from 'src/api/services';

@Injectable({
  providedIn: 'root'
})
export class DashboardFacadeService {

  constructor(
    public orderService: OrdersService,
    public locationService: LocationsService,
  ) { }

  async getOrders(): Promise<Order[]> {
    return await (await this.orderService.ordersList()).toPromise() as Order[];
  }

  async getLocations(): Promise<Location[]> {
    return await (await this.locationService.locationsList()).toPromise() as Location[];
  }
}
