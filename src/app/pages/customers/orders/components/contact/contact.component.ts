import { Component, Input, OnInit } from '@angular/core';
import { Company, Order } from 'src/api/models';
import { CompanyFacadeService } from 'src/app/pages/company/company-facade.service';
import { Currency } from 'src/app/shared/currency';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  readonly Currency = Currency;
  @Input() order: Order;
  company: Company;

  constructor(
    public companiesService: CompanyFacadeService
  ) { }

  ngOnInit() {
    this.getServiceProviderCompany();
  }

  async getServiceProviderCompany() {
    this.company = await this.companiesService.getCompanyById(this.order.service_provider.company);
  }
}
