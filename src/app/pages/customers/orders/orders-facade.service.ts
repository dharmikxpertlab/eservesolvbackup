import { Injectable } from '@angular/core';
import {
  CredentialOptions,
  Location,
  Machine,
  Order,
  OrderDescriptionDocument,
  OrderDescriptionDocumentTypeEnum,
  PatchedOrder,
  PatchedOrderDescriptionDocument,
  ServiceProviderUser
} from 'src/api/models';
import { CredentialsService, LocationsService, MachinesService, OrdersService } from 'src/api/services';
import { CredentialsFacadeService } from 'src/app/shared/services/credentials-facade.service';
import { ProfileFacadeService } from '../../auth/profile/profile-facade.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersFacadeService {

  constructor(
    public ordersService: OrdersService,
    public locationService: LocationsService,
    public machineService: MachinesService,
    public profileService: ProfileFacadeService,
    public credentialFacadeService: CredentialsFacadeService,
  ) { }

  async getOrders(): Promise<Order[]> {
    return await (await this.ordersService.ordersList()).toPromise() as Order[];
  }

  async getOrder(orderId: number): Promise<Order> {
    return await (await this.ordersService.ordersRetrieve({
      id: orderId
    })).toPromise();
  }

  async saveOrder(order: PatchedOrder): Promise<Order> {
    if (order.id) {
      return this.updateOrder(order);
    } else {
      return this.createOrder(order);
    }
  }

  async createOrder(order: PatchedOrder): Promise<Order> {
    return await (await this.ordersService.ordersCreate$Json({
      body: order as Order
    })).toPromise();
  }

  async updateOrder(order: PatchedOrder): Promise<Order> {
    return await (await this.ordersService.ordersPartialUpdate$Json({
      id: order.id,
      body: order
    })).toPromise();
  }

  async addDocument(order: Order, file: File): Promise<OrderDescriptionDocument> {
    let documentType: OrderDescriptionDocumentTypeEnum;
    switch (file.type) {
      case 'application/pdf': {
        documentType = OrderDescriptionDocumentTypeEnum.Document;
        break;
      }

      case 'image/svg+xml': {
        documentType = OrderDescriptionDocumentTypeEnum.Image;
        break;
      }

      case 'image/png': {
        documentType = OrderDescriptionDocumentTypeEnum.Image;
        break;
      }

      case 'image/jpeg': {
        documentType = OrderDescriptionDocumentTypeEnum.Image;
        break;
      }

      case 'image/jpg': {
        documentType = OrderDescriptionDocumentTypeEnum.Image;
        break;
      }

      case 'image/gif': {
        documentType = OrderDescriptionDocumentTypeEnum.Image;
        break;
      }

      default: {
        documentType = OrderDescriptionDocumentTypeEnum.Document;
        break;
      }
    }

    const document: PatchedOrderDescriptionDocument = {
      document: file as any,
      name: file.name as any,
      type: documentType
    };

    return await (await this.ordersService.ordersDocumentsCreate$FormData({
      order_pk: order.id.toString(),
      body: document as OrderDescriptionDocument
    })).toPromise();
  }

  async deleteDocument(orderId: number, documentId: number): Promise<void> {
    return await (await this.ordersService.ordersDocumentsDestroy({
      id: documentId,
      order_pk: orderId.toString()
    })).toPromise();
  }

  async getLocations(): Promise<Location[]> {
    return await (await this.locationService.locationsList()).toPromise() as Location[];
  }

  async getMachines(locationId: number): Promise<Machine[]> {
    return await (await this.machineService.machinesList({
      location: locationId
    })).toPromise() as Machine[];
  }

  async getCredentials(): Promise<CredentialOptions> {
    return await this.credentialFacadeService.getCredentials();
  }

  async getUserById(userId: string): Promise<ServiceProviderUser> {
    return await this.profileService.getUserById(userId);
  }

  async cancelOrder(order: Order) {
    return await (await this.ordersService.ordersCancelRetrieve({
      id: order.id
    })).toPromise();
  }
}
