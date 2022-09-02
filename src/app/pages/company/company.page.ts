import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Company } from 'src/api/models';
import { CompanyFacadeService } from './company-facade.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage {
  company: Company;
  companyForm = new FormGroup({
    city: new FormControl(''),
    id: new FormControl(null),
    logo: new FormControl(''),
    logo_thumbnails: new FormControl(''),
    name: new FormControl('')
  });

  constructor(
    public companyFacadeService: CompanyFacadeService,
  ) { }

  async ionViewDidEnter() {
    this.company = await this.companyFacadeService.getCompany();
    this.companyForm.patchValue({
      ...this.company
    });
  }

}
