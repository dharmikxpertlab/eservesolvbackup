import { Component, Input, OnInit } from '@angular/core';
import { CredentialOptions, OrderCandidate, ServiceProviderUser } from 'src/api/models';
import { ServiceProviderOptions, ServiceProviderProfileOption } from 'src/app/pages/auth/profile/service-provider/service-provider.config';
import { CredentialsFacadeService } from 'src/app/shared/services/credentials-facade.service';

@Component({
  selector: 'app-service-provider-options',
  templateUrl: './service-provider-options.component.html',
  styleUrls: ['./service-provider-options.component.scss'],
})
export class ServiceProviderOptionsComponent implements OnInit {

  options: CredentialOptions;
  @Input() serviceProvider: OrderCandidate;
  readonly ServiceProviderOptions = ServiceProviderOptions;

  constructor(
    public credentialService: CredentialsFacadeService
  ) { }

  async ngOnInit() {
    this.options = await this.credentialService.getCredentials();
  }

  existsInServiceProviderProfile(credentialId, credentialType) {
    return this.serviceProvider.profile[credentialType].indexOf(credentialId) >= 0;
  }
}
