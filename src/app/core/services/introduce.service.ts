/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiIntroduceAddIntroducePost$Json } from '../fn/introduce/api-introduce-add-introduce-post-json';
import { ApiIntroduceAddIntroducePost$Json$Params } from '../fn/introduce/api-introduce-add-introduce-post-json';
import { apiIntroduceAddIntroducePost$Plain } from '../fn/introduce/api-introduce-add-introduce-post-plain';
import { ApiIntroduceAddIntroducePost$Plain$Params } from '../fn/introduce/api-introduce-add-introduce-post-plain';
import { apiIntroduceDeleteIntroduceIdDelete$Json } from '../fn/introduce/api-introduce-delete-introduce-id-delete-json';
import { ApiIntroduceDeleteIntroduceIdDelete$Json$Params } from '../fn/introduce/api-introduce-delete-introduce-id-delete-json';
import { apiIntroduceDeleteIntroduceIdDelete$Plain } from '../fn/introduce/api-introduce-delete-introduce-id-delete-plain';
import { ApiIntroduceDeleteIntroduceIdDelete$Plain$Params } from '../fn/introduce/api-introduce-delete-introduce-id-delete-plain';
import { apiIntroduceEditIntroducePost$Json } from '../fn/introduce/api-introduce-edit-introduce-post-json';
import { ApiIntroduceEditIntroducePost$Json$Params } from '../fn/introduce/api-introduce-edit-introduce-post-json';
import { apiIntroduceEditIntroducePost$Plain } from '../fn/introduce/api-introduce-edit-introduce-post-plain';
import { ApiIntroduceEditIntroducePost$Plain$Params } from '../fn/introduce/api-introduce-edit-introduce-post-plain';
import { apiIntroduceGetIntroduceByIdIdGet$Json } from '../fn/introduce/api-introduce-get-introduce-by-id-id-get-json';
import { ApiIntroduceGetIntroduceByIdIdGet$Json$Params } from '../fn/introduce/api-introduce-get-introduce-by-id-id-get-json';
import { apiIntroduceGetIntroduceByIdIdGet$Plain } from '../fn/introduce/api-introduce-get-introduce-by-id-id-get-plain';
import { ApiIntroduceGetIntroduceByIdIdGet$Plain$Params } from '../fn/introduce/api-introduce-get-introduce-by-id-id-get-plain';
import { apiIntroduceGetIntroduceGet$Json } from '../fn/introduce/api-introduce-get-introduce-get-json';
import { ApiIntroduceGetIntroduceGet$Json$Params } from '../fn/introduce/api-introduce-get-introduce-get-json';
import { apiIntroduceGetIntroduceGet$Plain } from '../fn/introduce/api-introduce-get-introduce-get-plain';
import { ApiIntroduceGetIntroduceGet$Plain$Params } from '../fn/introduce/api-introduce-get-introduce-get-plain';
import { Introduce } from '../models/introduce';
import { IntroduceDto } from '../models/introduce-dto';
import { IntroduceListPaginationResult } from '../models/introduce-list-pagination-result';

