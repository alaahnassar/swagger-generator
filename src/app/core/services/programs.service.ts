/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiProgramsAddProgramsPost$Json } from '../fn/programs/api-programs-add-programs-post-json';
import { ApiProgramsAddProgramsPost$Json$Params } from '../fn/programs/api-programs-add-programs-post-json';
import { apiProgramsAddProgramsPost$Plain } from '../fn/programs/api-programs-add-programs-post-plain';
import { ApiProgramsAddProgramsPost$Plain$Params } from '../fn/programs/api-programs-add-programs-post-plain';
import { apiProgramsDeleteProgramsIdDelete$Json } from '../fn/programs/api-programs-delete-programs-id-delete-json';
import { ApiProgramsDeleteProgramsIdDelete$Json$Params } from '../fn/programs/api-programs-delete-programs-id-delete-json';
import { apiProgramsDeleteProgramsIdDelete$Plain } from '../fn/programs/api-programs-delete-programs-id-delete-plain';
import { ApiProgramsDeleteProgramsIdDelete$Plain$Params } from '../fn/programs/api-programs-delete-programs-id-delete-plain';
import { apiProgramsEditProgramsPatch$Json } from '../fn/programs/api-programs-edit-programs-patch-json';
import { ApiProgramsEditProgramsPatch$Json$Params } from '../fn/programs/api-programs-edit-programs-patch-json';
import { apiProgramsEditProgramsPatch$Plain } from '../fn/programs/api-programs-edit-programs-patch-plain';
import { ApiProgramsEditProgramsPatch$Plain$Params } from '../fn/programs/api-programs-edit-programs-patch-plain';
import { apiProgramsGetProgramsByIdIdGet$Json } from '../fn/programs/api-programs-get-programs-by-id-id-get-json';
import { ApiProgramsGetProgramsByIdIdGet$Json$Params } from '../fn/programs/api-programs-get-programs-by-id-id-get-json';
import { apiProgramsGetProgramsByIdIdGet$Plain } from '../fn/programs/api-programs-get-programs-by-id-id-get-plain';
import { ApiProgramsGetProgramsByIdIdGet$Plain$Params } from '../fn/programs/api-programs-get-programs-by-id-id-get-plain';
import { apiProgramsGetProgramsGet$Json } from '../fn/programs/api-programs-get-programs-get-json';
import { ApiProgramsGetProgramsGet$Json$Params } from '../fn/programs/api-programs-get-programs-get-json';
import { apiProgramsGetProgramsGet$Plain } from '../fn/programs/api-programs-get-programs-get-plain';
import { ApiProgramsGetProgramsGet$Plain$Params } from '../fn/programs/api-programs-get-programs-get-plain';
import { Programs } from '../models/programs';
import { ProgramsListPaginationResult } from '../models/programs-list-pagination-result';

