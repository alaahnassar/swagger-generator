/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Introduce } from '../../models/introduce';

export interface ApiIntroduceAddIntroducePost$Plain$Params {
      body?: {
'titel'?: string;
'description'?: string;
'icon'?: string;
}
}

export function apiIntroduceAddIntroducePost$Plain(http: HttpClient, rootUrl: string, params?: ApiIntroduceAddIntroducePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
  const rb = new RequestBuilder(rootUrl, apiIntroduceAddIntroducePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Introduce>;
    })
  );
}

apiIntroduceAddIntroducePost$Plain.PATH = '/api/Introduce/AddIntroduce';
