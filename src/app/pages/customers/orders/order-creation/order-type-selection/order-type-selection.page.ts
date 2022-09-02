import { Component, OnInit } from '@angular/core';
import { OrderTypes } from '../order-creation.config';

@Component({
  selector: 'app-order-type-selection',
  templateUrl: './order-type-selection.page.html',
  styleUrls: ['./order-type-selection.page.scss'],
})
export class OrderTypeSelectionPage implements OnInit {

  readonly OrderTypes = OrderTypes;

  constructor() { }

  ngOnInit() {
  }

}
