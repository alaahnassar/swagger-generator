/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiContactInfoAddContactInfoPost$Json } from '../fn/contact-info/api-contact-info-add-contact-info-post-json';
import { ApiContactInfoAddContactInfoPost$Json$Params } from '../fn/contact-info/api-contact-info-add-contact-info-post-json';
import { apiContactInfoAddContactInfoPost$Plain } from '../fn/contact-info/api-contact-info-add-contact-info-post-plain';
import { ApiContactInfoAddContactInfoPost$Plain$Params } from '../fn/contact-info/api-contact-info-add-contact-info-post-plain';
import { apiContactInfoDeleteContactInfoDelete$Json } from '../fn/contact-info/api-contact-info-delete-contact-info-delete-json';
import { ApiContactInfoDeleteContactInfoDelete$Json$Params } from '../fn/contact-info/api-contact-info-delete-contact-info-delete-json';
import { apiContactInfoDeleteContactInfoDelete$Plain } from '../fn/contact-info/api-contact-info-delete-contact-info-delete-plain';
import { ApiContactInfoDeleteContactInfoDelete$Plain$Params } from '../fn/contact-info/api-contact-info-delete-contact-info-delete-plain';
import { apiContactInfoEditContactInfoPatch$Json } from '../fn/contact-info/api-contact-info-edit-contact-info-patch-json';
import { ApiContactInfoEditContactInfoPatch$Json$Params } from '../fn/contact-info/api-contact-info-edit-contact-info-patch-json';
import { apiContactInfoEditContactInfoPatch$Plain } from '../fn/contact-info/api-contact-info-edit-contact-info-patch-plain';
import { ApiContactInfoEditContactInfoPatch$Plain$Params } from '../fn/contact-info/api-contact-info-edit-contact-info-patch-plain';
import { apiContactInfoGetContactInfoByIdGet } from '../fn/contact-info/api-contact-info-get-contact-info-by-id-get';
import { ApiContactInfoGetContactInfoByIdGet$Params } from '../fn/contact-info/api-contact-info-get-contact-info-by-id-get';
import { apiContactInfoGetContactInfoGet$Json } from '../fn/contact-info/api-contact-info-get-contact-info-get-json';
import { ApiContactInfoGetContactInfoGet$Json$Params } from '../fn/contact-info/api-contact-info-get-contact-info-get-json';
import { apiContactInfoGetContactInfoGet$Plain } from '../fn/contact-info/api-contact-info-get-contact-info-get-plain';
import { ApiContactInfoGetContactInfoGet$Plain$Params } from '../fn/contact-info/api-contact-info-get-contact-info-get-plain';
import { ContactUsInfo } from '../models/contact-us-info';
import { ContactUsInfoListPaginationResult } from '../models/contact-us-info-list-pagination-result';
import { Programs } from '../models/programs';

