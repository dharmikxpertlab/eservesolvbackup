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

import { Order } from '../models/order';
import { OrderCandidate } from '../models/order-candidate';
import { OrderDescriptionDocument } from '../models/order-description-document';
import { PaginatedOrderDescriptionDocumentList } from '../models/paginated-order-description-document-list';
import { PaginatedOrderList } from '../models/paginated-order-list';
import { PatchedOrder } from '../models/patched-order';
import { PatchedOrderDescriptionDocument } from '../models/patched-order-description-document';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation ordersList
   */
  static readonly OrdersListPath = '/api/v1/orders/';

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersList()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersList$Response(params?: {

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<StrictHttpResponse<PaginatedOrderList>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersListPath, 'get');
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
        return r as StrictHttpResponse<PaginatedOrderList>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersList(params?: {

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<PaginatedOrderList>> {

    return (await this.ordersList$Response(params)).pipe(
      map((r: StrictHttpResponse<PaginatedOrderList>) => r.body as PaginatedOrderList)
    );
  }

  /**
   * Path part for operation ordersCreate
   */
  static readonly OrdersCreatePath = '/api/v1/orders/';

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async ordersCreate$Json$Response(params: {
    body: Order
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async ordersCreate$Json(params: {
    body: Order
  }): Promise<Observable<Order>> {

    return (await this.ordersCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersCreate$XWwwFormUrlencoded$Response(params: {
    body: Order
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersCreate$XWwwFormUrlencoded(params: {
    body: Order
  }): Promise<Observable<Order>> {

    return (await this.ordersCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersCreate$FormData$Response(params: {
    body: Order
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersCreate$FormData(params: {
    body: Order
  }): Promise<Observable<Order>> {

    return (await this.ordersCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation ordersDocumentsList
   */
  static readonly OrdersDocumentsListPath = '/api/v1/orders/{order_pk}/documents/';

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDocumentsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersDocumentsList$Response(params: {
    order_pk: string;

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<StrictHttpResponse<PaginatedOrderDescriptionDocumentList>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDocumentsListPath, 'get');
    if (params) {
      rb.path('order_pk', params.order_pk, {});
      rb.query('page', params.page, {});
      rb.query('page_size', params.page_size, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedOrderDescriptionDocumentList>;
      })
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDocumentsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersDocumentsList(params: {
    order_pk: string;

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<PaginatedOrderDescriptionDocumentList>> {

    return (await this.ordersDocumentsList$Response(params)).pipe(
      map((r: StrictHttpResponse<PaginatedOrderDescriptionDocumentList>) => r.body as PaginatedOrderDescriptionDocumentList)
    );
  }

  /**
   * Path part for operation ordersDocumentsCreate
   */
  static readonly OrdersDocumentsCreatePath = '/api/v1/orders/{order_pk}/documents/';

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDocumentsCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersDocumentsCreate$XWwwFormUrlencoded$Response(params: {
    order_pk: string;
    body: OrderDescriptionDocument
  }): Promise<Observable<StrictHttpResponse<OrderDescriptionDocument>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDocumentsCreatePath, 'post');
    if (params) {
      rb.path('order_pk', params.order_pk, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDescriptionDocument>;
      })
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDocumentsCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersDocumentsCreate$XWwwFormUrlencoded(params: {
    order_pk: string;
    body: OrderDescriptionDocument
  }): Promise<Observable<OrderDescriptionDocument>> {

    return (await this.ordersDocumentsCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<OrderDescriptionDocument>) => r.body as OrderDescriptionDocument)
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDocumentsCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersDocumentsCreate$FormData$Response(params: {
    order_pk: string;
    body: OrderDescriptionDocument
  }): Promise<Observable<StrictHttpResponse<OrderDescriptionDocument>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDocumentsCreatePath, 'post');
    if (params) {
      rb.path('order_pk', params.order_pk, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDescriptionDocument>;
      })
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDocumentsCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersDocumentsCreate$FormData(params: {
    order_pk: string;
    body: OrderDescriptionDocument
  }): Promise<Observable<OrderDescriptionDocument>> {

    return (await this.ordersDocumentsCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<OrderDescriptionDocument>) => r.body as OrderDescriptionDocument)
    );
  }

  /**
   * Path part for operation ordersDocumentsRetrieve
   */
  static readonly OrdersDocumentsRetrievePath = '/api/v1/orders/{order_pk}/documents/{id}/';

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDocumentsRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersDocumentsRetrieve$Response(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
  }): Promise<Observable<StrictHttpResponse<OrderDescriptionDocument>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDocumentsRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('order_pk', params.order_pk, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDescriptionDocument>;
      })
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDocumentsRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersDocumentsRetrieve(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
  }): Promise<Observable<OrderDescriptionDocument>> {

    return (await this.ordersDocumentsRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<OrderDescriptionDocument>) => r.body as OrderDescriptionDocument)
    );
  }

  /**
   * Path part for operation ordersDocumentsUpdate
   */
  static readonly OrdersDocumentsUpdatePath = '/api/v1/orders/{order_pk}/documents/{id}/';

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDocumentsUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersDocumentsUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
    body: OrderDescriptionDocument
  }): Promise<Observable<StrictHttpResponse<OrderDescriptionDocument>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDocumentsUpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('order_pk', params.order_pk, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDescriptionDocument>;
      })
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDocumentsUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersDocumentsUpdate$XWwwFormUrlencoded(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
    body: OrderDescriptionDocument
  }): Promise<Observable<OrderDescriptionDocument>> {

    return (await this.ordersDocumentsUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<OrderDescriptionDocument>) => r.body as OrderDescriptionDocument)
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDocumentsUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersDocumentsUpdate$FormData$Response(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
    body: OrderDescriptionDocument
  }): Promise<Observable<StrictHttpResponse<OrderDescriptionDocument>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDocumentsUpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('order_pk', params.order_pk, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDescriptionDocument>;
      })
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDocumentsUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersDocumentsUpdate$FormData(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
    body: OrderDescriptionDocument
  }): Promise<Observable<OrderDescriptionDocument>> {

    return (await this.ordersDocumentsUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<OrderDescriptionDocument>) => r.body as OrderDescriptionDocument)
    );
  }

  /**
   * Path part for operation ordersDocumentsDestroy
   */
  static readonly OrdersDocumentsDestroyPath = '/api/v1/orders/{order_pk}/documents/{id}/';

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDocumentsDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersDocumentsDestroy$Response(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDocumentsDestroyPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('order_pk', params.order_pk, {});
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
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDocumentsDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersDocumentsDestroy(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
  }): Promise<Observable<void>> {

    return (await this.ordersDocumentsDestroy$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation ordersDocumentsPartialUpdate
   */
  static readonly OrdersDocumentsPartialUpdatePath = '/api/v1/orders/{order_pk}/documents/{id}/';

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDocumentsPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersDocumentsPartialUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
    body?: PatchedOrderDescriptionDocument
  }): Promise<Observable<StrictHttpResponse<OrderDescriptionDocument>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDocumentsPartialUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('order_pk', params.order_pk, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDescriptionDocument>;
      })
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDocumentsPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersDocumentsPartialUpdate$XWwwFormUrlencoded(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
    body?: PatchedOrderDescriptionDocument
  }): Promise<Observable<OrderDescriptionDocument>> {

    return (await this.ordersDocumentsPartialUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<OrderDescriptionDocument>) => r.body as OrderDescriptionDocument)
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDocumentsPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersDocumentsPartialUpdate$FormData$Response(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
    body?: PatchedOrderDescriptionDocument
  }): Promise<Observable<StrictHttpResponse<OrderDescriptionDocument>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDocumentsPartialUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('order_pk', params.order_pk, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderDescriptionDocument>;
      })
    );
  }

  /**
   * Interface for creating and updating documents related to an order.
   * Since this viewset is supposed to be a nested view of the order
   * viewset, it offloads some checks to the data model.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDocumentsPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersDocumentsPartialUpdate$FormData(params: {

    /**
     * A unique integer value identifying this order description document.
     */
    id: number;
    order_pk: string;
    body?: PatchedOrderDescriptionDocument
  }): Promise<Observable<OrderDescriptionDocument>> {

    return (await this.ordersDocumentsPartialUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<OrderDescriptionDocument>) => r.body as OrderDescriptionDocument)
    );
  }

  /**
   * Path part for operation ordersRetrieve
   */
  static readonly OrdersRetrievePath = '/api/v1/orders/{id}/';

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersRetrieve$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersRetrieve(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<Order>> {

    return (await this.ordersRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation ordersUpdate
   */
  static readonly OrdersUpdatePath = '/api/v1/orders/{id}/';

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async ordersUpdate$Json$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body: Order
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersUpdatePath, 'put');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async ordersUpdate$Json(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body: Order
  }): Promise<Observable<Order>> {

    return (await this.ordersUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body: Order
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersUpdatePath, 'put');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersUpdate$XWwwFormUrlencoded(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body: Order
  }): Promise<Observable<Order>> {

    return (await this.ordersUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersUpdate$FormData$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body: Order
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersUpdatePath, 'put');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersUpdate$FormData(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body: Order
  }): Promise<Observable<Order>> {

    return (await this.ordersUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation ordersDestroy
   */
  static readonly OrdersDestroyPath = '/api/v1/orders/{id}/';

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersDestroy$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersDestroyPath, 'delete');
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
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersDestroy(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<void>> {

    return (await this.ordersDestroy$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation ordersPartialUpdate
   */
  static readonly OrdersPartialUpdatePath = '/api/v1/orders/{id}/';

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async ordersPartialUpdate$Json$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrder
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersPartialUpdatePath, 'patch');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async ordersPartialUpdate$Json(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrder
  }): Promise<Observable<Order>> {

    return (await this.ordersPartialUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersPartialUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrder
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersPartialUpdatePath, 'patch');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async ordersPartialUpdate$XWwwFormUrlencoded(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrder
  }): Promise<Observable<Order>> {

    return (await this.ordersPartialUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersPartialUpdate$FormData$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrder
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersPartialUpdatePath, 'patch');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Interface to create and update orders.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async ordersPartialUpdate$FormData(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    body?: PatchedOrder
  }): Promise<Observable<Order>> {

    return (await this.ordersPartialUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation ordersCancelRetrieve
   */
  static readonly OrdersCancelRetrievePath = '/api/v1/orders/{id}/cancel/';

  /**
   * Cancel the current order if it can still be cancelled.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCancelRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersCancelRetrieve$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<StrictHttpResponse<Order>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersCancelRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Cancel the current order if it can still be cancelled.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersCancelRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersCancelRetrieve(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
  }): Promise<Observable<Order>> {

    return (await this.ordersCancelRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation ordersCandidatesRetrieve
   */
  static readonly OrdersCandidatesRetrievePath = '/api/v1/orders/{id}/candidates/';

  /**
   * Suggests a list of candidates that are applicable for the order.
   * This list could change between consecutive requests.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCandidatesRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersCandidatesRetrieve$Response(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    sort?: 'distance' | 'rate';
  }): Promise<Observable<StrictHttpResponse<OrderCandidate>>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.OrdersCandidatesRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('sort', params.sort, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OrderCandidate>;
      })
    );
  }

  /**
   * Suggests a list of candidates that are applicable for the order.
   * This list could change between consecutive requests.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ordersCandidatesRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async ordersCandidatesRetrieve(params: {

    /**
     * A unique integer value identifying this order.
     */
    id: number;
    sort?: 'distance' | 'rate';
  }): Promise<Observable<OrderCandidate>> {

    return (await this.ordersCandidatesRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<OrderCandidate>) => r.body as OrderCandidate)
    );
  }

}
