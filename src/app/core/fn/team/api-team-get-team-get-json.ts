/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamListPaginationResult } from '../../models/team-list-pagination-result';

export interface ApiTeamGetTeamGet$Json$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiTeamGetTeamGet$Json(http: HttpClient, rootUrl: string, params?: ApiTeamGetTeamGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiTeamGetTeamGet$Json.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TeamListPaginationResult>;
    })
  );
}

apiTeamGetTeamGet$Json.PATH = '/api/Team/GetTeam';
