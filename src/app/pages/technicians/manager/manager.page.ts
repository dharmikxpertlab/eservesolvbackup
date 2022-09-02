import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employees, Order, User, UserProfile } from 'src/api/models';
import { loader } from 'src/app/shared/decorators/loader';
import { ManagerFacadeService } from './manager-facade.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {

  orders: Order[];
  employees: Employees;
  filter: string;
  accountOwner: UserProfile;

  constructor(
    public managerService: ManagerFacadeService,
    public changeDetectorRef: ChangeDetectorRef
  ) { }

  @loader()
  async ngOnInit() {
    this.orders = await this.managerService.getEmployeeOrders();
    this.employees = await this.managerService.getEmployees();
    this.accountOwner = await this.managerService.getAccountOwner();
  }

  setFilter($event) {
    if ($event) {
      this.filter = $event.value;
    }

    this.changeDetectorRef.detectChanges();
  }

  async togglePushNotifications() {
    await this.managerService.togglePushNotifications(this.accountOwner.id, this.accountOwner.receive_employee_order_match_notification);
  }
}
