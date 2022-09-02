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

import { Location } from '../models/location';
import { PaginatedLocationList } from '../models/paginated-location-list';
import { PatchedLocation } from '../models/patched-location';

@Injectable({
  providedIn: 'root',
})
export class LocationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation locationsList
   */
  static readonly LocationsListPath = '/api/v1/locations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  async locationsList$Response(params?: {

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<StrictHttpResponse<PaginatedLocationList>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsListPath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('page_size', params.page_size, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedLocationList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async locationsList(params?: {

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<PaginatedLocationList>> {

    return (await this.locationsList$Response(params)).pipe(
      map((r: StrictHttpResponse<PaginatedLocationList>) => r.body as PaginatedLocationList)
    );
  }

  /**
   * Path part for operation locationsCreate
   */
  static readonly LocationsCreatePath = '/api/v1/locations/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async locationsCreate$Json$Response(params: {
    body: Location
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async locationsCreate$Json(params: {
    body: Location
  }): Promise<Observable<Location>> {

    return (await this.locationsCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async locationsCreate$XWwwFormUrlencoded$Response(params: {
    body: Location
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async locationsCreate$XWwwFormUrlencoded(params: {
    body: Location
  }): Promise<Observable<Location>> {

    return (await this.locationsCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async locationsCreate$FormData$Response(params: {
    body: Location
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async locationsCreate$FormData(params: {
    body: Location
  }): Promise<Observable<Location>> {

    return (await this.locationsCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

  /**
   * Path part for operation locationsRetrieve
   */
  static readonly LocationsRetrievePath = '/api/v1/locations/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async locationsRetrieve$Response(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async locationsRetrieve(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
  }): Promise<Observable<Location>> {

    return (await this.locationsRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

  /**
   * Path part for operation locationsUpdate
   */
  static readonly LocationsUpdatePath = '/api/v1/locations/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async locationsUpdate$Json$Response(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body: Location
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsUpdatePath, 'put');
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
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async locationsUpdate$Json(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body: Location
  }): Promise<Observable<Location>> {

    return (await this.locationsUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async locationsUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body: Location
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsUpdatePath, 'put');
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
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async locationsUpdate$XWwwFormUrlencoded(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body: Location
  }): Promise<Observable<Location>> {

    return (await this.locationsUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async locationsUpdate$FormData$Response(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body: Location
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsUpdatePath, 'put');
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
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async locationsUpdate$FormData(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body: Location
  }): Promise<Observable<Location>> {

    return (await this.locationsUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

  /**
   * Path part for operation locationsDestroy
   */
  static readonly LocationsDestroyPath = '/api/v1/locations/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  async locationsDestroy$Response(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsDestroyPath, 'delete');
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
   * To access the full response (for headers, for example), `locationsDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async locationsDestroy(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
  }): Promise<Observable<void>> {

    return (await this.locationsDestroy$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation locationsPartialUpdate
   */
  static readonly LocationsPartialUpdatePath = '/api/v1/locations/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async locationsPartialUpdate$Json$Response(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body?: PatchedLocation
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsPartialUpdatePath, 'patch');
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
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async locationsPartialUpdate$Json(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body?: PatchedLocation
  }): Promise<Observable<Location>> {

    return (await this.locationsPartialUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async locationsPartialUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body?: PatchedLocation
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsPartialUpdatePath, 'patch');
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
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async locationsPartialUpdate$XWwwFormUrlencoded(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body?: PatchedLocation
  }): Promise<Observable<Location>> {

    return (await this.locationsPartialUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationsPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async locationsPartialUpdate$FormData$Response(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body?: PatchedLocation
  }): Promise<Observable<StrictHttpResponse<Location>>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.LocationsPartialUpdatePath, 'patch');
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
        return r as StrictHttpResponse<Location>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationsPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async locationsPartialUpdate$FormData(params: {

    /**
     * A unique integer value identifying this location.
     */
    id: number;
    body?: PatchedLocation
  }): Promise<Observable<Location>> {

    return (await this.locationsPartialUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Location>) => r.body as Location)
    );
  }

}
