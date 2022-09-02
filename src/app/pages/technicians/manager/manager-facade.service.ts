import { Injectable } from '@angular/core';
import { Order } from 'src/api/models';
import { AccountService, EmployeesService } from 'src/api/services';

@Injectable({
  providedIn: 'root'
})
export class ManagerFacadeService {

  constructor(
    public employeeService: EmployeesService,
    public accountService: AccountService
  ) { }

  async getEmployeeOrders() {
    return await (await this.employeeService.employeesOrdersList()).toPromise() as Order[];
  }

  async getEmployees() {
    const managerUserID = (await (await this.accountService.accountUserMeRetrieve()).toPromise()).id;
    return await (await this.accountService.accountUserEmployeesRetrieve({
      id: managerUserID
    })).toPromise().then((response: any) => {
      if (response.employees) {
        response.employees.map(employee => {
          if (employee.profile && employee.profile.location_description) {
            employee.location = employee.profile.location_description.name;
          }
        });

        return {
          employees: response.employees.filter(employee => employee.id !== managerUserID && employee.profile)
        };
      }

      return response;
    });
  }

  async getAccountOwner() {
    return (await this.accountService.accountUserMeRetrieve()).toPromise();
  }

  async togglePushNotifications(userId: string, enabled: boolean) {
    return await (await this.accountService.accountUserPartialUpdate$FormData({
      id: userId,
      body: {
        receive_employee_order_match_notification: enabled
      }
    })).toPromise();
  }
}
