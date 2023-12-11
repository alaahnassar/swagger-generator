/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDashboardGetDashboardGet$Json } from '../fn/dashboard/api-dashboard-get-dashboard-get-json';
import { ApiDashboardGetDashboardGet$Json$Params } from '../fn/dashboard/api-dashboard-get-dashboard-get-json';
import { apiDashboardGetDashboardGet$Plain } from '../fn/dashboard/api-dashboard-get-dashboard-get-plain';
import { ApiDashboardGetDashboardGet$Plain$Params } from '../fn/dashboard/api-dashboard-get-dashboard-get-plain';
import { DashboardDto } from '../models/dashboard-dto';

@Injectable({ providedIn: 'root' })
export class DashboardService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDashboardGetDashboardGet()` */
  static readonly ApiDashboardGetDashboardGetPath = '/api/Dashboard/GetDashboard';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardGetDashboardGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardGetDashboardGet$Plain$Response(params?: ApiDashboardGetDashboardGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DashboardDto>> {
    return apiDashboardGetDashboardGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardGetDashboardGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardGetDashboardGet$Plain(params?: ApiDashboardGetDashboardGet$Plain$Params, context?: HttpContext): Observable<DashboardDto> {
    return this.apiDashboardGetDashboardGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DashboardDto>): DashboardDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardGetDashboardGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardGetDashboardGet$Json$Response(params?: ApiDashboardGetDashboardGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<DashboardDto>> {
    return apiDashboardGetDashboardGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardGetDashboardGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardGetDashboardGet$Json(params?: ApiDashboardGetDashboardGet$Json$Params, context?: HttpContext): Observable<DashboardDto> {
    return this.apiDashboardGetDashboardGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<DashboardDto>): DashboardDto => r.body)
    );
  }

}
