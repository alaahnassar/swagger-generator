/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Team } from '../../models/team';

export interface ApiTeamDeleteTeamIdDelete$Plain$Params {
  id: number;
}

export function apiTeamDeleteTeamIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiTeamDeleteTeamIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Team>> {
  const rb = new RequestBuilder(rootUrl, apiTeamDeleteTeamIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
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

apiTeamDeleteTeamIdDelete$Plain.PATH = '/api/Team/DeleteTeam/{id}';
