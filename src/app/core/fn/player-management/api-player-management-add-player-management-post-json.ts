/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerManagement } from '../../models/player-management';

export interface ApiPlayerManagementAddPlayerManagementPost$Json$Params {
      body?: {
'titel'?: string;
'description'?: string;
'date'?: string;
'image'?: Blob;
}
}

export function apiPlayerManagementAddPlayerManagementPost$Json(http: HttpClient, rootUrl: string, params?: ApiPlayerManagementAddPlayerManagementPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagement>> {
  const rb = new RequestBuilder(rootUrl, apiPlayerManagementAddPlayerManagementPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

apiPlayerManagementAddPlayerManagementPost$Json.PATH = '/api/PlayerManagement/AddPlayerManagement';
