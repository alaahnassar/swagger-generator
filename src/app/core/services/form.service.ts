/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiFormAddFormInfoPost$Json } from '../fn/form/api-form-add-form-info-post-json';
import { ApiFormAddFormInfoPost$Json$Params } from '../fn/form/api-form-add-form-info-post-json';
import { apiFormAddFormInfoPost$Plain } from '../fn/form/api-form-add-form-info-post-plain';
import { ApiFormAddFormInfoPost$Plain$Params } from '../fn/form/api-form-add-form-info-post-plain';
import { apiFormChangeFormStatusPatch$Json } from '../fn/form/api-form-change-form-status-patch-json';
import { ApiFormChangeFormStatusPatch$Json$Params } from '../fn/form/api-form-change-form-status-patch-json';
import { apiFormChangeFormStatusPatch$Plain } from '../fn/form/api-form-change-form-status-patch-plain';
import { ApiFormChangeFormStatusPatch$Plain$Params } from '../fn/form/api-form-change-form-status-patch-plain';
import { apiFormDeleteFormInfoIdDelete$Json } from '../fn/form/api-form-delete-form-info-id-delete-json';
import { ApiFormDeleteFormInfoIdDelete$Json$Params } from '../fn/form/api-form-delete-form-info-id-delete-json';
import { apiFormDeleteFormInfoIdDelete$Plain } from '../fn/form/api-form-delete-form-info-id-delete-plain';
import { ApiFormDeleteFormInfoIdDelete$Plain$Params } from '../fn/form/api-form-delete-form-info-id-delete-plain';
import { apiFormGetFormByStatusGet$Json } from '../fn/form/api-form-get-form-by-status-get-json';
import { ApiFormGetFormByStatusGet$Json$Params } from '../fn/form/api-form-get-form-by-status-get-json';
import { apiFormGetFormByStatusGet$Plain } from '../fn/form/api-form-get-form-by-status-get-plain';
import { ApiFormGetFormByStatusGet$Plain$Params } from '../fn/form/api-form-get-form-by-status-get-plain';
import { apiFormGetFormInfoByIdIdGet$Json } from '../fn/form/api-form-get-form-info-by-id-id-get-json';
import { ApiFormGetFormInfoByIdIdGet$Json$Params } from '../fn/form/api-form-get-form-info-by-id-id-get-json';
import { apiFormGetFormInfoByIdIdGet$Plain } from '../fn/form/api-form-get-form-info-by-id-id-get-plain';
import { ApiFormGetFormInfoByIdIdGet$Plain$Params } from '../fn/form/api-form-get-form-info-by-id-id-get-plain';
import { apiFormGetFormInfoGet$Json } from '../fn/form/api-form-get-form-info-get-json';
import { ApiFormGetFormInfoGet$Json$Params } from '../fn/form/api-form-get-form-info-get-json';
import { apiFormGetFormInfoGet$Plain } from '../fn/form/api-form-get-form-info-get-plain';
import { ApiFormGetFormInfoGet$Plain$Params } from '../fn/form/api-form-get-form-info-get-plain';
import { ContactUsUser } from '../models/contact-us-user';
import { FormInfo } from '../models/form-info';
import { FormInfoListPaginationResult } from '../models/form-info-list-pagination-result';

