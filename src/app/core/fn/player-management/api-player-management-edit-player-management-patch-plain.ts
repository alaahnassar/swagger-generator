/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerManagementDto } from '../../models/player-management-dto';

export interface ApiPlayerManagementEditPlayerManagementPatch$Plain$Params {
      body?: {
'id'?: number;
'titel'?: string;
'description'?: string;
'date'?: string;
'image'?: Blob;
}
}

export function apiPlayerManagementEditPlayerManagementPatch$Plain(http: HttpClient, rootUrl: string, params?: ApiPlayerManagementEditPlayerManagementPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementDto>> {
  const rb = new RequestBuilder(rootUrl, apiPlayerManagementEditPlayerManagementPatch$Plain.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlayerManagementDto>;
    })
  );
}

apiPlayerManagementEditPlayerManagementPatch$Plain.PATH = '/api/PlayerManagement/EditPlayerManagement';
