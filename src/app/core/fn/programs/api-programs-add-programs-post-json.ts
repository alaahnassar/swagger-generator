/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Programs } from '../../models/programs';

export interface ApiProgramsAddProgramsPost$Json$Params {
      body?: {
'titel'?: string;
'subtitel'?: string;
'description'?: string;
}
}

export function apiProgramsAddProgramsPost$Json(http: HttpClient, rootUrl: string, params?: ApiProgramsAddProgramsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
  const rb = new RequestBuilder(rootUrl, apiProgramsAddProgramsPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

apiProgramsAddProgramsPost$Json.PATH = '/api/Programs/AddPrograms';
