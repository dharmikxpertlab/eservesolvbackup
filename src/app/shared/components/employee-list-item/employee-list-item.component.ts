import { Component, Input, OnInit } from '@angular/core';
import { Order, ServiceProviderUser } from 'src/api/models';
import { Currency } from '../../currency';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss'],
})
export class EmployeeListItemComponent implements OnInit {

  @Input() serviceProvider: ServiceProviderUser;
  readonly Currency = Currency;

  constructor() { }

  ngOnInit() {}

}
