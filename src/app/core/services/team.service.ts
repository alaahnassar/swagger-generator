/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiTeamAddTeamPost$Json } from '../fn/team/api-team-add-team-post-json';
import { ApiTeamAddTeamPost$Json$Params } from '../fn/team/api-team-add-team-post-json';
import { apiTeamAddTeamPost$Plain } from '../fn/team/api-team-add-team-post-plain';
import { ApiTeamAddTeamPost$Plain$Params } from '../fn/team/api-team-add-team-post-plain';
import { apiTeamDeleteTeamIdDelete$Json } from '../fn/team/api-team-delete-team-id-delete-json';
import { ApiTeamDeleteTeamIdDelete$Json$Params } from '../fn/team/api-team-delete-team-id-delete-json';
import { apiTeamDeleteTeamIdDelete$Plain } from '../fn/team/api-team-delete-team-id-delete-plain';
import { ApiTeamDeleteTeamIdDelete$Plain$Params } from '../fn/team/api-team-delete-team-id-delete-plain';
import { apiTeamEditTeamPatch$Json } from '../fn/team/api-team-edit-team-patch-json';
import { ApiTeamEditTeamPatch$Json$Params } from '../fn/team/api-team-edit-team-patch-json';
import { apiTeamEditTeamPatch$Plain } from '../fn/team/api-team-edit-team-patch-plain';
import { ApiTeamEditTeamPatch$Plain$Params } from '../fn/team/api-team-edit-team-patch-plain';
import { apiTeamGetTeamByIdIdGet$Json } from '../fn/team/api-team-get-team-by-id-id-get-json';
import { ApiTeamGetTeamByIdIdGet$Json$Params } from '../fn/team/api-team-get-team-by-id-id-get-json';
import { apiTeamGetTeamByIdIdGet$Plain } from '../fn/team/api-team-get-team-by-id-id-get-plain';
import { ApiTeamGetTeamByIdIdGet$Plain$Params } from '../fn/team/api-team-get-team-by-id-id-get-plain';
import { apiTeamGetTeamGet$Json } from '../fn/team/api-team-get-team-get-json';
import { ApiTeamGetTeamGet$Json$Params } from '../fn/team/api-team-get-team-get-json';
import { apiTeamGetTeamGet$Plain } from '../fn/team/api-team-get-team-get-plain';
import { ApiTeamGetTeamGet$Plain$Params } from '../fn/team/api-team-get-team-get-plain';
import { Team } from '../models/team';
import { TeamDto } from '../models/team-dto';
import { TeamListPaginationResult } from '../models/team-list-pagination-result';

@Injectable({ providedIn: 'root' })
export class TeamService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiTeamAddTeamPost()` */
  static readonly ApiTeamAddTeamPostPath = '/api/Team/AddTeam';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamAddTeamPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiTeamAddTeamPost$Plain$Response(params?: ApiTeamAddTeamPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Team>> {
    return apiTeamAddTeamPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamAddTeamPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiTeamAddTeamPost$Plain(params?: ApiTeamAddTeamPost$Plain$Params, context?: HttpContext): Observable<Team> {
    return this.apiTeamAddTeamPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Team>): Team => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamAddTeamPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiTeamAddTeamPost$Json$Response(params?: ApiTeamAddTeamPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Team>> {
    return apiTeamAddTeamPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamAddTeamPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiTeamAddTeamPost$Json(params?: ApiTeamAddTeamPost$Json$Params, context?: HttpContext): Observable<Team> {
    return this.apiTeamAddTeamPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Team>): Team => r.body)
    );
  }

  /** Path part for operation `apiTeamEditTeamPatch()` */
  static readonly ApiTeamEditTeamPatchPath = '/api/Team/EditTeam';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamEditTeamPatch$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiTeamEditTeamPatch$Plain$Response(params?: ApiTeamEditTeamPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamDto>> {
    return apiTeamEditTeamPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamEditTeamPatch$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiTeamEditTeamPatch$Plain(params?: ApiTeamEditTeamPatch$Plain$Params, context?: HttpContext): Observable<TeamDto> {
    return this.apiTeamEditTeamPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamDto>): TeamDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamEditTeamPatch$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiTeamEditTeamPatch$Json$Response(params?: ApiTeamEditTeamPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamDto>> {
    return apiTeamEditTeamPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamEditTeamPatch$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiTeamEditTeamPatch$Json(params?: ApiTeamEditTeamPatch$Json$Params, context?: HttpContext): Observable<TeamDto> {
    return this.apiTeamEditTeamPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamDto>): TeamDto => r.body)
    );
  }

  /** Path part for operation `apiTeamGetTeamGet()` */
  static readonly ApiTeamGetTeamGetPath = '/api/Team/GetTeam';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamGetTeamGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamGetTeamGet$Plain$Response(params?: ApiTeamGetTeamGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamListPaginationResult>> {
    return apiTeamGetTeamGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamGetTeamGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamGetTeamGet$Plain(params?: ApiTeamGetTeamGet$Plain$Params, context?: HttpContext): Observable<TeamListPaginationResult> {
    return this.apiTeamGetTeamGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamListPaginationResult>): TeamListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamGetTeamGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamGetTeamGet$Json$Response(params?: ApiTeamGetTeamGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamListPaginationResult>> {
    return apiTeamGetTeamGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamGetTeamGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamGetTeamGet$Json(params?: ApiTeamGetTeamGet$Json$Params, context?: HttpContext): Observable<TeamListPaginationResult> {
    return this.apiTeamGetTeamGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamListPaginationResult>): TeamListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiTeamGetTeamByIdIdGet()` */
  static readonly ApiTeamGetTeamByIdIdGetPath = '/api/Team/GetTeamById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamGetTeamByIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamGetTeamByIdIdGet$Plain$Response(params: ApiTeamGetTeamByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Team>> {
    return apiTeamGetTeamByIdIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamGetTeamByIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamGetTeamByIdIdGet$Plain(params: ApiTeamGetTeamByIdIdGet$Plain$Params, context?: HttpContext): Observable<Team> {
    return this.apiTeamGetTeamByIdIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Team>): Team => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamGetTeamByIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamGetTeamByIdIdGet$Json$Response(params: ApiTeamGetTeamByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Team>> {
    return apiTeamGetTeamByIdIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamGetTeamByIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamGetTeamByIdIdGet$Json(params: ApiTeamGetTeamByIdIdGet$Json$Params, context?: HttpContext): Observable<Team> {
    return this.apiTeamGetTeamByIdIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Team>): Team => r.body)
    );
  }

  /** Path part for operation `apiTeamDeleteTeamIdDelete()` */
  static readonly ApiTeamDeleteTeamIdDeletePath = '/api/Team/DeleteTeam/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamDeleteTeamIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamDeleteTeamIdDelete$Plain$Response(params: ApiTeamDeleteTeamIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Team>> {
    return apiTeamDeleteTeamIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamDeleteTeamIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamDeleteTeamIdDelete$Plain(params: ApiTeamDeleteTeamIdDelete$Plain$Params, context?: HttpContext): Observable<Team> {
    return this.apiTeamDeleteTeamIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Team>): Team => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeamDeleteTeamIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamDeleteTeamIdDelete$Json$Response(params: ApiTeamDeleteTeamIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Team>> {
    return apiTeamDeleteTeamIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeamDeleteTeamIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeamDeleteTeamIdDelete$Json(params: ApiTeamDeleteTeamIdDelete$Json$Params, context?: HttpContext): Observable<Team> {
    return this.apiTeamDeleteTeamIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Team>): Team => r.body)
    );
  }

}
