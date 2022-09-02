import { Injectable } from '@angular/core';
import { PasswordResetVerified } from 'src/api/models';
import { AccountService } from 'src/api/services';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordVerifiedFacadeService {

  constructor(
    private accountService: AccountService
  ) { }

  async resetPassword(verifiedPasswordReset: PasswordResetVerified) {
    return await (await this.accountService.accountPasswordResetVerifiedCreate$Json({
      body: verifiedPasswordReset
    })).toPromise();
  }
}
