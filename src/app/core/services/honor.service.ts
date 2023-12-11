/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiHonorAddHonorImagePost$Json } from '../fn/honor/api-honor-add-honor-image-post-json';
import { ApiHonorAddHonorImagePost$Json$Params } from '../fn/honor/api-honor-add-honor-image-post-json';
import { apiHonorAddHonorImagePost$Plain } from '../fn/honor/api-honor-add-honor-image-post-plain';
import { ApiHonorAddHonorImagePost$Plain$Params } from '../fn/honor/api-honor-add-honor-image-post-plain';
import { apiHonorAddHonorPost$Json } from '../fn/honor/api-honor-add-honor-post-json';
import { ApiHonorAddHonorPost$Json$Params } from '../fn/honor/api-honor-add-honor-post-json';
import { apiHonorAddHonorPost$Plain } from '../fn/honor/api-honor-add-honor-post-plain';
import { ApiHonorAddHonorPost$Plain$Params } from '../fn/honor/api-honor-add-honor-post-plain';
import { apiHonorDeleteHonorIdDelete$Json } from '../fn/honor/api-honor-delete-honor-id-delete-json';
import { ApiHonorDeleteHonorIdDelete$Json$Params } from '../fn/honor/api-honor-delete-honor-id-delete-json';
import { apiHonorDeleteHonorIdDelete$Plain } from '../fn/honor/api-honor-delete-honor-id-delete-plain';
import { ApiHonorDeleteHonorIdDelete$Plain$Params } from '../fn/honor/api-honor-delete-honor-id-delete-plain';
import { apiHonorDeleteHonorImageIdDelete$Json } from '../fn/honor/api-honor-delete-honor-image-id-delete-json';
import { ApiHonorDeleteHonorImageIdDelete$Json$Params } from '../fn/honor/api-honor-delete-honor-image-id-delete-json';
import { apiHonorDeleteHonorImageIdDelete$Plain } from '../fn/honor/api-honor-delete-honor-image-id-delete-plain';
import { ApiHonorDeleteHonorImageIdDelete$Plain$Params } from '../fn/honor/api-honor-delete-honor-image-id-delete-plain';
import { apiHonorEditHonorPatch$Json } from '../fn/honor/api-honor-edit-honor-patch-json';
import { ApiHonorEditHonorPatch$Json$Params } from '../fn/honor/api-honor-edit-honor-patch-json';
import { apiHonorEditHonorPatch$Plain } from '../fn/honor/api-honor-edit-honor-patch-plain';
import { ApiHonorEditHonorPatch$Plain$Params } from '../fn/honor/api-honor-edit-honor-patch-plain';
import { apiHonorGetHonorGet$Json } from '../fn/honor/api-honor-get-honor-get-json';
import { ApiHonorGetHonorGet$Json$Params } from '../fn/honor/api-honor-get-honor-get-json';
import { apiHonorGetHonorGet$Plain } from '../fn/honor/api-honor-get-honor-get-plain';
import { ApiHonorGetHonorGet$Plain$Params } from '../fn/honor/api-honor-get-honor-get-plain';
import { HonorDto } from '../models/honor-dto';
import { HonorImage } from '../models/honor-image';
import { HonorListPaginationResult } from '../models/honor-list-pagination-result';

