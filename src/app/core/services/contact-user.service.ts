/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiContactUserAddContactUserPost$Json } from '../fn/contact-user/api-contact-user-add-contact-user-post-json';
import { ApiContactUserAddContactUserPost$Json$Params } from '../fn/contact-user/api-contact-user-add-contact-user-post-json';
import { apiContactUserAddContactUserPost$Plain } from '../fn/contact-user/api-contact-user-add-contact-user-post-plain';
import { ApiContactUserAddContactUserPost$Plain$Params } from '../fn/contact-user/api-contact-user-add-contact-user-post-plain';
import { apiContactUserChangeContactUserStatusPatch$Json } from '../fn/contact-user/api-contact-user-change-contact-user-status-patch-json';
import { ApiContactUserChangeContactUserStatusPatch$Json$Params } from '../fn/contact-user/api-contact-user-change-contact-user-status-patch-json';
import { apiContactUserChangeContactUserStatusPatch$Plain } from '../fn/contact-user/api-contact-user-change-contact-user-status-patch-plain';
import { ApiContactUserChangeContactUserStatusPatch$Plain$Params } from '../fn/contact-user/api-contact-user-change-contact-user-status-patch-plain';
import { apiContactUserDeleteContactUserIdDelete$Json } from '../fn/contact-user/api-contact-user-delete-contact-user-id-delete-json';
import { ApiContactUserDeleteContactUserIdDelete$Json$Params } from '../fn/contact-user/api-contact-user-delete-contact-user-id-delete-json';
import { apiContactUserDeleteContactUserIdDelete$Plain } from '../fn/contact-user/api-contact-user-delete-contact-user-id-delete-plain';
import { ApiContactUserDeleteContactUserIdDelete$Plain$Params } from '../fn/contact-user/api-contact-user-delete-contact-user-id-delete-plain';
import { apiContactUserGetContactUserByIdIdGet$Json } from '../fn/contact-user/api-contact-user-get-contact-user-by-id-id-get-json';
import { ApiContactUserGetContactUserByIdIdGet$Json$Params } from '../fn/contact-user/api-contact-user-get-contact-user-by-id-id-get-json';
import { apiContactUserGetContactUserByIdIdGet$Plain } from '../fn/contact-user/api-contact-user-get-contact-user-by-id-id-get-plain';
import { ApiContactUserGetContactUserByIdIdGet$Plain$Params } from '../fn/contact-user/api-contact-user-get-contact-user-by-id-id-get-plain';
import { apiContactUserGetContactUserByStatusGet$Json } from '../fn/contact-user/api-contact-user-get-contact-user-by-status-get-json';
import { ApiContactUserGetContactUserByStatusGet$Json$Params } from '../fn/contact-user/api-contact-user-get-contact-user-by-status-get-json';
import { apiContactUserGetContactUserByStatusGet$Plain } from '../fn/contact-user/api-contact-user-get-contact-user-by-status-get-plain';
import { ApiContactUserGetContactUserByStatusGet$Plain$Params } from '../fn/contact-user/api-contact-user-get-contact-user-by-status-get-plain';
import { apiContactUserGetContactUserGet$Json } from '../fn/contact-user/api-contact-user-get-contact-user-get-json';
import { ApiContactUserGetContactUserGet$Json$Params } from '../fn/contact-user/api-contact-user-get-contact-user-get-json';
import { apiContactUserGetContactUserGet$Plain } from '../fn/contact-user/api-contact-user-get-contact-user-get-plain';
import { ApiContactUserGetContactUserGet$Plain$Params } from '../fn/contact-user/api-contact-user-get-contact-user-get-plain';
import { ContactUsUser } from '../models/contact-us-user';
import { ContactUsUserListPaginationResult } from '../models/contact-us-user-list-pagination-result';

