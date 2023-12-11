/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EditCampDto } from '../../models/edit-camp-dto';

export interface ApiCampEditCampPatch$Plain$Params {
      body?: {
'id'?: number;
'titel'?: string;
'date'?: string;
}
}

export function apiCampEditCampPatch$Plain(http: HttpClient, rootUrl: string, params?: ApiCampEditCampPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<EditCampDto>> {
  const rb = new RequestBuilder(rootUrl, apiCampEditCampPatch$Plain.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EditCampDto>;
    })
  );
}

apiCampEditCampPatch$Plain.PATH = '/api/Camp/EditCamp';
