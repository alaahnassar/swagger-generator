/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Team } from '../../models/team';

export interface ApiTeamAddTeamPost$Plain$Params {
      body?: {
'name'?: string;
'titel'?: string;
'image'?: Blob;
}
}

export function apiTeamAddTeamPost$Plain(http: HttpClient, rootUrl: string, params?: ApiTeamAddTeamPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Team>> {
  const rb = new RequestBuilder(rootUrl, apiTeamAddTeamPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Team>;
    })
  );
}

apiTeamAddTeamPost$Plain.PATH = '/api/Team/AddTeam';
