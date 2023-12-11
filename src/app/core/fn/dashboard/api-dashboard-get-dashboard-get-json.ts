/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DashboardDto } from '../../models/dashboard-dto';

export interface ApiDashboardGetDashboardGet$Json$Params {
}

export function apiDashboardGetDashboardGet$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardGetDashboardGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<DashboardDto>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardGetDashboardGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DashboardDto>;
    })
  );
}

apiDashboardGetDashboardGet$Json.PATH = '/api/Dashboard/GetDashboard';
