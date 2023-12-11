/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCampAddCampImagePost$Json } from '../fn/camp/api-camp-add-camp-image-post-json';
import { ApiCampAddCampImagePost$Json$Params } from '../fn/camp/api-camp-add-camp-image-post-json';
import { apiCampAddCampImagePost$Plain } from '../fn/camp/api-camp-add-camp-image-post-plain';
import { ApiCampAddCampImagePost$Plain$Params } from '../fn/camp/api-camp-add-camp-image-post-plain';
import { apiCampAddCampPost$Json } from '../fn/camp/api-camp-add-camp-post-json';
import { ApiCampAddCampPost$Json$Params } from '../fn/camp/api-camp-add-camp-post-json';
import { apiCampAddCampPost$Plain } from '../fn/camp/api-camp-add-camp-post-plain';
import { ApiCampAddCampPost$Plain$Params } from '../fn/camp/api-camp-add-camp-post-plain';
import { apiCampDeleteCampIdDelete$Json } from '../fn/camp/api-camp-delete-camp-id-delete-json';
import { ApiCampDeleteCampIdDelete$Json$Params } from '../fn/camp/api-camp-delete-camp-id-delete-json';
import { apiCampDeleteCampIdDelete$Plain } from '../fn/camp/api-camp-delete-camp-id-delete-plain';
import { ApiCampDeleteCampIdDelete$Plain$Params } from '../fn/camp/api-camp-delete-camp-id-delete-plain';
import { apiCampDeleteCampImageIdDelete$Json } from '../fn/camp/api-camp-delete-camp-image-id-delete-json';
import { ApiCampDeleteCampImageIdDelete$Json$Params } from '../fn/camp/api-camp-delete-camp-image-id-delete-json';
import { apiCampDeleteCampImageIdDelete$Plain } from '../fn/camp/api-camp-delete-camp-image-id-delete-plain';
import { ApiCampDeleteCampImageIdDelete$Plain$Params } from '../fn/camp/api-camp-delete-camp-image-id-delete-plain';
import { apiCampEditCampPatch$Json } from '../fn/camp/api-camp-edit-camp-patch-json';
import { ApiCampEditCampPatch$Json$Params } from '../fn/camp/api-camp-edit-camp-patch-json';
import { apiCampEditCampPatch$Plain } from '../fn/camp/api-camp-edit-camp-patch-plain';
import { ApiCampEditCampPatch$Plain$Params } from '../fn/camp/api-camp-edit-camp-patch-plain';
import { apiCampGetCampByIdIdGet$Json } from '../fn/camp/api-camp-get-camp-by-id-id-get-json';
import { ApiCampGetCampByIdIdGet$Json$Params } from '../fn/camp/api-camp-get-camp-by-id-id-get-json';
import { apiCampGetCampByIdIdGet$Plain } from '../fn/camp/api-camp-get-camp-by-id-id-get-plain';
import { ApiCampGetCampByIdIdGet$Plain$Params } from '../fn/camp/api-camp-get-camp-by-id-id-get-plain';
import { apiCampGetCampGet$Json } from '../fn/camp/api-camp-get-camp-get-json';
import { ApiCampGetCampGet$Json$Params } from '../fn/camp/api-camp-get-camp-get-json';
import { apiCampGetCampGet$Plain } from '../fn/camp/api-camp-get-camp-get-plain';
import { ApiCampGetCampGet$Plain$Params } from '../fn/camp/api-camp-get-camp-get-plain';
import { Camp } from '../models/camp';
import { CampImage } from '../models/camp-image';
import { CampListPaginationResult } from '../models/camp-list-pagination-result';
import { EditCampDto } from '../models/edit-camp-dto';

