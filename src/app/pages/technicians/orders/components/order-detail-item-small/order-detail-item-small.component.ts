import { Component, Input, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { RolesEnum } from 'src/api/models';
import { Currency } from 'src/app/shared/currency';

@Component({
  selector: 'app-order-detail-item-small',
  templateUrl: './order-detail-item-small.component.html',
  styleUrls: ['./order-detail-item-small.component.scss'],
})
export class OrderDetailItemSmallComponent implements OnInit {

  @Input() order: any;
  readonly Currency = Currency;
  readonly RolesEnum = RolesEnum;

  constructor(
    public permssionService: NgxPermissionsService
  ) { }

  ngOnInit() {}

}
