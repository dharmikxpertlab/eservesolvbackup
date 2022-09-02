import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Config } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { AccountService } from 'src/api/services';
import * as lang from 'src/app/shared/lang';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(
    public translateService: TranslateService,
    public authService: AuthService,
    public config: Config,
  ) { }

  async saveLanguage(languageCode: string) {
    await Storage.set({
      key: 'lang',
      value: languageCode,
    });
  }

  async getLanguage(): Promise<string> {
    const { value } = await Storage.get({ key: 'lang'});
    return value;
  }

  async setLanguage(languageCode: string = null): Promise<string> {
    const language = languageCode || await this.getLanguage() || lang.defaultLanguage;

    if (language) {
      await this.translateService.use(language).toPromise();
      lang.sysOptions.systemLanguage = language;
      moment.locale(`${language}-${language}`);
      this.saveLanguage(language);
      this.updateUserLanguagePrefs(language);
      this.config.set('backButtonText', this.translateService.instant('Back'));
    }

    return language;
  }

  async updateUserLanguagePrefs(language) {
    await this.authService.updateLanguage(language);
  }
}
