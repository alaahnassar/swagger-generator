/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPlayerManagementAddPlayerManagementImagePost$Json } from '../fn/player-management/api-player-management-add-player-management-image-post-json';
import { ApiPlayerManagementAddPlayerManagementImagePost$Json$Params } from '../fn/player-management/api-player-management-add-player-management-image-post-json';
import { apiPlayerManagementAddPlayerManagementImagePost$Plain } from '../fn/player-management/api-player-management-add-player-management-image-post-plain';
import { ApiPlayerManagementAddPlayerManagementImagePost$Plain$Params } from '../fn/player-management/api-player-management-add-player-management-image-post-plain';
import { apiPlayerManagementAddPlayerManagementPost$Json } from '../fn/player-management/api-player-management-add-player-management-post-json';
import { ApiPlayerManagementAddPlayerManagementPost$Json$Params } from '../fn/player-management/api-player-management-add-player-management-post-json';
import { apiPlayerManagementAddPlayerManagementPost$Plain } from '../fn/player-management/api-player-management-add-player-management-post-plain';
import { ApiPlayerManagementAddPlayerManagementPost$Plain$Params } from '../fn/player-management/api-player-management-add-player-management-post-plain';
import { apiPlayerManagementDeletePlayerManagementIdDelete$Json } from '../fn/player-management/api-player-management-delete-player-management-id-delete-json';
import { ApiPlayerManagementDeletePlayerManagementIdDelete$Json$Params } from '../fn/player-management/api-player-management-delete-player-management-id-delete-json';
import { apiPlayerManagementDeletePlayerManagementIdDelete$Plain } from '../fn/player-management/api-player-management-delete-player-management-id-delete-plain';
import { ApiPlayerManagementDeletePlayerManagementIdDelete$Plain$Params } from '../fn/player-management/api-player-management-delete-player-management-id-delete-plain';
import { apiPlayerManagementDeletePlayerManagementImageIdDelete$Json } from '../fn/player-management/api-player-management-delete-player-management-image-id-delete-json';
import { ApiPlayerManagementDeletePlayerManagementImageIdDelete$Json$Params } from '../fn/player-management/api-player-management-delete-player-management-image-id-delete-json';
import { apiPlayerManagementDeletePlayerManagementImageIdDelete$Plain } from '../fn/player-management/api-player-management-delete-player-management-image-id-delete-plain';
import { ApiPlayerManagementDeletePlayerManagementImageIdDelete$Plain$Params } from '../fn/player-management/api-player-management-delete-player-management-image-id-delete-plain';
import { apiPlayerManagementEditPlayerManagementPatch$Json } from '../fn/player-management/api-player-management-edit-player-management-patch-json';
import { ApiPlayerManagementEditPlayerManagementPatch$Json$Params } from '../fn/player-management/api-player-management-edit-player-management-patch-json';
import { apiPlayerManagementEditPlayerManagementPatch$Plain } from '../fn/player-management/api-player-management-edit-player-management-patch-plain';
import { ApiPlayerManagementEditPlayerManagementPatch$Plain$Params } from '../fn/player-management/api-player-management-edit-player-management-patch-plain';
import { apiPlayerManagementGetPlayerManagementByIdIdGet$Json } from '../fn/player-management/api-player-management-get-player-management-by-id-id-get-json';
import { ApiPlayerManagementGetPlayerManagementByIdIdGet$Json$Params } from '../fn/player-management/api-player-management-get-player-management-by-id-id-get-json';
import { apiPlayerManagementGetPlayerManagementByIdIdGet$Plain } from '../fn/player-management/api-player-management-get-player-management-by-id-id-get-plain';
import { ApiPlayerManagementGetPlayerManagementByIdIdGet$Plain$Params } from '../fn/player-management/api-player-management-get-player-management-by-id-id-get-plain';
import { apiPlayerManagementGetPlayerManagementGet$Json } from '../fn/player-management/api-player-management-get-player-management-get-json';
import { ApiPlayerManagementGetPlayerManagementGet$Json$Params } from '../fn/player-management/api-player-management-get-player-management-get-json';
import { apiPlayerManagementGetPlayerManagementGet$Plain } from '../fn/player-management/api-player-management-get-player-management-get-plain';
import { ApiPlayerManagementGetPlayerManagementGet$Plain$Params } from '../fn/player-management/api-player-management-get-player-management-get-plain';
import { PlayerManagement } from '../models/player-management';
import { PlayerManagementDto } from '../models/player-management-dto';
import { PlayerManagementImage } from '../models/player-management-image';
import { PlayerManagementListPaginationResult } from '../models/player-management-list-pagination-result';