@Injectable({ providedIn: 'root' })
export class FormService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiFormAddFormInfoPost()` */
  static readonly ApiFormAddFormInfoPostPath = '/api/Form/AddFormInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormAddFormInfoPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFormAddFormInfoPost$Plain$Response(params?: ApiFormAddFormInfoPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
    return apiFormAddFormInfoPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormAddFormInfoPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFormAddFormInfoPost$Plain(params?: ApiFormAddFormInfoPost$Plain$Params, context?: HttpContext): Observable<FormInfo> {
    return this.apiFormAddFormInfoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormInfo>): FormInfo => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormAddFormInfoPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFormAddFormInfoPost$Json$Response(params?: ApiFormAddFormInfoPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
    return apiFormAddFormInfoPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormAddFormInfoPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFormAddFormInfoPost$Json(params?: ApiFormAddFormInfoPost$Json$Params, context?: HttpContext): Observable<FormInfo> {
    return this.apiFormAddFormInfoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormInfo>): FormInfo => r.body)
    );
  }

  /** Path part for operation `apiFormGetFormInfoGet()` */
  static readonly ApiFormGetFormInfoGetPath = '/api/Form/GetFormInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormGetFormInfoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormInfoGet$Plain$Response(params?: ApiFormGetFormInfoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfoListPaginationResult>> {
    return apiFormGetFormInfoGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormGetFormInfoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormInfoGet$Plain(params?: ApiFormGetFormInfoGet$Plain$Params, context?: HttpContext): Observable<FormInfoListPaginationResult> {
    return this.apiFormGetFormInfoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormInfoListPaginationResult>): FormInfoListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormGetFormInfoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormInfoGet$Json$Response(params?: ApiFormGetFormInfoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfoListPaginationResult>> {
    return apiFormGetFormInfoGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormGetFormInfoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormInfoGet$Json(params?: ApiFormGetFormInfoGet$Json$Params, context?: HttpContext): Observable<FormInfoListPaginationResult> {
    return this.apiFormGetFormInfoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormInfoListPaginationResult>): FormInfoListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiFormGetFormByStatusGet()` */
  static readonly ApiFormGetFormByStatusGetPath = '/api/Form/GetFormByStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormGetFormByStatusGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormByStatusGet$Plain$Response(params?: ApiFormGetFormByStatusGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FormInfo>>> {
    return apiFormGetFormByStatusGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormGetFormByStatusGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormByStatusGet$Plain(params?: ApiFormGetFormByStatusGet$Plain$Params, context?: HttpContext): Observable<Array<FormInfo>> {
    return this.apiFormGetFormByStatusGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FormInfo>>): Array<FormInfo> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormGetFormByStatusGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormByStatusGet$Json$Response(params?: ApiFormGetFormByStatusGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FormInfo>>> {
    return apiFormGetFormByStatusGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormGetFormByStatusGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormByStatusGet$Json(params?: ApiFormGetFormByStatusGet$Json$Params, context?: HttpContext): Observable<Array<FormInfo>> {
    return this.apiFormGetFormByStatusGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FormInfo>>): Array<FormInfo> => r.body)
    );
  }

  /** Path part for operation `apiFormChangeFormStatusPatch()` */
  static readonly ApiFormChangeFormStatusPatchPath = '/api/Form/ChangeFormStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormChangeFormStatusPatch$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormChangeFormStatusPatch$Plain$Response(params?: ApiFormChangeFormStatusPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiFormChangeFormStatusPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormChangeFormStatusPatch$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormChangeFormStatusPatch$Plain(params?: ApiFormChangeFormStatusPatch$Plain$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiFormChangeFormStatusPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormChangeFormStatusPatch$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormChangeFormStatusPatch$Json$Response(params?: ApiFormChangeFormStatusPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
    return apiFormChangeFormStatusPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormChangeFormStatusPatch$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormChangeFormStatusPatch$Json(params?: ApiFormChangeFormStatusPatch$Json$Params, context?: HttpContext): Observable<ContactUsUser> {
    return this.apiFormChangeFormStatusPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsUser>): ContactUsUser => r.body)
    );
  }

  /** Path part for operation `apiFormGetFormInfoByIdIdGet()` */
  static readonly ApiFormGetFormInfoByIdIdGetPath = '/api/Form/GetFormInfoById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormGetFormInfoByIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormInfoByIdIdGet$Plain$Response(params: ApiFormGetFormInfoByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
    return apiFormGetFormInfoByIdIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormGetFormInfoByIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormInfoByIdIdGet$Plain(params: ApiFormGetFormInfoByIdIdGet$Plain$Params, context?: HttpContext): Observable<FormInfo> {
    return this.apiFormGetFormInfoByIdIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormInfo>): FormInfo => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormGetFormInfoByIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormInfoByIdIdGet$Json$Response(params: ApiFormGetFormInfoByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
    return apiFormGetFormInfoByIdIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormGetFormInfoByIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormGetFormInfoByIdIdGet$Json(params: ApiFormGetFormInfoByIdIdGet$Json$Params, context?: HttpContext): Observable<FormInfo> {
    return this.apiFormGetFormInfoByIdIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormInfo>): FormInfo => r.body)
    );
  }

  /** Path part for operation `apiFormDeleteFormInfoIdDelete()` */
  static readonly ApiFormDeleteFormInfoIdDeletePath = '/api/Form/DeleteFormInfo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormDeleteFormInfoIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormDeleteFormInfoIdDelete$Plain$Response(params: ApiFormDeleteFormInfoIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
    return apiFormDeleteFormInfoIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormDeleteFormInfoIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormDeleteFormInfoIdDelete$Plain(params: ApiFormDeleteFormInfoIdDelete$Plain$Params, context?: HttpContext): Observable<FormInfo> {
    return this.apiFormDeleteFormInfoIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormInfo>): FormInfo => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFormDeleteFormInfoIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormDeleteFormInfoIdDelete$Json$Response(params: ApiFormDeleteFormInfoIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
    return apiFormDeleteFormInfoIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFormDeleteFormInfoIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFormDeleteFormInfoIdDelete$Json(params: ApiFormDeleteFormInfoIdDelete$Json$Params, context?: HttpContext): Observable<FormInfo> {
    return this.apiFormDeleteFormInfoIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormInfo>): FormInfo => r.body)
    );
  }

}
