/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerManagementDto } from '../../models/player-management-dto';

export interface ApiPlayerManagementEditPlayerManagementPatch$Json$Params {
      body?: {
'id'?: number;
'titel'?: string;
'description'?: string;
'date'?: string;
'image'?: Blob;
}
}

export function apiPlayerManagementEditPlayerManagementPatch$Json(http: HttpClient, rootUrl: string, params?: ApiPlayerManagementEditPlayerManagementPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerManagementDto>> {
  const rb = new RequestBuilder(rootUrl, apiPlayerManagementEditPlayerManagementPatch$Json.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlayerManagementDto>;
    })
  );
}

apiPlayerManagementEditPlayerManagementPatch$Json.PATH = '/api/PlayerManagement/EditPlayerManagement';
