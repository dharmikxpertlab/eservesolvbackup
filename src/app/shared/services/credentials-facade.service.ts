import { Injectable } from '@angular/core';
import { CredentialOptions } from 'src/api/models';
import { CredentialsService } from 'src/api/services';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CredentialsFacadeService {

  constructor(
    public credentialService: CredentialsService
  ) { }

  async getCredentials(): Promise<CredentialOptions> {
    return await (await this.credentialService.credentialsRetrieve()).toPromise().then((response) => {
      if (response.experience) {
        response.experience = _.sortBy(response.experience, 'name');
      }

      if (response.certificates) {
        response.certificates = _.sortBy(response.certificates, 'name');
      }

      if (response.training) {
        response.training = _.sortBy(response.training, 'name');
      }

      return response;
    }) as CredentialOptions;
  }
}
