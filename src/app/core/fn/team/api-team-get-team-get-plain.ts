/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamListPaginationResult } from '../../models/team-list-pagination-result';

export interface ApiTeamGetTeamGet$Plain$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiTeamGetTeamGet$Plain(http: HttpClient, rootUrl: string, params?: ApiTeamGetTeamGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiTeamGetTeamGet$Plain.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TeamListPaginationResult>;
    })
  );
}

apiTeamGetTeamGet$Plain.PATH = '/api/Team/GetTeam';
