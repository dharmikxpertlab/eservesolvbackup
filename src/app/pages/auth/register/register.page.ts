import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { Company, GenderEnum, UserSignUp } from 'src/api/models';
import { RolesEnum } from 'src/api/models/roles-enum';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { NotificationService } from 'src/app/shared/services/notifications.service';
import { LanguageService } from 'src/app/shared/services/translation/language.service';

import { RegisterFacadeService } from './register-facade.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  readonly Roles = RolesEnum;
  role = RolesEnum.Customer;
  readonly GenderOptions = GenderEnum;

  registerForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl(''),
    company_hint: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    is_service_provider: new FormControl(false, Validators.required),
    is_employee_manager: new FormControl(false, Validators.required),
    is_location_manager: new FormControl(false, Validators.required),
    language: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
  });

  constructor(
    public registerFacadeService: RegisterFacadeService,
    public router: Router,
    public languageService: LanguageService,
    public notificationService: NotificationService,
  ) { }

  async ngOnInit() {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state?.role) {
      this.role = state.role;
    } else {
      this.router.navigate(['/auth']);
    }

    this.registerForm.patchValue({
      is_service_provider: (this.role === this.Roles.SpEmployee)
    });

    this.registerForm.patchValue({
      language: await (await this.languageService.getLanguage()).toUpperCase()
    });
  }

  @loader()
  @completionNotifier()
  async register() {
    const payload = this.registerForm.value;
    const result: UserSignUp = await this.registerFacadeService.createAccount(payload);
    console.log(result);
    await this.login(result);
    this.router.navigate(['/auth', 'register', 'registration-successful']);
  }

  async login(signupResponse: any) {
    await this.registerFacadeService.login({
      username: signupResponse.username,
      password: this.registerForm.get('password').value
    });
  }

  openUrl(url) {
    Browser.open({
      url
    });
  }

  sortNull(): any {}
}
