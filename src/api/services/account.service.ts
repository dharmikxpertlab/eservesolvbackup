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

import { EmailChange } from '../models/email-change';
import { Employees } from '../models/employees';
import { FcmDevice } from '../models/fcm-device';
import { Login } from '../models/login';
import { PaginatedFcmDeviceList } from '../models/paginated-fcm-device-list';
import { PasswordChange } from '../models/password-change';
import { PasswordReset } from '../models/password-reset';
import { PasswordResetVerified } from '../models/password-reset-verified';
import { PatchedFcmDevice } from '../models/patched-fcm-device';
import { PatchedUser } from '../models/patched-user';
import { Signup } from '../models/signup';
import { User } from '../models/user';
import { UserProfile } from '../models/user-profile';
import { UserSignUp } from '../models/user-sign-up';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation accountEmailChangeCreate
   */
  static readonly AccountEmailChangeCreatePath = '/api/v1/account/email/change/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountEmailChangeCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountEmailChangeCreate$Json$Response(params: {
    body: EmailChange
  }): Promise<Observable<StrictHttpResponse<EmailChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountEmailChangeCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmailChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountEmailChangeCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountEmailChangeCreate$Json(params: {
    body: EmailChange
  }): Promise<Observable<EmailChange>> {

    return (await this.accountEmailChangeCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<EmailChange>) => r.body as EmailChange)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountEmailChangeCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountEmailChangeCreate$XWwwFormUrlencoded$Response(params: {
    body: EmailChange
  }): Promise<Observable<StrictHttpResponse<EmailChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountEmailChangeCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmailChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountEmailChangeCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountEmailChangeCreate$XWwwFormUrlencoded(params: {
    body: EmailChange
  }): Promise<Observable<EmailChange>> {

    return (await this.accountEmailChangeCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<EmailChange>) => r.body as EmailChange)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountEmailChangeCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountEmailChangeCreate$FormData$Response(params: {
    body: EmailChange
  }): Promise<Observable<StrictHttpResponse<EmailChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountEmailChangeCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmailChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountEmailChangeCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountEmailChangeCreate$FormData(params: {
    body: EmailChange
  }): Promise<Observable<EmailChange>> {

    return (await this.accountEmailChangeCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<EmailChange>) => r.body as EmailChange)
    );
  }

  /**
   * Path part for operation accountEmailChangeFormattedCreate
   */
  static readonly AccountEmailChangeFormattedCreatePath = '/api/v1/account/email/change{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountEmailChangeFormattedCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountEmailChangeFormattedCreate$Json$Response(params: {
    format: '.json';
    body: EmailChange
  }): Promise<Observable<StrictHttpResponse<EmailChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountEmailChangeFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmailChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountEmailChangeFormattedCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountEmailChangeFormattedCreate$Json(params: {
    format: '.json';
    body: EmailChange
  }): Promise<Observable<EmailChange>> {

    return (await this.accountEmailChangeFormattedCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<EmailChange>) => r.body as EmailChange)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountEmailChangeFormattedCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountEmailChangeFormattedCreate$XWwwFormUrlencoded$Response(params: {
    format: '.json';
    body: EmailChange
  }): Promise<Observable<StrictHttpResponse<EmailChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountEmailChangeFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmailChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountEmailChangeFormattedCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountEmailChangeFormattedCreate$XWwwFormUrlencoded(params: {
    format: '.json';
    body: EmailChange
  }): Promise<Observable<EmailChange>> {

    return (await this.accountEmailChangeFormattedCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<EmailChange>) => r.body as EmailChange)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountEmailChangeFormattedCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountEmailChangeFormattedCreate$FormData$Response(params: {
    format: '.json';
    body: EmailChange
  }): Promise<Observable<StrictHttpResponse<EmailChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountEmailChangeFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmailChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountEmailChangeFormattedCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountEmailChangeFormattedCreate$FormData(params: {
    format: '.json';
    body: EmailChange
  }): Promise<Observable<EmailChange>> {

    return (await this.accountEmailChangeFormattedCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<EmailChange>) => r.body as EmailChange)
    );
  }

  /**
   * Path part for operation accountEmailChangeVerifyRetrieve
   */
  static readonly AccountEmailChangeVerifyRetrievePath = '/api/v1/account/email/change/verify/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountEmailChangeVerifyRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountEmailChangeVerifyRetrieve$Response(params?: {
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountEmailChangeVerifyRetrievePath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `accountEmailChangeVerifyRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountEmailChangeVerifyRetrieve(params?: {
  }): Promise<Observable<void>> {

    return (await this.accountEmailChangeVerifyRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountEmailChangeVerifyFormattedRetrieve
   */
  static readonly AccountEmailChangeVerifyFormattedRetrievePath = '/api/v1/account/email/change/verify{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountEmailChangeVerifyFormattedRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountEmailChangeVerifyFormattedRetrieve$Response(params: {
    format: '.json';
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountEmailChangeVerifyFormattedRetrievePath, 'get');
    if (params) {
      rb.path('format', params.format, {});
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
   * To access the full response (for headers, for example), `accountEmailChangeVerifyFormattedRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountEmailChangeVerifyFormattedRetrieve(params: {
    format: '.json';
  }): Promise<Observable<void>> {

    return (await this.accountEmailChangeVerifyFormattedRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountLoginCreate
   */
  static readonly AccountLoginCreatePath = '/api/v1/account/login/';

  /**
   * View to login to the account.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLoginCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountLoginCreate$Json$Response(params: {
    body: Login
  }): Promise<Observable<StrictHttpResponse<Login>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLoginCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * View to login to the account.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLoginCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountLoginCreate$Json(params: {
    body: Login
  }): Promise<Observable<Login>> {

    return (await this.accountLoginCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * View to login to the account.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLoginCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountLoginCreate$XWwwFormUrlencoded$Response(params: {
    body: Login
  }): Promise<Observable<StrictHttpResponse<Login>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLoginCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * View to login to the account.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLoginCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountLoginCreate$XWwwFormUrlencoded(params: {
    body: Login
  }): Promise<Observable<Login>> {

    return (await this.accountLoginCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * View to login to the account.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLoginCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountLoginCreate$FormData$Response(params: {
    body: Login
  }): Promise<Observable<StrictHttpResponse<Login>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLoginCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * View to login to the account.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLoginCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountLoginCreate$FormData(params: {
    body: Login
  }): Promise<Observable<Login>> {

    return (await this.accountLoginCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * Path part for operation accountLoginFormattedCreate
   */
  static readonly AccountLoginFormattedCreatePath = '/api/v1/account/login{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLoginFormattedCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountLoginFormattedCreate$Json$Response(params: {
    format: '.json';
    body: Login
  }): Promise<Observable<StrictHttpResponse<Login>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLoginFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLoginFormattedCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountLoginFormattedCreate$Json(params: {
    format: '.json';
    body: Login
  }): Promise<Observable<Login>> {

    return (await this.accountLoginFormattedCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLoginFormattedCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountLoginFormattedCreate$XWwwFormUrlencoded$Response(params: {
    format: '.json';
    body: Login
  }): Promise<Observable<StrictHttpResponse<Login>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLoginFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLoginFormattedCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountLoginFormattedCreate$XWwwFormUrlencoded(params: {
    format: '.json';
    body: Login
  }): Promise<Observable<Login>> {

    return (await this.accountLoginFormattedCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLoginFormattedCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountLoginFormattedCreate$FormData$Response(params: {
    format: '.json';
    body: Login
  }): Promise<Observable<StrictHttpResponse<Login>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLoginFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Login>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLoginFormattedCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountLoginFormattedCreate$FormData(params: {
    format: '.json';
    body: Login
  }): Promise<Observable<Login>> {

    return (await this.accountLoginFormattedCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Login>) => r.body as Login)
    );
  }

  /**
   * Path part for operation accountLogoutRetrieve
   */
  static readonly AccountLogoutRetrievePath = '/api/v1/account/logout/';

  /**
   * Remove all auth tokens owned by request.user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLogoutRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountLogoutRetrieve$Response(params?: {
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLogoutRetrievePath, 'get');
    if (params) {
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
   * Remove all auth tokens owned by request.user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLogoutRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountLogoutRetrieve(params?: {
  }): Promise<Observable<void>> {

    return (await this.accountLogoutRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountLogoutFormattedRetrieve
   */
  static readonly AccountLogoutFormattedRetrievePath = '/api/v1/account/logout{format}';

  /**
   * Remove all auth tokens owned by request.user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLogoutFormattedRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountLogoutFormattedRetrieve$Response(params: {
    format: '.json';
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountLogoutFormattedRetrievePath, 'get');
    if (params) {
      rb.path('format', params.format, {});
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
   * Remove all auth tokens owned by request.user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountLogoutFormattedRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountLogoutFormattedRetrieve(params: {
    format: '.json';
  }): Promise<Observable<void>> {

    return (await this.accountLogoutFormattedRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountPasswordChangeCreate
   */
  static readonly AccountPasswordChangeCreatePath = '/api/v1/account/password/change/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordChangeCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordChangeCreate$Json$Response(params: {
    body: PasswordChange
  }): Promise<Observable<StrictHttpResponse<PasswordChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordChangeCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordChangeCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordChangeCreate$Json(params: {
    body: PasswordChange
  }): Promise<Observable<PasswordChange>> {

    return (await this.accountPasswordChangeCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordChange>) => r.body as PasswordChange)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordChangeCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordChangeCreate$XWwwFormUrlencoded$Response(params: {
    body: PasswordChange
  }): Promise<Observable<StrictHttpResponse<PasswordChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordChangeCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordChangeCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordChangeCreate$XWwwFormUrlencoded(params: {
    body: PasswordChange
  }): Promise<Observable<PasswordChange>> {

    return (await this.accountPasswordChangeCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordChange>) => r.body as PasswordChange)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordChangeCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordChangeCreate$FormData$Response(params: {
    body: PasswordChange
  }): Promise<Observable<StrictHttpResponse<PasswordChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordChangeCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordChangeCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordChangeCreate$FormData(params: {
    body: PasswordChange
  }): Promise<Observable<PasswordChange>> {

    return (await this.accountPasswordChangeCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordChange>) => r.body as PasswordChange)
    );
  }

  /**
   * Path part for operation accountPasswordChangeFormattedCreate
   */
  static readonly AccountPasswordChangeFormattedCreatePath = '/api/v1/account/password/change{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordChangeFormattedCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordChangeFormattedCreate$Json$Response(params: {
    format: '.json';
    body: PasswordChange
  }): Promise<Observable<StrictHttpResponse<PasswordChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordChangeFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordChangeFormattedCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordChangeFormattedCreate$Json(params: {
    format: '.json';
    body: PasswordChange
  }): Promise<Observable<PasswordChange>> {

    return (await this.accountPasswordChangeFormattedCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordChange>) => r.body as PasswordChange)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordChangeFormattedCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordChangeFormattedCreate$XWwwFormUrlencoded$Response(params: {
    format: '.json';
    body: PasswordChange
  }): Promise<Observable<StrictHttpResponse<PasswordChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordChangeFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordChangeFormattedCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordChangeFormattedCreate$XWwwFormUrlencoded(params: {
    format: '.json';
    body: PasswordChange
  }): Promise<Observable<PasswordChange>> {

    return (await this.accountPasswordChangeFormattedCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordChange>) => r.body as PasswordChange)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordChangeFormattedCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordChangeFormattedCreate$FormData$Response(params: {
    format: '.json';
    body: PasswordChange
  }): Promise<Observable<StrictHttpResponse<PasswordChange>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordChangeFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordChange>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordChangeFormattedCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordChangeFormattedCreate$FormData(params: {
    format: '.json';
    body: PasswordChange
  }): Promise<Observable<PasswordChange>> {

    return (await this.accountPasswordChangeFormattedCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordChange>) => r.body as PasswordChange)
    );
  }

  /**
   * Path part for operation accountPasswordResetCreate
   */
  static readonly AccountPasswordResetCreatePath = '/api/v1/account/password/reset/';

  /**
   * Reset the password for the user account.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordResetCreate$Json$Response(params: {
    body: PasswordReset
  }): Promise<Observable<StrictHttpResponse<PasswordReset>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordReset>;
      })
    );
  }

  /**
   * Reset the password for the user account.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordResetCreate$Json(params: {
    body: PasswordReset
  }): Promise<Observable<PasswordReset>> {

    return (await this.accountPasswordResetCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordReset>) => r.body as PasswordReset)
    );
  }

  /**
   * Reset the password for the user account.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordResetCreate$XWwwFormUrlencoded$Response(params: {
    body: PasswordReset
  }): Promise<Observable<StrictHttpResponse<PasswordReset>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordReset>;
      })
    );
  }

  /**
   * Reset the password for the user account.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordResetCreate$XWwwFormUrlencoded(params: {
    body: PasswordReset
  }): Promise<Observable<PasswordReset>> {

    return (await this.accountPasswordResetCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordReset>) => r.body as PasswordReset)
    );
  }

  /**
   * Reset the password for the user account.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordResetCreate$FormData$Response(params: {
    body: PasswordReset
  }): Promise<Observable<StrictHttpResponse<PasswordReset>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordReset>;
      })
    );
  }

  /**
   * Reset the password for the user account.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordResetCreate$FormData(params: {
    body: PasswordReset
  }): Promise<Observable<PasswordReset>> {

    return (await this.accountPasswordResetCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordReset>) => r.body as PasswordReset)
    );
  }

  /**
   * Path part for operation accountPasswordResetFormattedCreate
   */
  static readonly AccountPasswordResetFormattedCreatePath = '/api/v1/account/password/reset{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetFormattedCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordResetFormattedCreate$Json$Response(params: {
    format: '.json';
    body: PasswordReset
  }): Promise<Observable<StrictHttpResponse<PasswordReset>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordReset>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetFormattedCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordResetFormattedCreate$Json(params: {
    format: '.json';
    body: PasswordReset
  }): Promise<Observable<PasswordReset>> {

    return (await this.accountPasswordResetFormattedCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordReset>) => r.body as PasswordReset)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetFormattedCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordResetFormattedCreate$XWwwFormUrlencoded$Response(params: {
    format: '.json';
    body: PasswordReset
  }): Promise<Observable<StrictHttpResponse<PasswordReset>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordReset>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetFormattedCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordResetFormattedCreate$XWwwFormUrlencoded(params: {
    format: '.json';
    body: PasswordReset
  }): Promise<Observable<PasswordReset>> {

    return (await this.accountPasswordResetFormattedCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordReset>) => r.body as PasswordReset)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetFormattedCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordResetFormattedCreate$FormData$Response(params: {
    format: '.json';
    body: PasswordReset
  }): Promise<Observable<StrictHttpResponse<PasswordReset>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordReset>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetFormattedCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordResetFormattedCreate$FormData(params: {
    format: '.json';
    body: PasswordReset
  }): Promise<Observable<PasswordReset>> {

    return (await this.accountPasswordResetFormattedCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordReset>) => r.body as PasswordReset)
    );
  }

  /**
   * Path part for operation accountPasswordResetVerifiedCreate
   */
  static readonly AccountPasswordResetVerifiedCreatePath = '/api/v1/account/password/reset/verified/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetVerifiedCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordResetVerifiedCreate$Json$Response(params: {
    body: PasswordResetVerified
  }): Promise<Observable<StrictHttpResponse<PasswordResetVerified>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetVerifiedCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordResetVerified>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetVerifiedCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordResetVerifiedCreate$Json(params: {
    body: PasswordResetVerified
  }): Promise<Observable<PasswordResetVerified>> {

    return (await this.accountPasswordResetVerifiedCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordResetVerified>) => r.body as PasswordResetVerified)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetVerifiedCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordResetVerifiedCreate$XWwwFormUrlencoded$Response(params: {
    body: PasswordResetVerified
  }): Promise<Observable<StrictHttpResponse<PasswordResetVerified>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetVerifiedCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordResetVerified>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetVerifiedCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordResetVerifiedCreate$XWwwFormUrlencoded(params: {
    body: PasswordResetVerified
  }): Promise<Observable<PasswordResetVerified>> {

    return (await this.accountPasswordResetVerifiedCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordResetVerified>) => r.body as PasswordResetVerified)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetVerifiedCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordResetVerifiedCreate$FormData$Response(params: {
    body: PasswordResetVerified
  }): Promise<Observable<StrictHttpResponse<PasswordResetVerified>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetVerifiedCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordResetVerified>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetVerifiedCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordResetVerifiedCreate$FormData(params: {
    body: PasswordResetVerified
  }): Promise<Observable<PasswordResetVerified>> {

    return (await this.accountPasswordResetVerifiedCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordResetVerified>) => r.body as PasswordResetVerified)
    );
  }

  /**
   * Path part for operation accountPasswordResetVerifiedFormattedCreate
   */
  static readonly AccountPasswordResetVerifiedFormattedCreatePath = '/api/v1/account/password/reset/verified{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetVerifiedFormattedCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordResetVerifiedFormattedCreate$Json$Response(params: {
    format: '.json';
    body: PasswordResetVerified
  }): Promise<Observable<StrictHttpResponse<PasswordResetVerified>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetVerifiedFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordResetVerified>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetVerifiedFormattedCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountPasswordResetVerifiedFormattedCreate$Json(params: {
    format: '.json';
    body: PasswordResetVerified
  }): Promise<Observable<PasswordResetVerified>> {

    return (await this.accountPasswordResetVerifiedFormattedCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordResetVerified>) => r.body as PasswordResetVerified)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetVerifiedFormattedCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordResetVerifiedFormattedCreate$XWwwFormUrlencoded$Response(params: {
    format: '.json';
    body: PasswordResetVerified
  }): Promise<Observable<StrictHttpResponse<PasswordResetVerified>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetVerifiedFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordResetVerified>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetVerifiedFormattedCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountPasswordResetVerifiedFormattedCreate$XWwwFormUrlencoded(params: {
    format: '.json';
    body: PasswordResetVerified
  }): Promise<Observable<PasswordResetVerified>> {

    return (await this.accountPasswordResetVerifiedFormattedCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordResetVerified>) => r.body as PasswordResetVerified)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetVerifiedFormattedCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordResetVerifiedFormattedCreate$FormData$Response(params: {
    format: '.json';
    body: PasswordResetVerified
  }): Promise<Observable<StrictHttpResponse<PasswordResetVerified>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetVerifiedFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PasswordResetVerified>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountPasswordResetVerifiedFormattedCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountPasswordResetVerifiedFormattedCreate$FormData(params: {
    format: '.json';
    body: PasswordResetVerified
  }): Promise<Observable<PasswordResetVerified>> {

    return (await this.accountPasswordResetVerifiedFormattedCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<PasswordResetVerified>) => r.body as PasswordResetVerified)
    );
  }

  /**
   * Path part for operation accountPasswordResetVerifyRetrieve
   */
  static readonly AccountPasswordResetVerifyRetrievePath = '/api/v1/account/password/reset/verify/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetVerifyRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountPasswordResetVerifyRetrieve$Response(params?: {
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetVerifyRetrievePath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `accountPasswordResetVerifyRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountPasswordResetVerifyRetrieve(params?: {
  }): Promise<Observable<void>> {

    return (await this.accountPasswordResetVerifyRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountPasswordResetVerifyFormattedRetrieve
   */
  static readonly AccountPasswordResetVerifyFormattedRetrievePath = '/api/v1/account/password/reset/verify{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPasswordResetVerifyFormattedRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountPasswordResetVerifyFormattedRetrieve$Response(params: {
    format: '.json';
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountPasswordResetVerifyFormattedRetrievePath, 'get');
    if (params) {
      rb.path('format', params.format, {});
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
   * To access the full response (for headers, for example), `accountPasswordResetVerifyFormattedRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountPasswordResetVerifyFormattedRetrieve(params: {
    format: '.json';
  }): Promise<Observable<void>> {

    return (await this.accountPasswordResetVerifyFormattedRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountSignupCreate
   */
  static readonly AccountSignupCreatePath = '/api/v1/account/signup/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountSignupCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountSignupCreate$Json$Response(params: {
    body: UserSignUp
  }): Promise<Observable<StrictHttpResponse<UserSignUp>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountSignupCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserSignUp>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountSignupCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountSignupCreate$Json(params: {
    body: UserSignUp
  }): Promise<Observable<UserSignUp>> {

    return (await this.accountSignupCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<UserSignUp>) => r.body as UserSignUp)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountSignupCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountSignupCreate$XWwwFormUrlencoded$Response(params: {
    body: UserSignUp
  }): Promise<Observable<StrictHttpResponse<UserSignUp>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountSignupCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserSignUp>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountSignupCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountSignupCreate$XWwwFormUrlencoded(params: {
    body: UserSignUp
  }): Promise<Observable<UserSignUp>> {

    return (await this.accountSignupCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<UserSignUp>) => r.body as UserSignUp)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountSignupCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountSignupCreate$FormData$Response(params: {
    body: UserSignUp
  }): Promise<Observable<StrictHttpResponse<UserSignUp>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountSignupCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserSignUp>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountSignupCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountSignupCreate$FormData(params: {
    body: UserSignUp
  }): Promise<Observable<UserSignUp>> {

    return (await this.accountSignupCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<UserSignUp>) => r.body as UserSignUp)
    );
  }

  /**
   * Path part for operation accountSignupFormattedCreate
   */
  static readonly AccountSignupFormattedCreatePath = '/api/v1/account/signup{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountSignupFormattedCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountSignupFormattedCreate$Json$Response(params: {
    format: '.json';
    body: Signup
  }): Promise<Observable<StrictHttpResponse<Signup>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountSignupFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Signup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountSignupFormattedCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountSignupFormattedCreate$Json(params: {
    format: '.json';
    body: Signup
  }): Promise<Observable<Signup>> {

    return (await this.accountSignupFormattedCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<Signup>) => r.body as Signup)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountSignupFormattedCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountSignupFormattedCreate$XWwwFormUrlencoded$Response(params: {
    format: '.json';
    body: Signup
  }): Promise<Observable<StrictHttpResponse<Signup>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountSignupFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Signup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountSignupFormattedCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountSignupFormattedCreate$XWwwFormUrlencoded(params: {
    format: '.json';
    body: Signup
  }): Promise<Observable<Signup>> {

    return (await this.accountSignupFormattedCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<Signup>) => r.body as Signup)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountSignupFormattedCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountSignupFormattedCreate$FormData$Response(params: {
    format: '.json';
    body: Signup
  }): Promise<Observable<StrictHttpResponse<Signup>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountSignupFormattedCreatePath, 'post');
    if (params) {
      rb.path('format', params.format, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Signup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountSignupFormattedCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountSignupFormattedCreate$FormData(params: {
    format: '.json';
    body: Signup
  }): Promise<Observable<Signup>> {

    return (await this.accountSignupFormattedCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<Signup>) => r.body as Signup)
    );
  }

  /**
   * Path part for operation accountSignupVerifyRetrieve
   */
  static readonly AccountSignupVerifyRetrievePath = '/api/v1/account/signup/verify/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountSignupVerifyRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountSignupVerifyRetrieve$Response(params?: {
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountSignupVerifyRetrievePath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `accountSignupVerifyRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountSignupVerifyRetrieve(params?: {
  }): Promise<Observable<void>> {

    return (await this.accountSignupVerifyRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountSignupVerifyFormattedRetrieve
   */
  static readonly AccountSignupVerifyFormattedRetrievePath = '/api/v1/account/signup/verify{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountSignupVerifyFormattedRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountSignupVerifyFormattedRetrieve$Response(params: {
    format: '.json';
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountSignupVerifyFormattedRetrievePath, 'get');
    if (params) {
      rb.path('format', params.format, {});
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
   * To access the full response (for headers, for example), `accountSignupVerifyFormattedRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountSignupVerifyFormattedRetrieve(params: {
    format: '.json';
  }): Promise<Observable<void>> {

    return (await this.accountSignupVerifyFormattedRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountUserRetrieve
   */
  static readonly AccountUserRetrievePath = '/api/v1/account/user/{id}/';

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserRetrieve$Response(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
  }): Promise<Observable<StrictHttpResponse<UserProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserProfile>;
      })
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserRetrieve(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
  }): Promise<Observable<UserProfile>> {

    return (await this.accountUserRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<UserProfile>) => r.body as UserProfile)
    );
  }

  /**
   * Path part for operation accountUserUpdate
   */
  static readonly AccountUserUpdatePath = '/api/v1/account/user/{id}/';

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserUpdate$Json$Response(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body: User
  }): Promise<Observable<StrictHttpResponse<UserProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserUpdatePath, 'put');
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
        return r as StrictHttpResponse<UserProfile>;
      })
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserUpdate$Json(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body: User
  }): Promise<Observable<UserProfile>> {

    return (await this.accountUserUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<UserProfile>) => r.body as UserProfile)
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body: User
  }): Promise<Observable<StrictHttpResponse<UserProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserUpdatePath, 'put');
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
        return r as StrictHttpResponse<UserProfile>;
      })
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserUpdate$XWwwFormUrlencoded(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body: User
  }): Promise<Observable<UserProfile>> {

    return (await this.accountUserUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<UserProfile>) => r.body as UserProfile)
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserUpdate$FormData$Response(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body: User
  }): Promise<Observable<StrictHttpResponse<UserProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserUpdatePath, 'put');
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
        return r as StrictHttpResponse<UserProfile>;
      })
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserUpdate$FormData(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body: User
  }): Promise<Observable<UserProfile>> {

    return (await this.accountUserUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<UserProfile>) => r.body as UserProfile)
    );
  }

  /**
   * Path part for operation accountUserPartialUpdate
   */
  static readonly AccountUserPartialUpdatePath = '/api/v1/account/user/{id}/';

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserPartialUpdate$Json$Response(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body?: PatchedUser
  }): Promise<Observable<StrictHttpResponse<UserProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserPartialUpdatePath, 'patch');
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
        return r as StrictHttpResponse<UserProfile>;
      })
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserPartialUpdate$Json(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body?: PatchedUser
  }): Promise<Observable<UserProfile>> {

    return (await this.accountUserPartialUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<UserProfile>) => r.body as UserProfile)
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserPartialUpdate$XWwwFormUrlencoded$Response(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body?: PatchedUser
  }): Promise<Observable<StrictHttpResponse<UserProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserPartialUpdatePath, 'patch');
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
        return r as StrictHttpResponse<UserProfile>;
      })
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserPartialUpdate$XWwwFormUrlencoded(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body?: PatchedUser
  }): Promise<Observable<UserProfile>> {

    return (await this.accountUserPartialUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<UserProfile>) => r.body as UserProfile)
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserPartialUpdate$FormData$Response(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body?: PatchedUser
  }): Promise<Observable<StrictHttpResponse<UserProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserPartialUpdatePath, 'patch');
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
        return r as StrictHttpResponse<UserProfile>;
      })
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserPartialUpdate$FormData(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body?: PatchedUser
  }): Promise<Observable<UserProfile>> {

    return (await this.accountUserPartialUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<UserProfile>) => r.body as UserProfile)
    );
  }

  /**
   * Path part for operation accountUserEmployeesRetrieve
   */
  static readonly AccountUserEmployeesRetrievePath = '/api/v1/account/user/{id}/employees/';

  /**
   * Returns the list of all the employees a user manages.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserEmployeesRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserEmployeesRetrieve$Response(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
  }): Promise<Observable<StrictHttpResponse<Employees>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserEmployeesRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Employees>;
      })
    );
  }

  /**
   * Returns the list of all the employees a user manages.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserEmployeesRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserEmployeesRetrieve(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
  }): Promise<Observable<Employees>> {

    return (await this.accountUserEmployeesRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<Employees>) => r.body as Employees)
    );
  }

  /**
   * Path part for operation accountUserProfilePictureUpdate
   */
  static readonly AccountUserProfilePictureUpdatePath = '/api/v1/account/user/{id}/profile_picture/';

  /**
   * Endpoint to upload a profile picture, overrides the previous
   * picture if any. A user needs to have a profile before uploading.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserProfilePictureUpdate()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserProfilePictureUpdate$Response(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body: User
  }): Promise<Observable<StrictHttpResponse<UserProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserProfilePictureUpdatePath, 'put');
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
        return r as StrictHttpResponse<UserProfile>;
      })
    );
  }

  /**
   * Endpoint to upload a profile picture, overrides the previous
   * picture if any. A user needs to have a profile before uploading.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserProfilePictureUpdate$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserProfilePictureUpdate(params: {

    /**
     * A UUID string identifying this user.
     */
    id: string;
    body: User
  }): Promise<Observable<UserProfile>> {

    return (await this.accountUserProfilePictureUpdate$Response(params)).pipe(
      map((r: StrictHttpResponse<UserProfile>) => r.body as UserProfile)
    );
  }

  /**
   * Path part for operation accountUserDevicesList
   */
  static readonly AccountUserDevicesListPath = '/api/v1/account/user/devices/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesList()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserDevicesList$Response(params?: {

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<StrictHttpResponse<PaginatedFcmDeviceList>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesListPath, 'get');
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
        return r as StrictHttpResponse<PaginatedFcmDeviceList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserDevicesList(params?: {

    /**
     * A page number within the paginated result set.
     */
    page?: number;

    /**
     * Number of results to return per page.
     */
    page_size?: number;
  }): Promise<Observable<PaginatedFcmDeviceList>> {

    return (await this.accountUserDevicesList$Response(params)).pipe(
      map((r: StrictHttpResponse<PaginatedFcmDeviceList>) => r.body as PaginatedFcmDeviceList)
    );
  }

  /**
   * Path part for operation accountUserDevicesCreate
   */
  static readonly AccountUserDevicesCreatePath = '/api/v1/account/user/devices/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserDevicesCreate$Json$Response(params: {
    body: FcmDevice
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserDevicesCreate$Json(params: {
    body: FcmDevice
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesCreate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserDevicesCreate$XWwwFormUrlencoded$Response(params: {
    body: FcmDevice
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserDevicesCreate$XWwwFormUrlencoded(params: {
    body: FcmDevice
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesCreate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserDevicesCreate$FormData$Response(params: {
    body: FcmDevice
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserDevicesCreate$FormData(params: {
    body: FcmDevice
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesCreate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * Path part for operation accountUserDevicesRetrieve
   */
  static readonly AccountUserDevicesRetrievePath = '/api/v1/account/user/devices/{registration_id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserDevicesRetrieve$Response(params: {
    registration_id: string;
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesRetrievePath, 'get');
    if (params) {
      rb.path('registration_id', params.registration_id, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserDevicesRetrieve(params: {
    registration_id: string;
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * Path part for operation accountUserDevicesUpdate
   */
  static readonly AccountUserDevicesUpdatePath = '/api/v1/account/user/devices/{registration_id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserDevicesUpdate$Json$Response(params: {
    registration_id: string;
    body: FcmDevice
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesUpdatePath, 'put');
    if (params) {
      rb.path('registration_id', params.registration_id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserDevicesUpdate$Json(params: {
    registration_id: string;
    body: FcmDevice
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserDevicesUpdate$XWwwFormUrlencoded$Response(params: {
    registration_id: string;
    body: FcmDevice
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesUpdatePath, 'put');
    if (params) {
      rb.path('registration_id', params.registration_id, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserDevicesUpdate$XWwwFormUrlencoded(params: {
    registration_id: string;
    body: FcmDevice
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserDevicesUpdate$FormData$Response(params: {
    registration_id: string;
    body: FcmDevice
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesUpdatePath, 'put');
    if (params) {
      rb.path('registration_id', params.registration_id, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserDevicesUpdate$FormData(params: {
    registration_id: string;
    body: FcmDevice
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * Path part for operation accountUserDevicesDestroy
   */
  static readonly AccountUserDevicesDestroyPath = '/api/v1/account/user/devices/{registration_id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserDevicesDestroy$Response(params: {
    registration_id: string;
  }): Promise<Observable<StrictHttpResponse<void>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesDestroyPath, 'delete');
    if (params) {
      rb.path('registration_id', params.registration_id, {});
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
   * To access the full response (for headers, for example), `accountUserDevicesDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserDevicesDestroy(params: {
    registration_id: string;
  }): Promise<Observable<void>> {

    return (await this.accountUserDevicesDestroy$Response(params)).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountUserDevicesPartialUpdate
   */
  static readonly AccountUserDevicesPartialUpdatePath = '/api/v1/account/user/devices/{registration_id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserDevicesPartialUpdate$Json$Response(params: {
    registration_id: string;
    body?: PatchedFcmDevice
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesPartialUpdatePath, 'patch');
    if (params) {
      rb.path('registration_id', params.registration_id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  async accountUserDevicesPartialUpdate$Json(params: {
    registration_id: string;
    body?: PatchedFcmDevice
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesPartialUpdate$Json$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserDevicesPartialUpdate$XWwwFormUrlencoded$Response(params: {
    registration_id: string;
    body?: PatchedFcmDevice
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesPartialUpdatePath, 'patch');
    if (params) {
      rb.path('registration_id', params.registration_id, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  async accountUserDevicesPartialUpdate$XWwwFormUrlencoded(params: {
    registration_id: string;
    body?: PatchedFcmDevice
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesPartialUpdate$XWwwFormUrlencoded$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserDevicesPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserDevicesPartialUpdate$FormData$Response(params: {
    registration_id: string;
    body?: PatchedFcmDevice
  }): Promise<Observable<StrictHttpResponse<FcmDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserDevicesPartialUpdatePath, 'patch');
    if (params) {
      rb.path('registration_id', params.registration_id, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FcmDevice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserDevicesPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  async accountUserDevicesPartialUpdate$FormData(params: {
    registration_id: string;
    body?: PatchedFcmDevice
  }): Promise<Observable<FcmDevice>> {

    return (await this.accountUserDevicesPartialUpdate$FormData$Response(params)).pipe(
      map((r: StrictHttpResponse<FcmDevice>) => r.body as FcmDevice)
    );
  }

  /**
   * Path part for operation accountUserMeRetrieve
   */
  static readonly AccountUserMeRetrievePath = '/api/v1/account/user/me/';

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUserMeRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserMeRetrieve$Response(params?: {
  }): Promise<Observable<StrictHttpResponse<UserProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUserMeRetrievePath, 'get');

   

//     const authService = new AuthService(null, null, null, null);
//           var tk =  authService.getToken();
// tk.then((a)=>{
// console.log("tokk",a)
// // rb.header("Authorization", "Token 2cc443fc9d658a77cdc53dfe8ba53bb28cb73f5f");

// // rb.header("Content-Type", 'application/json');
// // headers.append('Content-Type', 'application/json')
// //     headers.append('Authorization', 'JWT ' + token.token)
// });
  

    if (params) {
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserProfile>;
      })
    );
  }

  /**
   * Updates and retrieves user accounts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUserMeRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUserMeRetrieve(params?: {
  }): Promise<Observable<UserProfile>> {

    return (await this.accountUserMeRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<UserProfile>) => r.body as UserProfile)
    );
  }

  /**
   * Path part for operation accountUsersMeRetrieve
   */
  static readonly AccountUsersMeRetrievePath = '/api/v1/account/users/me/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUsersMeRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUsersMeRetrieve$Response(params?: {
  }): Promise<Observable<StrictHttpResponse<User>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUsersMeRetrievePath, 'get');
    if (params) {
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUsersMeRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUsersMeRetrieve(params?: {
  }): Promise<Observable<User>> {

    return (await this.accountUsersMeRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation accountUsersMeFormattedRetrieve
   */
  static readonly AccountUsersMeFormattedRetrievePath = '/api/v1/account/users/me{format}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUsersMeFormattedRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUsersMeFormattedRetrieve$Response(params: {
    format: '.json';
  }): Promise<Observable<StrictHttpResponse<User>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.AccountUsersMeFormattedRetrievePath, 'get');
    if (params) {
      rb.path('format', params.format, {});
    }

    return this.http.request(await rb.build({
        responseType: 'json',
        accept: 'application/json'
      })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountUsersMeFormattedRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  async accountUsersMeFormattedRetrieve(params: {
    format: '.json';
  }): Promise<Observable<User>> {

    return (await this.accountUsersMeFormattedRetrieve$Response(params)).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

}
