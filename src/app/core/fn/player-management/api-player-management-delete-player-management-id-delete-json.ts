/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerManagement } from '../../models/player-management';

export interface ApiPlayerManagementDeletePlayerManagementIdDelete$Json$Params {
  id: number;
}

export function apiPlayerManagementDeletePlayerManagementIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiPlayerManagementDeletePlayerManagementIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagement>> {
  const rb = new RequestBuilder(rootUrl, apiPlayerManagementDeletePlayerManagementIdDelete$Json.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlayerManagement>;
    })
  );
}

apiPlayerManagementDeletePlayerManagementIdDelete$Json.PATH = '/api/PlayerManagement/DeletePlayerManagement/{id}';
