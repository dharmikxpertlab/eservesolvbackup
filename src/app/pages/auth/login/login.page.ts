import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { completionNotifier } from 'src/app/shared/decorators/completion-notifier';
import { loader } from 'src/app/shared/decorators/loader';
import { LoginFacadeService } from './login-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    public router: Router,
    public loginFacadeService: LoginFacadeService,
    public nav: NavController
  ) { }

  @loader()
  @completionNotifier('', false)
  async login() {

    await this.loginFacadeService.login(this.loginForm.value);
    this.nav.navigateRoot(['/']);
  }

}
