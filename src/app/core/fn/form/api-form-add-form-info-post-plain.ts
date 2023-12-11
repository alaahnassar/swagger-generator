/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormInfo } from '../../models/form-info';

export interface ApiFormAddFormInfoPost$Plain$Params {
      body?: {
'playerName'?: string;
'date'?: string;
'mobileNumber'?: string;
'gender'?: string;
'playedMethod'?: string;
'clubName'?: string;
'startAgeTennis'?: string;
'startAgeTournaments'?: string;
'nationality'?: string;
'city'?: string;
'email'?: string;
'comment'?: string;
'status'?: string;
}
}

export function apiFormAddFormInfoPost$Plain(http: HttpClient, rootUrl: string, params?: ApiFormAddFormInfoPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
  const rb = new RequestBuilder(rootUrl, apiFormAddFormInfoPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FormInfo>;
    })
  );
}

apiFormAddFormInfoPost$Plain.PATH = '/api/Form/AddFormInfo';
