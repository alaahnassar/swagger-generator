/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Programs } from '../../models/programs';

export interface ApiProgramsGetProgramsByIdIdGet$Plain$Params {
  id: number;
}

export function apiProgramsGetProgramsByIdIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiProgramsGetProgramsByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
  const rb = new RequestBuilder(rootUrl, apiProgramsGetProgramsByIdIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Programs>;
    })
  );
}

apiProgramsGetProgramsByIdIdGet$Plain.PATH = '/api/Programs/GetProgramsById/{id}';
