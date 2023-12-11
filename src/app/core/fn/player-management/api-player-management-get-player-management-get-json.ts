/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerManagementListPaginationResult } from '../../models/player-management-list-pagination-result';

export interface ApiPlayerManagementGetPlayerManagementGet$Json$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiPlayerManagementGetPlayerManagementGet$Json(http: HttpClient, rootUrl: string, params?: ApiPlayerManagementGetPlayerManagementGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiPlayerManagementGetPlayerManagementGet$Json.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlayerManagementListPaginationResult>;
    })
  );
}

apiPlayerManagementGetPlayerManagementGet$Json.PATH = '/api/PlayerManagement/GetPlayerManagement';
