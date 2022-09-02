import { Component, OnInit } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';
import { APP_VERSION } from 'src/app/shared/version';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  deviceInfo: DeviceInfo;
  readonly APP_VERSION = APP_VERSION;

  constructor() { }

  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
  }

  openUrl(url) {
    window.open(url, '_blank');
  }
}
