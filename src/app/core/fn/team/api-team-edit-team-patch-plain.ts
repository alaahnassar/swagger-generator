/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamDto } from '../../models/team-dto';

export interface ApiTeamEditTeamPatch$Plain$Params {
      body?: {
'id'?: number;
'name'?: string;
'titel'?: string;
'image'?: Blob;
}
}

export function apiTeamEditTeamPatch$Plain(http: HttpClient, rootUrl: string, params?: ApiTeamEditTeamPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamDto>> {
  const rb = new RequestBuilder(rootUrl, apiTeamEditTeamPatch$Plain.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TeamDto>;
    })
  );
}

apiTeamEditTeamPatch$Plain.PATH = '/api/Team/EditTeam';
