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

import { Company } from '../models/company';
import { PaginatedCompanyList } from '../models/paginated-company-list';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation companiesList
   */
  static readonly CompaniesListPath = '/api/v1/companies/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companiesList()` instead.
   *
   * This method doesn't expect any request body.
   */
  async companiesList$Response(params?: {
    name?: string;

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<StrictHttpResponse<PaginatedCompanyList>>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.CompaniesListPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('page', params.page, {});
      rb.query('page_size', params.page_size, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedCompanyList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companiesList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async companiesList(params?: {
    name?: string;

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<PaginatedCompanyList>> {

    return (await this.companiesList$Response(params)).pipe(
      map((r: StrictHttpResponse<PaginatedCompanyList>) => r.body as PaginatedCompanyList)
    );
  }

  /**
   * Path part for operation companiesRetrieve
   */
  static readonly CompaniesRetrievePath = '/api/v1/companies/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companiesRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async companiesRetrieve$Response(params: {

    /**
     * A unique integer value identifying this company.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<Company>>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.CompaniesRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Company>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `companiesRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async companiesRetrieve(params: {

    /**
     * A unique integer value identifying this company.
     */
    id: number;
  }): Promise<Observable<Company>> {

    return (await this.companiesRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<Company>) => r.body as Company)
    );
  }

}
