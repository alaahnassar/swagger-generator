/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiHomeGetHomeDataGet$Json } from '../fn/home/api-home-get-home-data-get-json';
import { ApiHomeGetHomeDataGet$Json$Params } from '../fn/home/api-home-get-home-data-get-json';
import { apiHomeGetHomeDataGet$Plain } from '../fn/home/api-home-get-home-data-get-plain';
import { ApiHomeGetHomeDataGet$Plain$Params } from '../fn/home/api-home-get-home-data-get-plain';
import { apiHomeUpdateHomeDataPatch$Json } from '../fn/home/api-home-update-home-data-patch-json';
import { ApiHomeUpdateHomeDataPatch$Json$Params } from '../fn/home/api-home-update-home-data-patch-json';
import { apiHomeUpdateHomeDataPatch$Plain } from '../fn/home/api-home-update-home-data-patch-plain';
import { ApiHomeUpdateHomeDataPatch$Plain$Params } from '../fn/home/api-home-update-home-data-patch-plain';
import { HomeData } from '../models/home-data';

@Injectable({ providedIn: 'root' })
export class HomeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiHomeUpdateHomeDataPatch()` */
  static readonly ApiHomeUpdateHomeDataPatchPath = '/api/Home/UpdateHomeData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeUpdateHomeDataPatch$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHomeUpdateHomeDataPatch$Plain$Response(params?: ApiHomeUpdateHomeDataPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HomeData>> {
    return apiHomeUpdateHomeDataPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeUpdateHomeDataPatch$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHomeUpdateHomeDataPatch$Plain(params?: ApiHomeUpdateHomeDataPatch$Plain$Params, context?: HttpContext): Observable<HomeData> {
    return this.apiHomeUpdateHomeDataPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<HomeData>): HomeData => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeUpdateHomeDataPatch$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHomeUpdateHomeDataPatch$Json$Response(params?: ApiHomeUpdateHomeDataPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HomeData>> {
    return apiHomeUpdateHomeDataPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeUpdateHomeDataPatch$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHomeUpdateHomeDataPatch$Json(params?: ApiHomeUpdateHomeDataPatch$Json$Params, context?: HttpContext): Observable<HomeData> {
    return this.apiHomeUpdateHomeDataPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<HomeData>): HomeData => r.body)
    );
  }

  /** Path part for operation `apiHomeGetHomeDataGet()` */
  static readonly ApiHomeGetHomeDataGetPath = '/api/Home/GetHomeData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeGetHomeDataGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeGetHomeDataGet$Plain$Response(params?: ApiHomeGetHomeDataGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HomeData>> {
    return apiHomeGetHomeDataGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeGetHomeDataGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeGetHomeDataGet$Plain(params?: ApiHomeGetHomeDataGet$Plain$Params, context?: HttpContext): Observable<HomeData> {
    return this.apiHomeGetHomeDataGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<HomeData>): HomeData => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHomeGetHomeDataGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeGetHomeDataGet$Json$Response(params?: ApiHomeGetHomeDataGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HomeData>> {
    return apiHomeGetHomeDataGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHomeGetHomeDataGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHomeGetHomeDataGet$Json(params?: ApiHomeGetHomeDataGet$Json$Params, context?: HttpContext): Observable<HomeData> {
    return this.apiHomeGetHomeDataGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<HomeData>): HomeData => r.body)
    );
  }

}
