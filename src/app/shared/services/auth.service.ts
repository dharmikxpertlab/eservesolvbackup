import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { BehaviorSubject } from 'rxjs';
import { Login, UserSignUp } from 'src/api/models';
import { AccountService } from 'src/api/services';
import { NotificationService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TOKEN_KEY = 'token';
  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  accToken = "";

  constructor(
    private accountService: AccountService,
    private permissionsService: NgxPermissionsService,
    public notifications: NotificationService,
    public translateService: TranslateService,
  ) {}

  async init() {
    const isLoggedIn = await this.isAuthenticated();

    if (isLoggedIn) {
      this.assignPermissions();
    }
  }

  async saveToken(token: string) {
    this.accToken = token;
    await Storage.set({
      key: this.TOKEN_KEY,
      value: token
    });

  }

  async getToken(): Promise<string> {
    const token = await Storage.get({ key: this.TOKEN_KEY });
    
    if (token) {
      this.accToken = token.value;
      return token.value;
    }

    return null;
  }

  async deleteToken(): Promise<void> {
    await Storage.remove({
      key: this.TOKEN_KEY
    });
  }

  async isTokenValid() {
    try {
      await this.getUserInfo();
    } catch (err) {
      await this.deleteToken();
      return false;
    }

    return true;
  }

  async isAuthenticated(): Promise<boolean> {
    const isLoggedIn = Boolean(await this.getToken());
    const isTokenValid = await this.isTokenValid();

    if (isLoggedIn && !isTokenValid) {
      this.isAuthenticated$.next(false);
    } else if (isLoggedIn && isTokenValid) {
      this.isAuthenticated$.next(isLoggedIn);
    } else {
      this.isAuthenticated$.next(false);
    }

    return this.isAuthenticated$.getValue();
  }

  async login(loginCredentials: Login) {
    console.log("then");
    loginCredentials.username = loginCredentials.username.toLowerCase();
    return await (await this.accountService.accountLoginCreate$Json({
      body: loginCredentials
    })).toPromise().then(async (response: any) => {
      console.log("login res",response);
      
      await this.saveToken(response.token);
      await this.assignPermissions();
    }).catch(error => {
      console.log("catch");
      if (error && error.error && error.error.detail) {
        if (error.error.detail === 'Unable to login with provided credentials.') {
          error.error.detail = this.translateService.instant('Unable to login with provided credentials.');
        }
      }

      throw error;
    });
  }

  async register(signupCredentials: UserSignUp) {
    signupCredentials.email = signupCredentials.email.toLowerCase();
    return await (await this.accountService.accountSignupCreate$Json({
      body: signupCredentials
    })).toPromise().then(async (response) => {
      await this.registerDeviceForNotification();
      return response;
    });
  }

  async registerDeviceForNotification() {
    try {
      await this.notifications.init();
    } catch (err) {
      console.log('Error in notification initialization');
    }
  }

  async assignPermissions() {
    const user = await this.getUserInfo();
    
    

    if (user) {
      console.log("user = ",user);
      this.permissionsService.loadPermissions(user.roles);
    }
  }

  async getUserInfo() {
    console.log("get user info res = ",(await this.accountService.accountUserMeRetrieve()).toPromise());
    return await (await this.accountService.accountUserMeRetrieve()).toPromise();
  }

  async updateLanguage(languageCode: string) {
    if (!this.isAuthenticated$.getValue()) {
      return;
    }

    return await (await this.accountService.accountUserPartialUpdate$Json({
      id: await (await this.getUserInfo()).id,
      body: {
        language: languageCode.toUpperCase()
      } as any
    })).toPromise();
  }

  async logout() {
    await this.deleteToken();
    this.isAuthenticated$.next(false);
  }
}

