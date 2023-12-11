/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerManagementImage } from '../../models/player-management-image';

export interface ApiPlayerManagementDeletePlayerManagementImageIdDelete$Json$Params {
  id: number;
}

export function apiPlayerManagementDeletePlayerManagementImageIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiPlayerManagementDeletePlayerManagementImageIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementImage>> {
  const rb = new RequestBuilder(rootUrl, apiPlayerManagementDeletePlayerManagementImageIdDelete$Json.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlayerManagementImage>;
    })
  );
}

apiPlayerManagementDeletePlayerManagementImageIdDelete$Json.PATH = '/api/PlayerManagement/DeletePlayerManagementImage/{id}';
