/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerManagementImage } from '../../models/player-management-image';

export interface ApiPlayerManagementAddPlayerManagementImagePost$Plain$Params {
      body?: {
'playerMangId'?: number;
'image'?: Blob;
}
}

export function apiPlayerManagementAddPlayerManagementImagePost$Plain(http: HttpClient, rootUrl: string, params?: ApiPlayerManagementAddPlayerManagementImagePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementImage>> {
  const rb = new RequestBuilder(rootUrl, apiPlayerManagementAddPlayerManagementImagePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlayerManagementImage>;
    })
  );
}

apiPlayerManagementAddPlayerManagementImagePost$Plain.PATH = '/api/PlayerManagement/AddPlayerManagementImage';
