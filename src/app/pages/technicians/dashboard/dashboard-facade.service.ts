import { Injectable } from '@angular/core';
import { Order, PatchedUser, ServiceProviderUser, UserProfile } from 'src/api/models';
import { AccountService, OrdersService } from 'src/api/services';
import { EmployeeFacadeService } from '../orders/employee-facade.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardFacadeService {

  constructor(
    public accountService: AccountService,
    public orderService: OrdersService,
    public employeeService: EmployeeFacadeService
  ) { }

  async getServiceProviderUserInfo() {
    return await (await this.accountService.accountUserMeRetrieve()).toPromise().then((response: ServiceProviderUser) => {
      return response;
    });
  }

  async updateServiceProviderProfile(user: any) {
    return await (await this.accountService.accountUserPartialUpdate$Json({
      id: user.id,
      body: user
    })).toPromise();
  }

  async getEmployeeOrders() {
    return await this.employeeService.getEmployeeOrders();
  }
}
