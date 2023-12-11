/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerManagementListPaginationResult } from '../../models/player-management-list-pagination-result';

export interface ApiPlayerManagementGetPlayerManagementGet$Plain$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiPlayerManagementGetPlayerManagementGet$Plain(http: HttpClient, rootUrl: string, params?: ApiPlayerManagementGetPlayerManagementGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiPlayerManagementGetPlayerManagementGet$Plain.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlayerManagementListPaginationResult>;
    })
  );
}

apiPlayerManagementGetPlayerManagementGet$Plain.PATH = '/api/PlayerManagement/GetPlayerManagement';
