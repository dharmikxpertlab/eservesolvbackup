import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { BehaviorSubject } from 'rxjs';
import { Company, EmployeeOrder, Order, RolesEnum } from 'src/api/models';
import { CompaniesService, EmployeesService } from 'src/api/services';
import { EmployeeOrderManager } from 'src/app/models/employee-order-manager';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFacadeService {

  employeeSelectedByManager = new BehaviorSubject<any>(null);

  constructor(
    public employeeService: EmployeesService,
    public companyService: CompaniesService,
    public permissions: NgxPermissionsService,
    public authService: AuthService
  ) { }

  async getEmployeeOrders() {
    const response = await (await this.employeeService.employeesOrdersList()).toPromise() as Order[];

    /**
     * If employee is a manager, then we duplicate their orders
     * based on number of service candidates in that order.
     */

    if (await this.permissions.hasPermission(RolesEnum.SpEmpManager)) {
      const userId = await (await this.authService.getUserInfo()).id;
      const managersOrders: EmployeeOrderManager[] = [];

      for (const order of response) {
        if (!order.candidate_service_providers || order.candidate_service_providers.length === 0) {
          (order as any).candidate = null;
          managersOrders.push(Object.assign({}, order as any));
        } else {
          for (const candidate of order.candidate_service_providers) {

            if (userId === (candidate as any).id) {
              (candidate as any).loggedInUser = true;
            }

            (order as any).candidate = candidate;

            managersOrders.push(Object.assign({}, order as any));
          }
        }
      }

      return managersOrders;
    } else if (await this.permissions.hasPermission(RolesEnum.SpEmployee)) {
      const userId = await (await this.authService.getUserInfo()).id;
      const employeeOrders: EmployeeOrderManager[] = [];

      for (const order of response) {
        if (!order.candidate_service_providers || order.candidate_service_providers.length === 0) {
          (order as any).candidate = null;
          employeeOrders.push(Object.assign({}, order as any));
        } else {
          for (const candidate of order.candidate_service_providers) {

            if (userId === (candidate as any).id) {
              (candidate as any).loggedInUser = true;
              (order as any).candidate = candidate;
            }

          }

          employeeOrders.push(Object.assign({}, order as any));
        }
      }

      return employeeOrders;
    }

    return response;
  }

  async getOrder(orderId: number): Promise<EmployeeOrder> {
    return await (await this.employeeService.employeesOrdersRetrieve({
      id: orderId
    })).toPromise();
  }

  async getCompanyFromOrder(order: Order): Promise<Company> {
    return order.location_description.company;
  }

  async chooseEmployee(employeeId: string) {
    this.employeeSelectedByManager.next(employeeId);
  }

  async resetChosenEmployee() {
    this.employeeSelectedByManager.next(null);
  }

}