@Injectable({ providedIn: 'root' })
export class PlayerManagementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPlayerManagementAddPlayerManagementPost()` */
  static readonly ApiPlayerManagementAddPlayerManagementPostPath = '/api/PlayerManagement/AddPlayerManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementAddPlayerManagementPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementAddPlayerManagementPost$Plain$Response(params?: ApiPlayerManagementAddPlayerManagementPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagement>> {
    return apiPlayerManagementAddPlayerManagementPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementAddPlayerManagementPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementAddPlayerManagementPost$Plain(params?: ApiPlayerManagementAddPlayerManagementPost$Plain$Params, context?: HttpContext): Observable<PlayerManagement> {
    return this.apiPlayerManagementAddPlayerManagementPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagement>): PlayerManagement => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementAddPlayerManagementPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementAddPlayerManagementPost$Json$Response(params?: ApiPlayerManagementAddPlayerManagementPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagement>> {
    return apiPlayerManagementAddPlayerManagementPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementAddPlayerManagementPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementAddPlayerManagementPost$Json(params?: ApiPlayerManagementAddPlayerManagementPost$Json$Params, context?: HttpContext): Observable<PlayerManagement> {
    return this.apiPlayerManagementAddPlayerManagementPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagement>): PlayerManagement => r.body)
    );
  }

  /** Path part for operation `apiPlayerManagementEditPlayerManagementPatch()` */
  static readonly ApiPlayerManagementEditPlayerManagementPatchPath = '/api/PlayerManagement/EditPlayerManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementEditPlayerManagementPatch$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementEditPlayerManagementPatch$Plain$Response(params?: ApiPlayerManagementEditPlayerManagementPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementDto>> {
    return apiPlayerManagementEditPlayerManagementPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementEditPlayerManagementPatch$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementEditPlayerManagementPatch$Plain(params?: ApiPlayerManagementEditPlayerManagementPatch$Plain$Params, context?: HttpContext): Observable<PlayerManagementDto> {
    return this.apiPlayerManagementEditPlayerManagementPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagementDto>): PlayerManagementDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementEditPlayerManagementPatch$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementEditPlayerManagementPatch$Json$Response(params?: ApiPlayerManagementEditPlayerManagementPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementDto>> {
    return apiPlayerManagementEditPlayerManagementPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementEditPlayerManagementPatch$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementEditPlayerManagementPatch$Json(params?: ApiPlayerManagementEditPlayerManagementPatch$Json$Params, context?: HttpContext): Observable<PlayerManagementDto> {
    return this.apiPlayerManagementEditPlayerManagementPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagementDto>): PlayerManagementDto => r.body)
    );
  }

  /** Path part for operation `apiPlayerManagementGetPlayerManagementGet()` */
  static readonly ApiPlayerManagementGetPlayerManagementGetPath = '/api/PlayerManagement/GetPlayerManagement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementGetPlayerManagementGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementGetPlayerManagementGet$Plain$Response(params?: ApiPlayerManagementGetPlayerManagementGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementListPaginationResult>> {
    return apiPlayerManagementGetPlayerManagementGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementGetPlayerManagementGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementGetPlayerManagementGet$Plain(params?: ApiPlayerManagementGetPlayerManagementGet$Plain$Params, context?: HttpContext): Observable<PlayerManagementListPaginationResult> {
    return this.apiPlayerManagementGetPlayerManagementGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagementListPaginationResult>): PlayerManagementListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementGetPlayerManagementGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementGetPlayerManagementGet$Json$Response(params?: ApiPlayerManagementGetPlayerManagementGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementListPaginationResult>> {
    return apiPlayerManagementGetPlayerManagementGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementGetPlayerManagementGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementGetPlayerManagementGet$Json(params?: ApiPlayerManagementGetPlayerManagementGet$Json$Params, context?: HttpContext): Observable<PlayerManagementListPaginationResult> {
    return this.apiPlayerManagementGetPlayerManagementGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagementListPaginationResult>): PlayerManagementListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiPlayerManagementGetPlayerManagementByIdIdGet()` */
  static readonly ApiPlayerManagementGetPlayerManagementByIdIdGetPath = '/api/PlayerManagement/GetPlayerManagementById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementGetPlayerManagementByIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementGetPlayerManagementByIdIdGet$Plain$Response(params: ApiPlayerManagementGetPlayerManagementByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagement>> {
    return apiPlayerManagementGetPlayerManagementByIdIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementGetPlayerManagementByIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementGetPlayerManagementByIdIdGet$Plain(params: ApiPlayerManagementGetPlayerManagementByIdIdGet$Plain$Params, context?: HttpContext): Observable<PlayerManagement> {
    return this.apiPlayerManagementGetPlayerManagementByIdIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagement>): PlayerManagement => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementGetPlayerManagementByIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementGetPlayerManagementByIdIdGet$Json$Response(params: ApiPlayerManagementGetPlayerManagementByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagement>> {
    return apiPlayerManagementGetPlayerManagementByIdIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementGetPlayerManagementByIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementGetPlayerManagementByIdIdGet$Json(params: ApiPlayerManagementGetPlayerManagementByIdIdGet$Json$Params, context?: HttpContext): Observable<PlayerManagement> {
    return this.apiPlayerManagementGetPlayerManagementByIdIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagement>): PlayerManagement => r.body)
    );
  }

  /** Path part for operation `apiPlayerManagementDeletePlayerManagementIdDelete()` */
  static readonly ApiPlayerManagementDeletePlayerManagementIdDeletePath = '/api/PlayerManagement/DeletePlayerManagement/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementDeletePlayerManagementIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementDeletePlayerManagementIdDelete$Plain$Response(params: ApiPlayerManagementDeletePlayerManagementIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagement>> {
    return apiPlayerManagementDeletePlayerManagementIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementDeletePlayerManagementIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementDeletePlayerManagementIdDelete$Plain(params: ApiPlayerManagementDeletePlayerManagementIdDelete$Plain$Params, context?: HttpContext): Observable<PlayerManagement> {
    return this.apiPlayerManagementDeletePlayerManagementIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagement>): PlayerManagement => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementDeletePlayerManagementIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementDeletePlayerManagementIdDelete$Json$Response(params: ApiPlayerManagementDeletePlayerManagementIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagement>> {
    return apiPlayerManagementDeletePlayerManagementIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementDeletePlayerManagementIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementDeletePlayerManagementIdDelete$Json(params: ApiPlayerManagementDeletePlayerManagementIdDelete$Json$Params, context?: HttpContext): Observable<PlayerManagement> {
    return this.apiPlayerManagementDeletePlayerManagementIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagement>): PlayerManagement => r.body)
    );
  }

  /** Path part for operation `apiPlayerManagementAddPlayerManagementImagePost()` */
  static readonly ApiPlayerManagementAddPlayerManagementImagePostPath = '/api/PlayerManagement/AddPlayerManagementImage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementAddPlayerManagementImagePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementAddPlayerManagementImagePost$Plain$Response(params?: ApiPlayerManagementAddPlayerManagementImagePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementImage>> {
    return apiPlayerManagementAddPlayerManagementImagePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementAddPlayerManagementImagePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementAddPlayerManagementImagePost$Plain(params?: ApiPlayerManagementAddPlayerManagementImagePost$Plain$Params, context?: HttpContext): Observable<PlayerManagementImage> {
    return this.apiPlayerManagementAddPlayerManagementImagePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagementImage>): PlayerManagementImage => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementAddPlayerManagementImagePost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementAddPlayerManagementImagePost$Json$Response(params?: ApiPlayerManagementAddPlayerManagementImagePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementImage>> {
    return apiPlayerManagementAddPlayerManagementImagePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementAddPlayerManagementImagePost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiPlayerManagementAddPlayerManagementImagePost$Json(params?: ApiPlayerManagementAddPlayerManagementImagePost$Json$Params, context?: HttpContext): Observable<PlayerManagementImage> {
    return this.apiPlayerManagementAddPlayerManagementImagePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagementImage>): PlayerManagementImage => r.body)
    );
  }

  /** Path part for operation `apiPlayerManagementDeletePlayerManagementImageIdDelete()` */
  static readonly ApiPlayerManagementDeletePlayerManagementImageIdDeletePath = '/api/PlayerManagement/DeletePlayerManagementImage/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementDeletePlayerManagementImageIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementDeletePlayerManagementImageIdDelete$Plain$Response(params: ApiPlayerManagementDeletePlayerManagementImageIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementImage>> {
    return apiPlayerManagementDeletePlayerManagementImageIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementDeletePlayerManagementImageIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementDeletePlayerManagementImageIdDelete$Plain(params: ApiPlayerManagementDeletePlayerManagementImageIdDelete$Plain$Params, context?: HttpContext): Observable<PlayerManagementImage> {
    return this.apiPlayerManagementDeletePlayerManagementImageIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagementImage>): PlayerManagementImage => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlayerManagementDeletePlayerManagementImageIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementDeletePlayerManagementImageIdDelete$Json$Response(params: ApiPlayerManagementDeletePlayerManagementImageIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementImage>> {
    return apiPlayerManagementDeletePlayerManagementImageIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlayerManagementDeletePlayerManagementImageIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlayerManagementDeletePlayerManagementImageIdDelete$Json(params: ApiPlayerManagementDeletePlayerManagementImageIdDelete$Json$Params, context?: HttpContext): Observable<PlayerManagementImage> {
    return this.apiPlayerManagementDeletePlayerManagementImageIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerManagementImage>): PlayerManagementImage => r.body)
    );
  }

}