@Injectable({ providedIn: 'root' })
export class ContactUserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiContactUserAddContactUserPost()` */
  static readonly ApiContactUserAddContactUserPostPath = '/api/ContactUser/AddContactUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserAddContactUserPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactUserAddContactUserPost$Plain$Response(params?: ApiContactUserAddContactUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiContactUserAddContactUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserAddContactUserPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactUserAddContactUserPost$Plain(params?: ApiContactUserAddContactUserPost$Plain$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiContactUserAddContactUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserAddContactUserPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactUserAddContactUserPost$Json$Response(params?: ApiContactUserAddContactUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiContactUserAddContactUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserAddContactUserPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactUserAddContactUserPost$Json(params?: ApiContactUserAddContactUserPost$Json$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiContactUserAddContactUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

  /** Path part for operation `apiContactUserChangeContactUserStatusPatch()` */
  static readonly ApiContactUserChangeContactUserStatusPatchPath = '/api/ContactUser/ChangeContactUserStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserChangeContactUserStatusPatch$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserChangeContactUserStatusPatch$Plain$Response(params?: ApiContactUserChangeContactUserStatusPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiContactUserChangeContactUserStatusPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserChangeContactUserStatusPatch$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserChangeContactUserStatusPatch$Plain(params?: ApiContactUserChangeContactUserStatusPatch$Plain$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiContactUserChangeContactUserStatusPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserChangeContactUserStatusPatch$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserChangeContactUserStatusPatch$Json$Response(params?: ApiContactUserChangeContactUserStatusPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiContactUserChangeContactUserStatusPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserChangeContactUserStatusPatch$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserChangeContactUserStatusPatch$Json(params?: ApiContactUserChangeContactUserStatusPatch$Json$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiContactUserChangeContactUserStatusPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

  /** Path part for operation `apiContactUserGetContactUserGet()` */
  static readonly ApiContactUserGetContactUserGetPath = '/api/ContactUser/GetContactUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserGetContactUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserGet$Plain$Response(params?: ApiContactUserGetContactUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUserListPaginationResult>> {
    return apiContactUserGetContactUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserGetContactUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserGet$Plain(params?: ApiContactUserGetContactUserGet$Plain$Params, context?: HttpContext): Observable<ContactUsUserListPaginationResult> {
    return this.apiContactUserGetContactUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUserListPaginationResult>): ContactUsUserListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserGetContactUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserGet$Json$Response(params?: ApiContactUserGetContactUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUserListPaginationResult>> {
    return apiContactUserGetContactUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserGetContactUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserGet$Json(params?: ApiContactUserGetContactUserGet$Json$Params, context?: HttpContext): Observable<ContactUsUserListPaginationResult> {
    return this.apiContactUserGetContactUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUserListPaginationResult>): ContactUsUserListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiContactUserGetContactUserByIdIdGet()` */
  static readonly ApiContactUserGetContactUserByIdIdGetPath = '/api/ContactUser/GetContactUserById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserGetContactUserByIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserByIdIdGet$Plain$Response(params: ApiContactUserGetContactUserByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiContactUserGetContactUserByIdIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserGetContactUserByIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserByIdIdGet$Plain(params: ApiContactUserGetContactUserByIdIdGet$Plain$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiContactUserGetContactUserByIdIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserGetContactUserByIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserByIdIdGet$Json$Response(params: ApiContactUserGetContactUserByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiContactUserGetContactUserByIdIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserGetContactUserByIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserByIdIdGet$Json(params: ApiContactUserGetContactUserByIdIdGet$Json$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiContactUserGetContactUserByIdIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

  /** Path part for operation `apiContactUserGetContactUserByStatusGet()` */
  static readonly ApiContactUserGetContactUserByStatusGetPath = '/api/ContactUser/GetContactUserByStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserGetContactUserByStatusGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserByStatusGet$Plain$Response(params?: ApiContactUserGetContactUserByStatusGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactUsUser>>> {
    return apiContactUserGetContactUserByStatusGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserGetContactUserByStatusGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserByStatusGet$Plain(params?: ApiContactUserGetContactUserByStatusGet$Plain$Params, context?: HttpContext): Observable<Array<ContactUsUser>> {
    return this.apiContactUserGetContactUserByStatusGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContactUsUser>>): Array<ContactUsUser> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserGetContactUserByStatusGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserByStatusGet$Json$Response(params?: ApiContactUserGetContactUserByStatusGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactUsUser>>> {
    return apiContactUserGetContactUserByStatusGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserGetContactUserByStatusGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserGetContactUserByStatusGet$Json(params?: ApiContactUserGetContactUserByStatusGet$Json$Params, context?: HttpContext): Observable<Array<ContactUsUser>> {
    return this.apiContactUserGetContactUserByStatusGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContactUsUser>>): Array<ContactUsUser> => r.body)
    );
  }

  /** Path part for operation `apiContactUserDeleteContactUserIdDelete()` */
  static readonly ApiContactUserDeleteContactUserIdDeletePath = '/api/ContactUser/DeleteContactUser/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserDeleteContactUserIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserDeleteContactUserIdDelete$Plain$Response(params: ApiContactUserDeleteContactUserIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiContactUserDeleteContactUserIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserDeleteContactUserIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserDeleteContactUserIdDelete$Plain(params: ApiContactUserDeleteContactUserIdDelete$Plain$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiContactUserDeleteContactUserIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactUserDeleteContactUserIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserDeleteContactUserIdDelete$Json$Response(params: ApiContactUserDeleteContactUserIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiContactUserDeleteContactUserIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactUserDeleteContactUserIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactUserDeleteContactUserIdDelete$Json(params: ApiContactUserDeleteContactUserIdDelete$Json$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiContactUserDeleteContactUserIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

}
