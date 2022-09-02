import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-time-information-div',
  templateUrl: './order-time-information-div.component.html',
  styleUrls: ['./order-time-information-div.component.scss'],
})
export class OrderTimeInformationDivComponent implements OnInit {

  @Input() order: any;

  constructor() { }

  ngOnInit() {}

}
