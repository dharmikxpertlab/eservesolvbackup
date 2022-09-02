import { Injectable } from '@angular/core';
import { Login } from 'src/api/models';
import { AccountService } from 'src/api/services';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginFacadeService {

  constructor(
    private authService: AuthService,
  ) { }

  async login(loginCredentials: Login) {
    await this.authService.login(loginCredentials);
  }
}
