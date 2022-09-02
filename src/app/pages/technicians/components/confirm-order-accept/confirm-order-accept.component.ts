import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-order-accept',
  templateUrl: './confirm-order-accept.component.html',
  styleUrls: ['./confirm-order-accept.component.scss'],
})
export class ConfirmOrderAcceptComponent implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

}
