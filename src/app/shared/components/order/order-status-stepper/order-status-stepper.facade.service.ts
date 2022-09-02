import { Injectable } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { EmployeeOrder, Order, RolesEnum, StatusEnum } from 'src/api/models';
import { EmployeesService, OrdersService } from 'src/api/services';
import { ConfirmOrderAcceptComponent } from 'src/app/pages/technicians/components/confirm-order-accept/confirm-order-accept.component';
import { EmployeeFacadeService } from 'src/app/pages/technicians/orders/employee-facade.service';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { SignatureComponent } from '../../signature/signature.component';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusStepperService {

  constructor(
    public employeeService: EmployeesService,
    public orderService: OrdersService,
    public modalController: ModalController,
    public permissionService: NgxPermissionsService,
    public employeeFacade: EmployeeFacadeService,
    public popoverController: PopoverController,
    public translateService: TranslateService,
  ) { }

  async getRole(): Promise<RolesEnum> {
    const permissions = await this.permissionService.getPermissions();
    if (Object.keys(permissions).indexOf(RolesEnum.Customer) > -1) {
      return RolesEnum.Customer;
    } else if (Object.keys(permissions).indexOf(RolesEnum.SpEmployee) > -1) {
      return RolesEnum.SpEmployee;
    }

    return RolesEnum.Customer;
  }

  async openConfirmationPopover() {
    const popover = await this.popoverController.create({
      component: ConfirmOrderAcceptComponent,
      cssClass: 'confirm-search-candidates-popover',
      translucent: false
    });
    await popover.present();

    const { data } = await popover.onDidDismiss();
    if (data && data.approved) {
      return true;
    } else {
      return false;
    }
  }

  async confirmAndacceptOrder(order: Order | EmployeeOrder) {
    if (!await this.openConfirmationPopover()) {
      throw Error('Cannot proceed without accepting binding order!');
    }

    await this.acceptOrder(order);
  }

  @loader()
  async acceptOrder(order: Order | EmployeeOrder) {
    return await (await this.employeeService.employeesOrdersAcceptRetrieve({
      id: order.id,
      employee: this.employeeFacade.employeeSelectedByManager.getValue()
    })).toPromise().catch(error => {
      if (error && error.error) {
        error.error.detail = this.translateService.instant('ORDER_ALREADY_ACCEPTED');
        throw error;
      }
    });
  }

  async cancelOrder(order: Order | EmployeeOrder) {
    return await (await this.orderService.ordersCancelRetrieve({
      id: order.id
    })).toPromise();
  }

  async retrieveOrder(order: Order | EmployeeOrder) {
    return await (await this.employeeService.employeesOrdersRetrieve({
      id: order.id
    })).toPromise();
  }

  async setOrderStatus(order: Order | EmployeeOrder, status: StatusEnum, file = null) {
    const requestBody = {
      status
    };
    switch (status) {
      case StatusEnum.Accepted: {
        return await this.confirmAndacceptOrder(order);
      }

      case StatusEnum.Cancelled: {
        return await this.cancelOrder(order);
      }

      case StatusEnum.Complete: {
        await this.getSignature(order);
        return;
      }
    }

    return await (await this.employeeService.employeesOrdersStatusPartialUpdate$FormData({
      id: order.id,
      body: requestBody,
      employee: this.employeeFacade.employeeSelectedByManager.getValue()
    })).toPromise().catch(error => {
      if (error && error.error) {
        error.error.detail = this.translateService.instant('ORDER_STATUS_SET_ALREADY');
        throw error;
      }
    });
  }

  @completionNotifier('', false, 'Order pin does not match.')
  async getSignature(order: Order | EmployeeOrder) {
    const modal = await this.modalController.create({
      component: SignatureComponent
    });

    (modal).present();

    const result = await modal.onDidDismiss();
    if (result.data) {
      await this.completeOrder(order, result.data.image, result.data.otp, StatusEnum.Complete);
    }
  }

  @loader()
  async completeOrder(order: Order | EmployeeOrder, signature: string, orderPin: string, status: StatusEnum) {
    return await (await this.employeeService.employeesOrdersStatusPartialUpdate$FormData({
      employee: this.employeeFacade.employeeSelectedByManager.getValue(),
      id: order.id,
      body: {
        status,
        signature,
        order_pin: orderPin
      }
    })).toPromise();
  }


  isOrderAccepted(order: Order) {
    return order.accepted_at;
  }

  isOrderWorkCompleted(order: Order) {
    return order.work_completed_at;
  }

  isItemState(item, state) {
    return item.orderState === state;
  }

}
