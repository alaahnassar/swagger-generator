/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Programs } from '../../models/programs';

export interface ApiProgramsEditProgramsPatch$Json$Params {
      body?: {
'id'?: number;
'titel'?: string;
'subtitel'?: string;
'description'?: string;
}
}

export function apiProgramsEditProgramsPatch$Json(http: HttpClient, rootUrl: string, params?: ApiProgramsEditProgramsPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
  const rb = new RequestBuilder(rootUrl, apiProgramsEditProgramsPatch$Json.PATH, 'patch');
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

apiProgramsEditProgramsPatch$Json.PATH = '/api/Programs/EditPrograms';