@Injectable({ providedIn: 'root' })
export class ProgramsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProgramsAddProgramsPost()` */
  static readonly ApiProgramsAddProgramsPostPath = '/api/Programs/AddPrograms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsAddProgramsPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProgramsAddProgramsPost$Plain$Response(params?: ApiProgramsAddProgramsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiProgramsAddProgramsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsAddProgramsPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProgramsAddProgramsPost$Plain(params?: ApiProgramsAddProgramsPost$Plain$Params, context?: HttpContext): Observable<Programs> {
    return this.apiProgramsAddProgramsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsAddProgramsPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProgramsAddProgramsPost$Json$Response(params?: ApiProgramsAddProgramsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiProgramsAddProgramsPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsAddProgramsPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProgramsAddProgramsPost$Json(params?: ApiProgramsAddProgramsPost$Json$Params, context?: HttpContext): Observable<Programs> {
    return this.apiProgramsAddProgramsPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

  /** Path part for operation `apiProgramsEditProgramsPatch()` */
  static readonly ApiProgramsEditProgramsPatchPath = '/api/Programs/EditPrograms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsEditProgramsPatch$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProgramsEditProgramsPatch$Plain$Response(params?: ApiProgramsEditProgramsPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiProgramsEditProgramsPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsEditProgramsPatch$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProgramsEditProgramsPatch$Plain(params?: ApiProgramsEditProgramsPatch$Plain$Params, context?: HttpContext): Observable<Programs> {
    return this.apiProgramsEditProgramsPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsEditProgramsPatch$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProgramsEditProgramsPatch$Json$Response(params?: ApiProgramsEditProgramsPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiProgramsEditProgramsPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsEditProgramsPatch$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiProgramsEditProgramsPatch$Json(params?: ApiProgramsEditProgramsPatch$Json$Params, context?: HttpContext): Observable<Programs> {
    return this.apiProgramsEditProgramsPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

  /** Path part for operation `apiProgramsGetProgramsGet()` */
  static readonly ApiProgramsGetProgramsGetPath = '/api/Programs/GetPrograms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsGetProgramsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsGetProgramsGet$Plain$Response(params?: ApiProgramsGetProgramsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProgramsListPaginationResult>> {
    return apiProgramsGetProgramsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsGetProgramsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsGetProgramsGet$Plain(params?: ApiProgramsGetProgramsGet$Plain$Params, context?: HttpContext): Observable<ProgramsListPaginationResult> {
    return this.apiProgramsGetProgramsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProgramsListPaginationResult>): ProgramsListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsGetProgramsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsGetProgramsGet$Json$Response(params?: ApiProgramsGetProgramsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProgramsListPaginationResult>> {
    return apiProgramsGetProgramsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsGetProgramsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsGetProgramsGet$Json(params?: ApiProgramsGetProgramsGet$Json$Params, context?: HttpContext): Observable<ProgramsListPaginationResult> {
    return this.apiProgramsGetProgramsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProgramsListPaginationResult>): ProgramsListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiProgramsGetProgramsByIdIdGet()` */
  static readonly ApiProgramsGetProgramsByIdIdGetPath = '/api/Programs/GetProgramsById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsGetProgramsByIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsGetProgramsByIdIdGet$Plain$Response(params: ApiProgramsGetProgramsByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiProgramsGetProgramsByIdIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsGetProgramsByIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsGetProgramsByIdIdGet$Plain(params: ApiProgramsGetProgramsByIdIdGet$Plain$Params, context?: HttpContext): Observable<Programs> {
    return this.apiProgramsGetProgramsByIdIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsGetProgramsByIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsGetProgramsByIdIdGet$Json$Response(params: ApiProgramsGetProgramsByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiProgramsGetProgramsByIdIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsGetProgramsByIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsGetProgramsByIdIdGet$Json(params: ApiProgramsGetProgramsByIdIdGet$Json$Params, context?: HttpContext): Observable<Programs> {
    return this.apiProgramsGetProgramsByIdIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

  /** Path part for operation `apiProgramsDeleteProgramsIdDelete()` */
  static readonly ApiProgramsDeleteProgramsIdDeletePath = '/api/Programs/DeletePrograms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsDeleteProgramsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsDeleteProgramsIdDelete$Plain$Response(params: ApiProgramsDeleteProgramsIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiProgramsDeleteProgramsIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsDeleteProgramsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsDeleteProgramsIdDelete$Plain(params: ApiProgramsDeleteProgramsIdDelete$Plain$Params, context?: HttpContext): Observable<Programs> {
    return this.apiProgramsDeleteProgramsIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProgramsDeleteProgramsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsDeleteProgramsIdDelete$Json$Response(params: ApiProgramsDeleteProgramsIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
    return apiProgramsDeleteProgramsIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProgramsDeleteProgramsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProgramsDeleteProgramsIdDelete$Json(params: ApiProgramsDeleteProgramsIdDelete$Json$Params, context?: HttpContext): Observable<Programs> {
    return this.apiProgramsDeleteProgramsIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Programs>): Programs => r.body)
    );
  }

}
