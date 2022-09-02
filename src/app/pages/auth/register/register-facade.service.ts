import { Injectable } from '@angular/core';
import { Login, UserSignUp } from 'src/api/models';
import { CompaniesService } from 'src/api/services';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterFacadeService {

  constructor(
    private authService: AuthService,
    private companyService: CompaniesService,
  ) { }

  async createAccount(userSignUpForm: UserSignUp) {
    return await this.authService.register(userSignUpForm);
  }

  async getCompanies() {
    return await (await this.companyService.companiesList()).toPromise();
  }

  async login(loginCredentials: Login) {
    return await this.authService.login(loginCredentials);
  }

}
