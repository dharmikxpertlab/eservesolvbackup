import { Injectable, NgZone } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ActionPerformed, PushNotifications, PushNotificationSchema, Token } from '@capacitor/push-notifications';

import { FCM } from '@capacitor-community/fcm';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { RolesEnum } from 'src/api/models';
import { AccountService } from 'src/api/services';
import { Device } from '@capacitor/device';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  orderNotificationReceived = new BehaviorSubject<boolean>(false);
  notificationsList = [];

  constructor(
    public router: Router,
    public permissionService: NgxPermissionsService,
    public toastController: ToastController,
    public account: AccountService,
    private ngZone: NgZone,
    private translateService: TranslateService,
  ) { }

  async setupListeners() {
    PushNotifications.addListener(
      'registration',
      async (token: Token) => {
        await FCM.setAutoInit({ enabled: true });
        const fcmToken = await (await FCM.getToken()).token;
        await this.registerWithAppBackend(fcmToken).catch((error) => {
          console.log('something wrong during registration');
        });
      },
    );

    PushNotifications.addListener('registrationError', (error: any) => {
     console.log(error);
    });

    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
      this.ngZone.run(() => {
        this.handleForegroundNotificationData(notification);
      });
    });

    PushNotifications.addListener('pushNotificationActionPerformed', (action: ActionPerformed) => {
      if (action.notification.data) {
        this.ngZone.run(() => {
          this.handleBackgroundNotificationData(action.notification.data);
        });
      }
    });
  }

  async init() {
    if (!Capacitor.isNativePlatform()) {
      return;
    }

    await PushNotifications.requestPermissions().then(async (result) => {
      if (result.receive) {
        // Register with Apple / Google to receive push via APNS/FCM
        await PushNotifications.register();
        this.setupListeners();
      } else {
        console.log('Permission Denied for Push Notification');
      }
    });
  }

  async handleBackgroundNotificationData(data) {
    this.redirectToOrderPage(data);
  }

  async handleForegroundNotificationData(notification: PushNotificationSchema) {
    if (this.notificationsList.indexOf(notification.id) > -1) {
      console.log('Duplicate notification');
      return;
    } else {
      this.notificationsList.push(notification.id);
    }

    this.orderNotificationReceived.next(true);
    const toast = await this.toastController.create({
      header: notification.title,
      message: notification.body,
      cssClass: 'notification-toast',
      buttons: [
        {
          text: this.translateService.instant('OK'),
          handler: () => {
            this.redirectToOrderPage(notification.data);
          },
          role: 'cancel'
        }
      ]
    });

    toast.present();
    const element = document.querySelector('.notification-toast');
    element.shadowRoot.querySelector('.toast-header').setAttribute('style', 'font-weight: bold; font-size: 1.4em');
    element.shadowRoot.querySelector('.toast-button-inner').setAttribute('style', 'font-weight: bold');
  }

  async redirectToOrderPage(data) {
    JSON.stringify(data);
    if (!data.order) {
      return;
    }

    const permissions = await this.permissionService.getPermissions();

    if (Object.keys(permissions).indexOf(RolesEnum.Customer) > -1) {
      this.router.navigate(['/customers', 'orders', 'order', data.order]);
    } else {
      this.router.navigate(['/technicians', 'orders', 'order', data.order]);
    }
  }

  async registerWithAppBackend(fcmToken: string) {
    const deviceInfo = await Device.getInfo();
    const deviceId = await (await Device.getId()).uuid;
    await (await this.account.accountUserDevicesCreate$Json({
      body: {
        device_id: deviceId,
        registration_id: fcmToken,
        type: deviceInfo.platform as any
      } as any
    })).toPromise();
  }
}
