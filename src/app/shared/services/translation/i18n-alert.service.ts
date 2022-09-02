import { Injectable } from '@angular/core';
import { AlertOptions, AlertButton } from '@ionic/core';
import { AlertController } from '@ionic/angular';

import { IonicComponentTranslationService } from './ionic-component-translation.service';
import { I18nAlertInterpolationMap } from 'src/app/models/translation';

@Injectable({
  providedIn: 'root'
})
export class I18nAlertService {

  constructor(public translate: IonicComponentTranslationService,
              private alertCtrl: AlertController) {
  }

  public async create(opts: AlertOptions, alertInterpolationMap?: I18nAlertInterpolationMap): Promise<HTMLIonAlertElement> {
    if (opts.header) {
      const interpolationMap = alertInterpolationMap ? alertInterpolationMap.title : {};
      opts.header = await this.translate.translator(opts.header, interpolationMap);
      opts.header = this.translate.toStandardTitle(opts.header);
    }

    if (opts.message) {
      const interpolationMap = alertInterpolationMap ? alertInterpolationMap.message : {};
      opts.message = await this.translate.translator(opts.message as string, interpolationMap);
      opts.message = this.translate.toStandardMessage(opts.message);
    }

    if (opts.subHeader) {
      const interpolationMap = alertInterpolationMap ? alertInterpolationMap.subTitle : {};
      opts.subHeader = await this.translate.translator(opts.subHeader, interpolationMap);
    }

    if (opts.buttons) {
      const localTranslator = (button) => this.translate.translateButton(button);
      const buttons = await Promise.all(opts.buttons.map(localTranslator)) as AlertButton[];

      if (buttons) {
        opts.buttons = buttons;
      }
    }

    if (opts.inputs) {
      const localTranslator = (input) => this.translate.translateInput(input);
      const inputs = await Promise.all(opts.inputs.map(localTranslator));

      if (inputs) {
        opts.inputs = inputs;
      }
    }

    return this.alertCtrl.create(opts);
  }

  public async quickAlert(header, message, handler: any = null) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler,
        },
      ],
    });

    return await alert.present();
  }

}
