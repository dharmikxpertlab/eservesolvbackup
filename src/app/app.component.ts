import { Component } from '@angular/core';

import { SplashScreen } from '@capacitor/splash-screen';
import { Config, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/services/auth.service';
import { DecoratorService } from './shared/services/decorator.service';
import { NotificationService } from './shared/services/notifications.service';
import { LanguageService } from './shared/services/translation/language.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public labels = [];
  isLoggedIn = false;

  constructor(
    private platform: Platform,
    private languageService: LanguageService,
    public authService: AuthService,
    public config: Config,
    public translateService: TranslateService,
    public decoratorService: DecoratorService
  ) {
    this.initialiseApp();
  }

  async initialiseApp() {
    await this.platform.ready();
    SplashScreen.hide();

    if (environment.name === 'e2e') {
      await this.languageService.setLanguage('en');
    } else {
      await this.languageService.setLanguage();
    }

    await this.authService.init();

    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

    // Add or remove the "dark" class based on if the media query matches
    function toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
      document.body.classList.toggle('light', !shouldAdd);
    }
  }
}
