import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertButton, AlertInput, ToastButton } from '@ionic/core';


@Injectable({
  providedIn: 'root'
})
export class IonicComponentTranslationService {

  constructor(public translate: TranslateService, ) { }

  public translator(str: string, interpolationMap?: any): Promise<string> {
    return this.translate.get(str, interpolationMap).toPromise();
  }

  public translateButton(button: string | AlertButton | ToastButton): Promise<string | AlertButton | ToastButton> {
    if (typeof button !== 'object') {
      return this.translator(button);
    }

    if (button.text) {
      return this.translator(button.text)
        .then((translated) => button.text = translated)
        .then(() => button);
    }

    return Promise.resolve(button);
  }

  public async translateInput(alertInputOptions: AlertInput): Promise<AlertInput> {
    if (alertInputOptions.label) {
      alertInputOptions.label = await this.translator(alertInputOptions.label);
    }

    if (alertInputOptions.placeholder) {
      alertInputOptions.placeholder = await this.translator(alertInputOptions.placeholder);
    }

    return alertInputOptions;
  }

  public toStandardTitle(str: string): string {
    const shouldNotTerminateWith = ['.', '?', '!'];

    const lastChar = str.trim().substr(-1);
    const found = shouldNotTerminateWith.findIndex((char) => {
      return lastChar === char;
    });

    if (found !== -1) {
      str = str.substring(0, str.length - 2);
    }

    return str;
  }

  public toStandardMessage(str: string): string {
    const allowedTerminatingChars = ['.', '?'];
    const defaultTerminatingChar = '.';

    const lastChar = str.trim().substr(-1);
    const found = allowedTerminatingChars.findIndex((char) => {
      return lastChar === char;
    });

    if (found === -1) {
      str += defaultTerminatingChar;
    }

    return str;
  }
}
