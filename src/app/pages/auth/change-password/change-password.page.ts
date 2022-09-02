import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { ChangePasswordFacadeService } from './change-password-facade.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  passwordChangeFormFacade = new FormGroup({
    password1: new FormControl(''),
    password2: new FormControl(''),
  }, {
    validators: this.passwordConfirming
  });

  passwordChangeForm = new FormGroup({
    password: new FormControl(''),
  });

  status: 'VALID' | 'INVALID' = 'INVALID';

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password1').value !== c.get('password2').value) {
        return {invalid: true};
    }
  }

  constructor(
    public changePasswordFacade: ChangePasswordFacadeService,
  ) { }

  ngOnInit() {
    this.passwordChangeFormFacade.statusChanges.subscribe((status) => {
      this.status = status;

      this.passwordChangeForm.patchValue({
        password: this.passwordChangeFormFacade.get('password1').value
      });
    });
  }

  @completionNotifier()
  @loader()
  async changePassword() {
    if (!this.passwordChangeFormFacade.valid) {
      throw new Error('Please fill the form!');
    }

    await this.changePasswordFacade.changePassword(this.passwordChangeForm.value);
    this.passwordChangeForm.reset();
    this.passwordChangeFormFacade.reset();
  }

}
