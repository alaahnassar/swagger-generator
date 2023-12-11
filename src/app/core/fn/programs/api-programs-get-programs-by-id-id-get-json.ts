/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Programs } from '../../models/programs';

export interface ApiProgramsGetProgramsByIdIdGet$Json$Params {
  id: number;
}

export function apiProgramsGetProgramsByIdIdGet$Json(http: HttpClient, rootUrl: string, params: ApiProgramsGetProgramsByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
  const rb = new RequestBuilder(rootUrl, apiProgramsGetProgramsByIdIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Programs>;
    })
  );
}

apiProgramsGetProgramsByIdIdGet$Json.PATH = '/api/Programs/GetProgramsById/{id}';
