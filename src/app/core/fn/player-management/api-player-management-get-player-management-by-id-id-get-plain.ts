/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerManagement } from '../../models/player-management';

export interface ApiPlayerManagementGetPlayerManagementByIdIdGet$Plain$Params {
  id: number;
}

export function apiPlayerManagementGetPlayerManagementByIdIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiPlayerManagementGetPlayerManagementByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagement>> {
  const rb = new RequestBuilder(rootUrl, apiPlayerManagementGetPlayerManagementByIdIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlayerManagement>;
    })
  );
}

apiPlayerManagementGetPlayerManagementByIdIdGet$Plain.PATH = '/api/PlayerManagement/GetPlayerManagementById/{id}';
