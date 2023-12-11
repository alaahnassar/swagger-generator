/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiNewAddNewPost$Json } from '../fn/new/api-new-add-new-post-json';
import { ApiNewAddNewPost$Json$Params } from '../fn/new/api-new-add-new-post-json';
import { apiNewAddNewPost$Plain } from '../fn/new/api-new-add-new-post-plain';
import { ApiNewAddNewPost$Plain$Params } from '../fn/new/api-new-add-new-post-plain';
import { apiNewDeleteNewDelete$Json } from '../fn/new/api-new-delete-new-delete-json';
import { ApiNewDeleteNewDelete$Json$Params } from '../fn/new/api-new-delete-new-delete-json';
import { apiNewDeleteNewDelete$Plain } from '../fn/new/api-new-delete-new-delete-plain';
import { ApiNewDeleteNewDelete$Plain$Params } from '../fn/new/api-new-delete-new-delete-plain';
import { apiNewGetNewByIdGet$Json } from '../fn/new/api-new-get-new-by-id-get-json';
import { ApiNewGetNewByIdGet$Json$Params } from '../fn/new/api-new-get-new-by-id-get-json';
import { apiNewGetNewByIdGet$Plain } from '../fn/new/api-new-get-new-by-id-get-plain';
import { ApiNewGetNewByIdGet$Plain$Params } from '../fn/new/api-new-get-new-by-id-get-plain';
import { apiNewGetNewsGet$Json } from '../fn/new/api-new-get-news-get-json';
import { ApiNewGetNewsGet$Json$Params } from '../fn/new/api-new-get-news-get-json';
import { apiNewGetNewsGet$Plain } from '../fn/new/api-new-get-news-get-plain';
import { ApiNewGetNewsGet$Plain$Params } from '../fn/new/api-new-get-news-get-plain';
import { New } from '../models/new';
import { NewDto } from '../models/new-dto';

@Injectable({ providedIn: 'root' })
export class NewService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiNewAddNewPost()` */
  static readonly ApiNewAddNewPostPath = '/api/New/AddNew';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNewAddNewPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiNewAddNewPost$Plain$Response(params?: ApiNewAddNewPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<New>> {
    return apiNewAddNewPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNewAddNewPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiNewAddNewPost$Plain(params?: ApiNewAddNewPost$Plain$Params, context?: HttpContext): Observable<New> {
    return this.apiNewAddNewPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<New>): New => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNewAddNewPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiNewAddNewPost$Json$Response(params?: ApiNewAddNewPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<New>> {
    return apiNewAddNewPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNewAddNewPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiNewAddNewPost$Json(params?: ApiNewAddNewPost$Json$Params, context?: HttpContext): Observable<New> {
    return this.apiNewAddNewPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<New>): New => r.body)
    );
  }

  /** Path part for operation `apiNewGetNewsGet()` */
  static readonly ApiNewGetNewsGetPath = '/api/New/GetNews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNewGetNewsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewGetNewsGet$Plain$Response(params?: ApiNewGetNewsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<New>>> {
    return apiNewGetNewsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNewGetNewsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewGetNewsGet$Plain(params?: ApiNewGetNewsGet$Plain$Params, context?: HttpContext): Observable<Array<New>> {
    return this.apiNewGetNewsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<New>>): Array<New> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNewGetNewsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewGetNewsGet$Json$Response(params?: ApiNewGetNewsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<New>>> {
    return apiNewGetNewsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNewGetNewsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewGetNewsGet$Json(params?: ApiNewGetNewsGet$Json$Params, context?: HttpContext): Observable<Array<New>> {
    return this.apiNewGetNewsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<New>>): Array<New> => r.body)
    );
  }

  /** Path part for operation `apiNewGetNewByIdGet()` */
  static readonly ApiNewGetNewByIdGetPath = '/api/New/GetNewById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNewGetNewByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewGetNewByIdGet$Plain$Response(params?: ApiNewGetNewByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDto>> {
    return apiNewGetNewByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNewGetNewByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewGetNewByIdGet$Plain(params?: ApiNewGetNewByIdGet$Plain$Params, context?: HttpContext): Observable<NewDto> {
    return this.apiNewGetNewByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<NewDto>): NewDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNewGetNewByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewGetNewByIdGet$Json$Response(params?: ApiNewGetNewByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDto>> {
    return apiNewGetNewByIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNewGetNewByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewGetNewByIdGet$Json(params?: ApiNewGetNewByIdGet$Json$Params, context?: HttpContext): Observable<NewDto> {
    return this.apiNewGetNewByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<NewDto>): NewDto => r.body)
    );
  }

  /** Path part for operation `apiNewDeleteNewDelete()` */
  static readonly ApiNewDeleteNewDeletePath = '/api/New/DeleteNew';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNewDeleteNewDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewDeleteNewDelete$Plain$Response(params?: ApiNewDeleteNewDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDto>> {
    return apiNewDeleteNewDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNewDeleteNewDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewDeleteNewDelete$Plain(params?: ApiNewDeleteNewDelete$Plain$Params, context?: HttpContext): Observable<NewDto> {
    return this.apiNewDeleteNewDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<NewDto>): NewDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNewDeleteNewDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewDeleteNewDelete$Json$Response(params?: ApiNewDeleteNewDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDto>> {
    return apiNewDeleteNewDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNewDeleteNewDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNewDeleteNewDelete$Json(params?: ApiNewDeleteNewDelete$Json$Params, context?: HttpContext): Observable<NewDto> {
    return this.apiNewDeleteNewDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<NewDto>): NewDto => r.body)
    );
  }

}