@Injectable({ providedIn: 'root' })
export class IntroduceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiIntroduceAddIntroducePost()` */
  static readonly ApiIntroduceAddIntroducePostPath = '/api/Introduce/AddIntroduce';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceAddIntroducePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiIntroduceAddIntroducePost$Plain$Response(params?: ApiIntroduceAddIntroducePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
    return apiIntroduceAddIntroducePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceAddIntroducePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiIntroduceAddIntroducePost$Plain(params?: ApiIntroduceAddIntroducePost$Plain$Params, context?: HttpContext): Observable<Introduce> {
    return this.apiIntroduceAddIntroducePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Introduce>): Introduce => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceAddIntroducePost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiIntroduceAddIntroducePost$Json$Response(params?: ApiIntroduceAddIntroducePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
    return apiIntroduceAddIntroducePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceAddIntroducePost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiIntroduceAddIntroducePost$Json(params?: ApiIntroduceAddIntroducePost$Json$Params, context?: HttpContext): Observable<Introduce> {
    return this.apiIntroduceAddIntroducePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Introduce>): Introduce => r.body)
    );
  }

  /** Path part for operation `apiIntroduceEditIntroducePost()` */
  static readonly ApiIntroduceEditIntroducePostPath = '/api/Introduce/EditIntroduce';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceEditIntroducePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiIntroduceEditIntroducePost$Plain$Response(params?: ApiIntroduceEditIntroducePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<IntroduceDto>> {
    return apiIntroduceEditIntroducePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceEditIntroducePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiIntroduceEditIntroducePost$Plain(params?: ApiIntroduceEditIntroducePost$Plain$Params, context?: HttpContext): Observable<IntroduceDto> {
    return this.apiIntroduceEditIntroducePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IntroduceDto>): IntroduceDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceEditIntroducePost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiIntroduceEditIntroducePost$Json$Response(params?: ApiIntroduceEditIntroducePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<IntroduceDto>> {
    return apiIntroduceEditIntroducePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceEditIntroducePost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiIntroduceEditIntroducePost$Json(params?: ApiIntroduceEditIntroducePost$Json$Params, context?: HttpContext): Observable<IntroduceDto> {
    return this.apiIntroduceEditIntroducePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IntroduceDto>): IntroduceDto => r.body)
    );
  }

  /** Path part for operation `apiIntroduceGetIntroduceGet()` */
  static readonly ApiIntroduceGetIntroduceGetPath = '/api/Introduce/GetIntroduce';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceGetIntroduceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceGetIntroduceGet$Plain$Response(params?: ApiIntroduceGetIntroduceGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<IntroduceListPaginationResult>> {
    return apiIntroduceGetIntroduceGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceGetIntroduceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceGetIntroduceGet$Plain(params?: ApiIntroduceGetIntroduceGet$Plain$Params, context?: HttpContext): Observable<IntroduceListPaginationResult> {
    return this.apiIntroduceGetIntroduceGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IntroduceListPaginationResult>): IntroduceListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceGetIntroduceGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceGetIntroduceGet$Json$Response(params?: ApiIntroduceGetIntroduceGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<IntroduceListPaginationResult>> {
    return apiIntroduceGetIntroduceGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceGetIntroduceGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceGetIntroduceGet$Json(params?: ApiIntroduceGetIntroduceGet$Json$Params, context?: HttpContext): Observable<IntroduceListPaginationResult> {
    return this.apiIntroduceGetIntroduceGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IntroduceListPaginationResult>): IntroduceListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiIntroduceGetIntroduceByIdIdGet()` */
  static readonly ApiIntroduceGetIntroduceByIdIdGetPath = '/api/Introduce/GetIntroduceById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceGetIntroduceByIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceGetIntroduceByIdIdGet$Plain$Response(params: ApiIntroduceGetIntroduceByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
    return apiIntroduceGetIntroduceByIdIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceGetIntroduceByIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceGetIntroduceByIdIdGet$Plain(params: ApiIntroduceGetIntroduceByIdIdGet$Plain$Params, context?: HttpContext): Observable<Introduce> {
    return this.apiIntroduceGetIntroduceByIdIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Introduce>): Introduce => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceGetIntroduceByIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceGetIntroduceByIdIdGet$Json$Response(params: ApiIntroduceGetIntroduceByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
    return apiIntroduceGetIntroduceByIdIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceGetIntroduceByIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceGetIntroduceByIdIdGet$Json(params: ApiIntroduceGetIntroduceByIdIdGet$Json$Params, context?: HttpContext): Observable<Introduce> {
    return this.apiIntroduceGetIntroduceByIdIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Introduce>): Introduce => r.body)
    );
  }

  /** Path part for operation `apiIntroduceDeleteIntroduceIdDelete()` */
  static readonly ApiIntroduceDeleteIntroduceIdDeletePath = '/api/Introduce/DeleteIntroduce/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceDeleteIntroduceIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceDeleteIntroduceIdDelete$Plain$Response(params: ApiIntroduceDeleteIntroduceIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
    return apiIntroduceDeleteIntroduceIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceDeleteIntroduceIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceDeleteIntroduceIdDelete$Plain(params: ApiIntroduceDeleteIntroduceIdDelete$Plain$Params, context?: HttpContext): Observable<Introduce> {
    return this.apiIntroduceDeleteIntroduceIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Introduce>): Introduce => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIntroduceDeleteIntroduceIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceDeleteIntroduceIdDelete$Json$Response(params: ApiIntroduceDeleteIntroduceIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
    return apiIntroduceDeleteIntroduceIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiIntroduceDeleteIntroduceIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIntroduceDeleteIntroduceIdDelete$Json(params: ApiIntroduceDeleteIntroduceIdDelete$Json$Params, context?: HttpContext): Observable<Introduce> {
    return this.apiIntroduceDeleteIntroduceIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Introduce>): Introduce => r.body)
    );
  }

}
