/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AboutUs } from '../models/about-us';
import { apiAboutUsGetAboutUsGet$Json } from '../fn/about-us/api-about-us-get-about-us-get-json';
import { ApiAboutUsGetAboutUsGet$Json$Params } from '../fn/about-us/api-about-us-get-about-us-get-json';
import { apiAboutUsGetAboutUsGet$Plain } from '../fn/about-us/api-about-us-get-about-us-get-plain';
import { ApiAboutUsGetAboutUsGet$Plain$Params } from '../fn/about-us/api-about-us-get-about-us-get-plain';
import { apiAboutUsUpdateAboutUsPatch$Json } from '../fn/about-us/api-about-us-update-about-us-patch-json';
import { ApiAboutUsUpdateAboutUsPatch$Json$Params } from '../fn/about-us/api-about-us-update-about-us-patch-json';
import { apiAboutUsUpdateAboutUsPatch$Plain } from '../fn/about-us/api-about-us-update-about-us-patch-plain';
import { ApiAboutUsUpdateAboutUsPatch$Plain$Params } from '../fn/about-us/api-about-us-update-about-us-patch-plain';

@Injectable({ providedIn: 'root' })
export class AboutUsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAboutUsUpdateAboutUsPatch()` */
  static readonly ApiAboutUsUpdateAboutUsPatchPath = '/api/AboutUs/UpdateAboutUs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutUsUpdateAboutUsPatch$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiAboutUsUpdateAboutUsPatch$Plain$Response(params?: ApiAboutUsUpdateAboutUsPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUs>> {
    return apiAboutUsUpdateAboutUsPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutUsUpdateAboutUsPatch$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiAboutUsUpdateAboutUsPatch$Plain(params?: ApiAboutUsUpdateAboutUsPatch$Plain$Params, context?: HttpContext): Observable<AboutUs> {
    return this.apiAboutUsUpdateAboutUsPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AboutUs>): AboutUs => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutUsUpdateAboutUsPatch$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiAboutUsUpdateAboutUsPatch$Json$Response(params?: ApiAboutUsUpdateAboutUsPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUs>> {
    return apiAboutUsUpdateAboutUsPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutUsUpdateAboutUsPatch$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiAboutUsUpdateAboutUsPatch$Json(params?: ApiAboutUsUpdateAboutUsPatch$Json$Params, context?: HttpContext): Observable<AboutUs> {
    return this.apiAboutUsUpdateAboutUsPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AboutUs>): AboutUs => r.body)
    );
  }

  /** Path part for operation `apiAboutUsGetAboutUsGet()` */
  static readonly ApiAboutUsGetAboutUsGetPath = '/api/AboutUs/GetAboutUs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutUsGetAboutUsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutUsGetAboutUsGet$Plain$Response(params?: ApiAboutUsGetAboutUsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUs>> {
    return apiAboutUsGetAboutUsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutUsGetAboutUsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutUsGetAboutUsGet$Plain(params?: ApiAboutUsGetAboutUsGet$Plain$Params, context?: HttpContext): Observable<AboutUs> {
    return this.apiAboutUsGetAboutUsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AboutUs>): AboutUs => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutUsGetAboutUsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutUsGetAboutUsGet$Json$Response(params?: ApiAboutUsGetAboutUsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUs>> {
    return apiAboutUsGetAboutUsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutUsGetAboutUsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutUsGetAboutUsGet$Json(params?: ApiAboutUsGetAboutUsGet$Json$Params, context?: HttpContext): Observable<AboutUs> {
    return this.apiAboutUsGetAboutUsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AboutUs>): AboutUs => r.body)
    );
  }

}
