import { Component } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/translation/language.service';
import * as lang from 'src/app/shared/lang';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  languages = lang.availableLanguages;
  selectedLanguage = lang.sysOptions.systemLanguage;

  constructor(
    private languageService: LanguageService,
  ) {}

  applyLanguage() {
    this.languageService.setLanguage(this.selectedLanguage);
  }

  openUrl(url) {
    Browser.open({
      url
    });
  }
}