@Injectable({ providedIn: 'root' })
export class CampService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCampAddCampPost()` */
  static readonly ApiCampAddCampPostPath = '/api/Camp/AddCamp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampAddCampPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampAddCampPost$Plain$Response(params?: ApiCampAddCampPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Camp>> {
    return apiCampAddCampPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampAddCampPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampAddCampPost$Plain(params?: ApiCampAddCampPost$Plain$Params, context?: HttpContext): Observable<Camp> {
    return this.apiCampAddCampPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Camp>): Camp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampAddCampPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampAddCampPost$Json$Response(params?: ApiCampAddCampPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Camp>> {
    return apiCampAddCampPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampAddCampPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampAddCampPost$Json(params?: ApiCampAddCampPost$Json$Params, context?: HttpContext): Observable<Camp> {
    return this.apiCampAddCampPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Camp>): Camp => r.body)
    );
  }

  /** Path part for operation `apiCampEditCampPatch()` */
  static readonly ApiCampEditCampPatchPath = '/api/Camp/EditCamp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampEditCampPatch$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampEditCampPatch$Plain$Response(params?: ApiCampEditCampPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<EditCampDto>> {
    return apiCampEditCampPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampEditCampPatch$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampEditCampPatch$Plain(params?: ApiCampEditCampPatch$Plain$Params, context?: HttpContext): Observable<EditCampDto> {
    return this.apiCampEditCampPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<EditCampDto>): EditCampDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampEditCampPatch$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampEditCampPatch$Json$Response(params?: ApiCampEditCampPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EditCampDto>> {
    return apiCampEditCampPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampEditCampPatch$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampEditCampPatch$Json(params?: ApiCampEditCampPatch$Json$Params, context?: HttpContext): Observable<EditCampDto> {
    return this.apiCampEditCampPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EditCampDto>): EditCampDto => r.body)
    );
  }

  /** Path part for operation `apiCampGetCampGet()` */
  static readonly ApiCampGetCampGetPath = '/api/Camp/GetCamp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampGetCampGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampGetCampGet$Plain$Response(params?: ApiCampGetCampGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CampListPaginationResult>> {
    return apiCampGetCampGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampGetCampGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampGetCampGet$Plain(params?: ApiCampGetCampGet$Plain$Params, context?: HttpContext): Observable<CampListPaginationResult> {
    return this.apiCampGetCampGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CampListPaginationResult>): CampListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampGetCampGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampGetCampGet$Json$Response(params?: ApiCampGetCampGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CampListPaginationResult>> {
    return apiCampGetCampGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampGetCampGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampGetCampGet$Json(params?: ApiCampGetCampGet$Json$Params, context?: HttpContext): Observable<CampListPaginationResult> {
    return this.apiCampGetCampGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CampListPaginationResult>): CampListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiCampGetCampByIdIdGet()` */
  static readonly ApiCampGetCampByIdIdGetPath = '/api/Camp/GetCampById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampGetCampByIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampGetCampByIdIdGet$Plain$Response(params: ApiCampGetCampByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Camp>> {
    return apiCampGetCampByIdIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampGetCampByIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampGetCampByIdIdGet$Plain(params: ApiCampGetCampByIdIdGet$Plain$Params, context?: HttpContext): Observable<Camp> {
    return this.apiCampGetCampByIdIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Camp>): Camp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampGetCampByIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampGetCampByIdIdGet$Json$Response(params: ApiCampGetCampByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Camp>> {
    return apiCampGetCampByIdIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampGetCampByIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampGetCampByIdIdGet$Json(params: ApiCampGetCampByIdIdGet$Json$Params, context?: HttpContext): Observable<Camp> {
    return this.apiCampGetCampByIdIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Camp>): Camp => r.body)
    );
  }

  /** Path part for operation `apiCampDeleteCampIdDelete()` */
  static readonly ApiCampDeleteCampIdDeletePath = '/api/Camp/DeleteCamp/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampDeleteCampIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampDeleteCampIdDelete$Plain$Response(params: ApiCampDeleteCampIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Camp>> {
    return apiCampDeleteCampIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampDeleteCampIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampDeleteCampIdDelete$Plain(params: ApiCampDeleteCampIdDelete$Plain$Params, context?: HttpContext): Observable<Camp> {
    return this.apiCampDeleteCampIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Camp>): Camp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampDeleteCampIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampDeleteCampIdDelete$Json$Response(params: ApiCampDeleteCampIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Camp>> {
    return apiCampDeleteCampIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampDeleteCampIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampDeleteCampIdDelete$Json(params: ApiCampDeleteCampIdDelete$Json$Params, context?: HttpContext): Observable<Camp> {
    return this.apiCampDeleteCampIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Camp>): Camp => r.body)
    );
  }

  /** Path part for operation `apiCampAddCampImagePost()` */
  static readonly ApiCampAddCampImagePostPath = '/api/Camp/AddCampImage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampAddCampImagePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampAddCampImagePost$Plain$Response(params?: ApiCampAddCampImagePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CampImage>> {
    return apiCampAddCampImagePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampAddCampImagePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampAddCampImagePost$Plain(params?: ApiCampAddCampImagePost$Plain$Params, context?: HttpContext): Observable<CampImage> {
    return this.apiCampAddCampImagePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CampImage>): CampImage => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampAddCampImagePost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampAddCampImagePost$Json$Response(params?: ApiCampAddCampImagePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CampImage>> {
    return apiCampAddCampImagePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampAddCampImagePost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiCampAddCampImagePost$Json(params?: ApiCampAddCampImagePost$Json$Params, context?: HttpContext): Observable<CampImage> {
    return this.apiCampAddCampImagePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CampImage>): CampImage => r.body)
    );
  }

  /** Path part for operation `apiCampDeleteCampImageIdDelete()` */
  static readonly ApiCampDeleteCampImageIdDeletePath = '/api/Camp/DeleteCampImage/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampDeleteCampImageIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampDeleteCampImageIdDelete$Plain$Response(params: ApiCampDeleteCampImageIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CampImage>> {
    return apiCampDeleteCampImageIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampDeleteCampImageIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampDeleteCampImageIdDelete$Plain(params: ApiCampDeleteCampImageIdDelete$Plain$Params, context?: HttpContext): Observable<CampImage> {
    return this.apiCampDeleteCampImageIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CampImage>): CampImage => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCampDeleteCampImageIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampDeleteCampImageIdDelete$Json$Response(params: ApiCampDeleteCampImageIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CampImage>> {
    return apiCampDeleteCampImageIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCampDeleteCampImageIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCampDeleteCampImageIdDelete$Json(params: ApiCampDeleteCampImageIdDelete$Json$Params, context?: HttpContext): Observable<CampImage> {
    return this.apiCampDeleteCampImageIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CampImage>): CampImage => r.body)
    );
  }

}
