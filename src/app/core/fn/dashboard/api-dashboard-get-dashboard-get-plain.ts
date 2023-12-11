/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DashboardDto } from '../../models/dashboard-dto';

export interface ApiDashboardGetDashboardGet$Plain$Params {
}

export function apiDashboardGetDashboardGet$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardGetDashboardGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DashboardDto>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardGetDashboardGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DashboardDto>;
    })
  );
}

apiDashboardGetDashboardGet$Plain.PATH = '/api/Dashboard/GetDashboard';
