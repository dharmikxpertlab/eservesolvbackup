import { Component, Input, OnInit } from '@angular/core';
import { OrderType } from '../../order-creation/order-creation.config';

@Component({
  selector: 'app-order-type-option',
  templateUrl: './order-type-option.component.html',
  styleUrls: ['./order-type-option.component.scss'],
})
export class OrderTypeOptionComponent implements OnInit {

  @Input() orderType: OrderType;

  constructor() { }

  ngOnInit() {}

}
