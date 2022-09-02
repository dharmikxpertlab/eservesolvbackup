import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { ToastOptions, ToastButton } from '@ionic/core';
import { IonicComponentTranslationService } from './ionic-component-translation.service';

@Injectable({
  providedIn: 'root'
})
export class I18ToastService {

  constructor(
    private toastController: ToastController,
    private translate: IonicComponentTranslationService,
  ) { }

  public async create(options: ToastOptions, toastInterpolationMap?: any): Promise<HTMLIonToastElement> {
    if (options.header) {
      const interpolationMap = toastInterpolationMap ? toastInterpolationMap.header : {};
      options.header = await this.translate.translator(options.header, interpolationMap);
    }

    if (options.message) {
      const interpolationMap = toastInterpolationMap ? toastInterpolationMap.message : {};
      options.message = await this.translate.translator(options.message as string, interpolationMap);
    }

    if (options.buttons) {
      const localTranslator = (button) => this.translate.translateButton(button);
      const buttons = await Promise.all(options.buttons.map(localTranslator)) as ToastButton[];

      if (buttons) {
        options.buttons = buttons;
      }
    }

    return this.toastController.create(options);
  }

}
