import { Component, OnInit } from '@angular/core';
import { Company } from 'src/api/models';
import { CompanyFacadeService } from '../../company-facade.service';

@Component({
  selector: 'app-company-label',
  templateUrl: './company-label.component.html',
  styleUrls: ['./company-label.component.scss'],
})
export class CompanyLabelComponent implements OnInit {

  company: Company;

  constructor(
    public companyService: CompanyFacadeService
  ) { }

  async ngOnInit() {
    this.company = await this.companyService.getCompany();
  }

}
