import { Component, Input, OnInit } from '@angular/core';
import { EmployeeOrder, Order, RolesEnum } from 'src/api/models';
import { Currency } from 'src/app/shared/currency';

@Component({
  selector: 'app-order-completion-card',
  templateUrl: './order-completion-card.component.html',
  styleUrls: ['./order-completion-card.component.scss'],
})
export class OrderCompletionCardComponent implements OnInit {

  @Input() order: Order | EmployeeOrder;
  readonly Currency = Currency;
  @Input() userType: RolesEnum = RolesEnum.Customer;
  readonly RolesEnum = RolesEnum;

  constructor() { }

  ngOnInit() {}

}
