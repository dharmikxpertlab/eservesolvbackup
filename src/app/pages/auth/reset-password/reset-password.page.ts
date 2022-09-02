import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { ResetPasswordFacadeService } from './reset-password-facade.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  passwordResetForm = new FormGroup({
    username: new FormControl(''),
  });

  constructor(
    public resetPasswordFacadeService: ResetPasswordFacadeService
  ) { }

  ngOnInit() {
  }


  @loader()
  @completionNotifier('Reset Password E-Mail Sent!')
  resetPassword() {
    this.resetPasswordFacadeService.resetPassword(this.passwordResetForm.value);
  }
}