@Injectable({ providedIn: 'root' })
export class ContactInfoService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiContactInfoAddContactInfoPost()` */
  static readonly ApiContactInfoAddContactInfoPostPath = '/api/ContactInfo/AddContactInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactInfoAddContactInfoPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactInfoAddContactInfoPost$Plain$Response(params?: ApiContactInfoAddContactInfoPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsInfo>> {
    return apiContactInfoAddContactInfoPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactInfoAddContactInfoPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactInfoAddContactInfoPost$Plain(params?: ApiContactInfoAddContactInfoPost$Plain$Params, context?: HttpContext): Observable<ContactUsInfo> {
    return this.apiContactInfoAddContactInfoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsInfo>): ContactUsInfo => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactInfoAddContactInfoPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactInfoAddContactInfoPost$Json$Response(params?: ApiContactInfoAddContactInfoPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsInfo>> {
    return apiContactInfoAddContactInfoPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactInfoAddContactInfoPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactInfoAddContactInfoPost$Json(params?: ApiContactInfoAddContactInfoPost$Json$Params, context?: HttpContext): Observable<ContactUsInfo> {
    return this.apiContactInfoAddContactInfoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsInfo>): ContactUsInfo => r.body)
    );
  }

  /** Path part for operation `apiContactInfoEditContactInfoPatch()` */
  static readonly ApiContactInfoEditContactInfoPatchPath = '/api/ContactInfo/EditContactInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactInfoEditContactInfoPatch$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactInfoEditContactInfoPatch$Plain$Response(params?: ApiContactInfoEditContactInfoPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsInfo>> {
    return apiContactInfoEditContactInfoPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactInfoEditContactInfoPatch$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactInfoEditContactInfoPatch$Plain(params?: ApiContactInfoEditContactInfoPatch$Plain$Params, context?: HttpContext): Observable<ContactUsInfo> {
    return this.apiContactInfoEditContactInfoPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsInfo>): ContactUsInfo => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactInfoEditContactInfoPatch$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactInfoEditContactInfoPatch$Json$Response(params?: ApiContactInfoEditContactInfoPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsInfo>> {
    return apiContactInfoEditContactInfoPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactInfoEditContactInfoPatch$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiContactInfoEditContactInfoPatch$Json(params?: ApiContactInfoEditContactInfoPatch$Json$Params, context?: HttpContext): Observable<ContactUsInfo> {
    return this.apiContactInfoEditContactInfoPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsInfo>): ContactUsInfo => r.body)
    );
  }

  /** Path part for operation `apiContactInfoGetContactInfoGet()` */
  static readonly ApiContactInfoGetContactInfoGetPath = '/api/ContactInfo/GetContactInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactInfoGetContactInfoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoGetContactInfoGet$Plain$Response(params?: ApiContactInfoGetContactInfoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsInfoListPaginationResult>> {
    return apiContactInfoGetContactInfoGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactInfoGetContactInfoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoGetContactInfoGet$Plain(params?: ApiContactInfoGetContactInfoGet$Plain$Params, context?: HttpContext): Observable<ContactUsInfoListPaginationResult> {
    return this.apiContactInfoGetContactInfoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsInfoListPaginationResult>): ContactUsInfoListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactInfoGetContactInfoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoGetContactInfoGet$Json$Response(params?: ApiContactInfoGetContactInfoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsInfoListPaginationResult>> {
    return apiContactInfoGetContactInfoGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactInfoGetContactInfoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoGetContactInfoGet$Json(params?: ApiContactInfoGetContactInfoGet$Json$Params, context?: HttpContext): Observable<ContactUsInfoListPaginationResult> {
    return this.apiContactInfoGetContactInfoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactUsInfoListPaginationResult>): ContactUsInfoListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiContactInfoGetContactInfoByIdGet()` */
  static readonly ApiContactInfoGetContactInfoByIdGetPath = '/api/ContactInfo/GetContactInfoById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactInfoGetContactInfoByIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoGetContactInfoByIdGet$Response(params?: ApiContactInfoGetContactInfoByIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiContactInfoGetContactInfoByIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactInfoGetContactInfoByIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoGetContactInfoByIdGet(params?: ApiContactInfoGetContactInfoByIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiContactInfoGetContactInfoByIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiContactInfoDeleteContactInfoDelete()` */
  static readonly ApiContactInfoDeleteContactInfoDeletePath = '/api/ContactInfo/DeleteContactInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactInfoDeleteContactInfoDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoDeleteContactInfoDelete$Plain$Response(params?: ApiContactInfoDeleteContactInfoDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiContactInfoDeleteContactInfoDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactInfoDeleteContactInfoDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoDeleteContactInfoDelete$Plain(params?: ApiContactInfoDeleteContactInfoDelete$Plain$Params, context?: HttpContext): Observable<Programs> {
    return this.apiContactInfoDeleteContactInfoDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContactInfoDeleteContactInfoDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoDeleteContactInfoDelete$Json$Response(params?: ApiContactInfoDeleteContactInfoDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiContactInfoDeleteContactInfoDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContactInfoDeleteContactInfoDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContactInfoDeleteContactInfoDelete$Json(params?: ApiContactInfoDeleteContactInfoDelete$Json$Params, context?: HttpContext): Observable<Programs> {
    return this.apiContactInfoDeleteContactInfoDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

}
