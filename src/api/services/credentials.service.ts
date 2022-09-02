/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CredentialOptions } from '../models/credential-options';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation credentialsRetrieve
   */
  static readonly CredentialsRetrievePath = '/api/v1/credentials/';

  /**
   * Returns a list of all the available options for credentials,
   * could be used in dropdowns.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `credentialsRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async credentialsRetrieve$Response(params?: {
  }): Promise<Observable<StrictHttpResponse<CredentialOptions>>> {

    const rb = new RequestBuilder(this.rootUrl, CredentialsService.CredentialsRetrievePath, 'get');
    if (params) {
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CredentialOptions>;
      })
    );
  }

  /**
   * Returns a list of all the available options for credentials,
   * could be used in dropdowns.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `credentialsRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async credentialsRetrieve(params?: {
  }): Promise<Observable<CredentialOptions>> {

    return (await this.credentialsRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<CredentialOptions>) => r.body as CredentialOptions)
    );
  }

}
