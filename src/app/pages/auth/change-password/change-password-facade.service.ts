import { Injectable } from '@angular/core';
import { PasswordChange } from 'src/api/models';
import { AccountService } from 'src/api/services';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordFacadeService {

  constructor(
    private accountService: AccountService
  ) { }

  async changePassword(passwordChange: PasswordChange) {
    return await (await this.accountService.accountPasswordChangeCreate$Json({
      body: passwordChange
    })).toPromise();
  }
}
