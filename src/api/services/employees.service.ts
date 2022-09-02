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

import { EmployeeOrder } from '../models/employee-order';
import { PaginatedEmployeeOrderList } from '../models/paginated-employee-order-list';
import { PatchedOrderStatusUpdateRequest } from '../models/patched-order-status-update-request';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation employeesOrdersList
   */
  static readonly EmployeesOrdersListPath = '/api/v1/employees/orders/';

  /**
   * Interface to browse and interact with all the orders that the
   * employee has access to, i.e. the orders for which this employee
   * is a candidate or the orders which have been accepted.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesOrdersList()` instead.
   *
   * This method doesn't expect any request body.
   */
  async employeesOrdersList$Response(params?: {

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<StrictHttpResponse<PaginatedEmployeeOrderList>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.EmployeesOrdersListPath, 'get');
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
        return r as StrictHttpResponse<PaginatedEmployeeOrderList>;
      })
    );
  }

  /**
   * Interface to browse and interact with all the orders that the
   * employee has access to, i.e. the orders for which this employee
   * is a candidate or the orders which have been accepted.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `employeesOrdersList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async employeesOrdersList(params?: {

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<PaginatedEmployeeOrderList>> {

    return (await this.employeesOrdersList$Response(params)).pipe(
      map((r: StrictHttpResponse<PaginatedEmployeeOrderList>) => r.body as PaginatedEmployeeOrderList)
    );
  }

  /**
   * Path part for operation employeesOrdersRetrieve
   */
  static readonly EmployeesOrdersRetrievePath = '/api/v1/employees/orders/{id}/';

  /**
   * Interface to browse and interact with all the orders that the
   * employee has access to, i.e. the orders for which this employee
   * is a candidate or the orders which have been accepted.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesOrdersRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async employeesOrdersRetrieve$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<EmployeeOrder>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.EmployeesOrdersRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmployeeOrder>;
      })
    );
  }

  /**
   * Interface to browse and interact with all the orders that the
   * employee has access to, i.e. the orders for which this employee
   * is a candidate or the orders which have been accepted.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `employeesOrdersRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async employeesOrdersRetrieve(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<EmployeeOrder>> {

    return (await this.employeesOrdersRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<EmployeeOrder>) => r.body as EmployeeOrder)
    );
  }

  /**
   * Path part for operation employeesOrdersAcceptRetrieve
   */
  static readonly EmployeesOrdersAcceptRetrievePath = '/api/v1/employees/orders/{id}/accept/';

  /**
   * Accept an order that you are a candidate service provider for.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesOrdersAcceptRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async employeesOrdersAcceptRetrieve$Response(params: {
    employee?: string;

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<EmployeeOrder>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.EmployeesOrdersAcceptRetrievePath, 'get');
    if (params) {
      rb.query('employee', params.employee, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmployeeOrder>;
      })
    );
  }

  /**
   * Accept an order that you are a candidate service provider for.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `employeesOrdersAcceptRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async employeesOrdersAcceptRetrieve(params: {
    employee?: string;

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<EmployeeOrder>> {

    return (await this.employeesOrdersAcceptRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<EmployeeOrder>) => r.body as EmployeeOrder)
    );
  }

  /**
   * Path part for operation employeesOrdersStatusPartialUpdate
   */
  static readonly EmployeesOrdersStatusPartialUpdatePath = '/api/v1/employees/orders/{id}/status/';

  /**
   * Method to update the status of the request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesOrdersStatusPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async employeesOrdersStatusPartialUpdate$XWwwFormUrlencoded$Response(params: {
    employee?: string;

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrderStatusUpdateRequest
  }): Promise<Observable<StrictHttpResponse<EmployeeOrder>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.EmployeesOrdersStatusPartialUpdatePath, 'patch');
    if (params) {
      rb.query('employee', params.employee, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmployeeOrder>;
      })
    );
  }

  /**
   * Method to update the status of the request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `employeesOrdersStatusPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async employeesOrdersStatusPartialUpdate$XWwwFormUrlencoded(params: {
    employee?: string;

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrderStatusUpdateRequest
  }): Promise<Observable<EmployeeOrder>> {

    return (await this.employeesOrdersStatusPartialUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<EmployeeOrder>) => r.body as EmployeeOrder)
    );
  }

  /**
   * Method to update the status of the request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesOrdersStatusPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async employeesOrdersStatusPartialUpdate$FormData$Response(params: {
    employee?: string;

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrderStatusUpdateRequest
  }): Promise<Observable<StrictHttpResponse<EmployeeOrder>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.EmployeesOrdersStatusPartialUpdatePath, 'patch');
    if (params) {
      rb.query('employee', params.employee, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmployeeOrder>;
      })
    );
  }

  /**
   * Method to update the status of the request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `employeesOrdersStatusPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async employeesOrdersStatusPartialUpdate$FormData(params: {
    employee?: string;

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrderStatusUpdateRequest
  }): Promise<Observable<EmployeeOrder>> {

    return (await this.employeesOrdersStatusPartialUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<EmployeeOrder>) => r.body as EmployeeOrder)
    );
  }

}
