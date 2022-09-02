import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';

import { ResetPasswordVerifiedFacadeService } from './reset-password-verified-facade.service';

@Component({
  selector: 'app-reset-password-verified',
  templateUrl: './reset-password-verified.page.html',
  styleUrls: ['./reset-password-verified.page.scss'],
})
export class ResetPasswordVerifiedPage {

  verifiedPasswordResetForm = new FormGroup({
    password: new FormControl(''),
    code: new FormControl()
  });

  constructor(
    public route: ActivatedRoute,
    public resetPasswordFacade: ResetPasswordVerifiedFacadeService,
    public router: Router,
  ) { }

  ionViewDidEnter() {
    const code = this.route.snapshot.queryParams.code;
    this.verifiedPasswordResetForm.patchValue({
      code
    });
  }

  @loader()
  @completionNotifier()
  resetPassword() {
    this.resetPasswordFacade.resetPassword(this.verifiedPasswordResetForm.value);
    this.router.navigate(['/auth', 'login']);
  }

}