@Injectable({ providedIn: 'root' })
export class HonorService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiHonorAddHonorPost()` */
  static readonly ApiHonorAddHonorPostPath = '/api/Honor/AddHonor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorAddHonorPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorAddHonorPost$Plain$Response(params?: ApiHonorAddHonorPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorDto>> {
    return apiHonorAddHonorPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorAddHonorPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorAddHonorPost$Plain(params?: ApiHonorAddHonorPost$Plain$Params, context?: HttpContext): Observable<HonorDto> {
    return this.apiHonorAddHonorPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorDto>): HonorDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorAddHonorPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorAddHonorPost$Json$Response(params?: ApiHonorAddHonorPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorDto>> {
    return apiHonorAddHonorPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorAddHonorPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorAddHonorPost$Json(params?: ApiHonorAddHonorPost$Json$Params, context?: HttpContext): Observable<HonorDto> {
    return this.apiHonorAddHonorPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorDto>): HonorDto => r.body)
    );
  }

  /** Path part for operation `apiHonorEditHonorPatch()` */
  static readonly ApiHonorEditHonorPatchPath = '/api/Honor/EditHonor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorEditHonorPatch$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorEditHonorPatch$Plain$Response(params?: ApiHonorEditHonorPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorDto>> {
    return apiHonorEditHonorPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorEditHonorPatch$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorEditHonorPatch$Plain(params?: ApiHonorEditHonorPatch$Plain$Params, context?: HttpContext): Observable<HonorDto> {
    return this.apiHonorEditHonorPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorDto>): HonorDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorEditHonorPatch$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorEditHonorPatch$Json$Response(params?: ApiHonorEditHonorPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorDto>> {
    return apiHonorEditHonorPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorEditHonorPatch$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorEditHonorPatch$Json(params?: ApiHonorEditHonorPatch$Json$Params, context?: HttpContext): Observable<HonorDto> {
    return this.apiHonorEditHonorPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorDto>): HonorDto => r.body)
    );
  }

  /** Path part for operation `apiHonorGetHonorGet()` */
  static readonly ApiHonorGetHonorGetPath = '/api/Honor/GetHonor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorGetHonorGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorGetHonorGet$Plain$Response(params?: ApiHonorGetHonorGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorListPaginationResult>> {
    return apiHonorGetHonorGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorGetHonorGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorGetHonorGet$Plain(params?: ApiHonorGetHonorGet$Plain$Params, context?: HttpContext): Observable<HonorListPaginationResult> {
    return this.apiHonorGetHonorGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorListPaginationResult>): HonorListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorGetHonorGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorGetHonorGet$Json$Response(params?: ApiHonorGetHonorGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorListPaginationResult>> {
    return apiHonorGetHonorGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorGetHonorGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorGetHonorGet$Json(params?: ApiHonorGetHonorGet$Json$Params, context?: HttpContext): Observable<HonorListPaginationResult> {
    return this.apiHonorGetHonorGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorListPaginationResult>): HonorListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiHonorAddHonorImagePost()` */
  static readonly ApiHonorAddHonorImagePostPath = '/api/Honor/AddHonorImage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorAddHonorImagePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorAddHonorImagePost$Plain$Response(params?: ApiHonorAddHonorImagePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorImage>> {
    return apiHonorAddHonorImagePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorAddHonorImagePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorAddHonorImagePost$Plain(params?: ApiHonorAddHonorImagePost$Plain$Params, context?: HttpContext): Observable<HonorImage> {
    return this.apiHonorAddHonorImagePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorImage>): HonorImage => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorAddHonorImagePost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorAddHonorImagePost$Json$Response(params?: ApiHonorAddHonorImagePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorImage>> {
    return apiHonorAddHonorImagePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorAddHonorImagePost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiHonorAddHonorImagePost$Json(params?: ApiHonorAddHonorImagePost$Json$Params, context?: HttpContext): Observable<HonorImage> {
    return this.apiHonorAddHonorImagePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorImage>): HonorImage => r.body)
    );
  }

  /** Path part for operation `apiHonorDeleteHonorImageIdDelete()` */
  static readonly ApiHonorDeleteHonorImageIdDeletePath = '/api/Honor/DeleteHonorImage/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorDeleteHonorImageIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorDeleteHonorImageIdDelete$Plain$Response(params: ApiHonorDeleteHonorImageIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorImage>> {
    return apiHonorDeleteHonorImageIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorDeleteHonorImageIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorDeleteHonorImageIdDelete$Plain(params: ApiHonorDeleteHonorImageIdDelete$Plain$Params, context?: HttpContext): Observable<HonorImage> {
    return this.apiHonorDeleteHonorImageIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorImage>): HonorImage => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorDeleteHonorImageIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorDeleteHonorImageIdDelete$Json$Response(params: ApiHonorDeleteHonorImageIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorImage>> {
    return apiHonorDeleteHonorImageIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorDeleteHonorImageIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorDeleteHonorImageIdDelete$Json(params: ApiHonorDeleteHonorImageIdDelete$Json$Params, context?: HttpContext): Observable<HonorImage> {
    return this.apiHonorDeleteHonorImageIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorImage>): HonorImage => r.body)
    );
  }

  /** Path part for operation `apiHonorDeleteHonorIdDelete()` */
  static readonly ApiHonorDeleteHonorIdDeletePath = '/api/Honor/DeleteHonor/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorDeleteHonorIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorDeleteHonorIdDelete$Plain$Response(params: ApiHonorDeleteHonorIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorImage>> {
    return apiHonorDeleteHonorIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorDeleteHonorIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorDeleteHonorIdDelete$Plain(params: ApiHonorDeleteHonorIdDelete$Plain$Params, context?: HttpContext): Observable<HonorImage> {
    return this.apiHonorDeleteHonorIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorImage>): HonorImage => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHonorDeleteHonorIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorDeleteHonorIdDelete$Json$Response(params: ApiHonorDeleteHonorIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorImage>> {
    return apiHonorDeleteHonorIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHonorDeleteHonorIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHonorDeleteHonorIdDelete$Json(params: ApiHonorDeleteHonorIdDelete$Json$Params, context?: HttpContext): Observable<HonorImage> {
    return this.apiHonorDeleteHonorIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<HonorImage>): HonorImage => r.body)
    );
  }

}
