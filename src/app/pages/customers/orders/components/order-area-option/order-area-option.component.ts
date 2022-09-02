import { Component, Input, OnInit } from '@angular/core';
import { OrderArea } from '../../order-creation/order-creation.config';

@Component({
  selector: 'app-order-area-option',
  templateUrl: './order-area-option.component.html',
  styleUrls: ['./order-area-option.component.scss'],
})
export class OrderAreaOptionComponent implements OnInit {

  @Input() orderArea: OrderArea;

  constructor() { }

  ngOnInit() {}

}
