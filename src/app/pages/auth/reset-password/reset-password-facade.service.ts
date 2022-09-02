import { Injectable } from '@angular/core';
import { PasswordReset } from 'src/api/models';
import { AccountService } from 'src/api/services';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordFacadeService {

  constructor(
    private accountService: AccountService
  ) { }

  async resetPassword(passwordReset: PasswordReset) {
    passwordReset.username = passwordReset.username.toLowerCase();
    return await (await this.accountService.accountPasswordResetCreate$Json({
      body: passwordReset
    })).toPromise();
  }
}
