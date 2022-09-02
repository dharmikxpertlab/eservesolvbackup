import { Injectable } from '@angular/core';
import { Company } from 'src/api/models';
import { CompaniesService } from 'src/api/services';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyFacadeService {

  constructor(
    public companyService: CompaniesService,
    public authService: AuthService,
  ) { }

  async getCompany(): Promise<Company> {
    const userCompanyId = (await this.authService.getUserInfo()).company;
    return await this.getCompanyById(userCompanyId);
  }

  async getCompanyById(id: number): Promise<Company> {
    return await (await this.companyService.companiesRetrieve({
      id
    })).toPromise();
  }

}
