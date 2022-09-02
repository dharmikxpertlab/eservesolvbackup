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

import { Machine } from '../models/machine';
import { PaginatedMachineList } from '../models/paginated-machine-list';
import { PatchedMachine } from '../models/patched-machine';

@Injectable({
  providedIn: 'root',
})
export class MachinesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation machinesList
   */
  static readonly MachinesListPath = '/api/v1/machines/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesList()` instead.
   *
   * This method doesn't expect any request body.
   */
  async machinesList$Response(params?: {
    location?: number;

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<StrictHttpResponse<PaginatedMachineList>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesListPath, 'get');
    if (params) {
      rb.query('location', params.location, {});
      rb.query('page', params.page, {});
      rb.query('page_size', params.page_size, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedMachineList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async machinesList(params?: {
    location?: number;

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<PaginatedMachineList>> {

    return (await this.machinesList$Response(params)).pipe(
      map((r: StrictHttpResponse<PaginatedMachineList>) => r.body as PaginatedMachineList)
    );
  }

  /**
   * Path part for operation machinesCreate
   */
  static readonly MachinesCreatePath = '/api/v1/machines/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async machinesCreate$Json$Response(params: {
    body: Machine
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async machinesCreate$Json(params: {
    body: Machine
  }): Promise<Observable<Machine>> {

    return (await this.machinesCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async machinesCreate$XWwwFormUrlencoded$Response(params: {
    body: Machine
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async machinesCreate$XWwwFormUrlencoded(params: {
    body: Machine
  }): Promise<Observable<Machine>> {

    return (await this.machinesCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async machinesCreate$FormData$Response(params: {
    body: Machine
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async machinesCreate$FormData(params: {
    body: Machine
  }): Promise<Observable<Machine>> {

    return (await this.machinesCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

  /**
   * Path part for operation machinesRetrieve
   */
  static readonly MachinesRetrievePath = '/api/v1/machines/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async machinesRetrieve$Response(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async machinesRetrieve(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
  }): Promise<Observable<Machine>> {

    return (await this.machinesRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

  /**
   * Path part for operation machinesUpdate
   */
  static readonly MachinesUpdatePath = '/api/v1/machines/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async machinesUpdate$Json$Response(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body: Machine
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesUpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async machinesUpdate$Json(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body: Machine
  }): Promise<Observable<Machine>> {

    return (await this.machinesUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async machinesUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body: Machine
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesUpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async machinesUpdate$XWwwFormUrlencoded(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body: Machine
  }): Promise<Observable<Machine>> {

    return (await this.machinesUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async machinesUpdate$FormData$Response(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body: Machine
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesUpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async machinesUpdate$FormData(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body: Machine
  }): Promise<Observable<Machine>> {

    return (await this.machinesUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

  /**
   * Path part for operation machinesDestroy
   */
  static readonly MachinesDestroyPath = '/api/v1/machines/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  async machinesDestroy$Response(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesDestroyPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'text',
        accept: '*/*'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async machinesDestroy(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
  }): Promise<Observable<void>> {

    return (await this.machinesDestroy$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation machinesPartialUpdate
   */
  static readonly MachinesPartialUpdatePath = '/api/v1/machines/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async machinesPartialUpdate$Json$Response(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body?: PatchedMachine
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesPartialUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async machinesPartialUpdate$Json(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body?: PatchedMachine
  }): Promise<Observable<Machine>> {

    return (await this.machinesPartialUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async machinesPartialUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body?: PatchedMachine
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesPartialUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async machinesPartialUpdate$XWwwFormUrlencoded(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body?: PatchedMachine
  }): Promise<Observable<Machine>> {

    return (await this.machinesPartialUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `machinesPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async machinesPartialUpdate$FormData$Response(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body?: PatchedMachine
  }): Promise<Observable<StrictHttpResponse<Machine>>> {

    const rb = new RequestBuilder(this.rootUrl, MachinesService.MachinesPartialUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Machine>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `machinesPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async machinesPartialUpdate$FormData(params: {

    /**
     * A unique integer value identifying this machine.
     */
    id: number;
    body?: PatchedMachine
  }): Promise<Observable<Machine>> {

    return (await this.machinesPartialUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Machine>) => r.body as Machine)
    );
  }

}
