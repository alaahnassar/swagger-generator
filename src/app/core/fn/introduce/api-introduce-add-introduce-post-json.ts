/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Introduce } from '../../models/introduce';

export interface ApiIntroduceAddIntroducePost$Json$Params {
      body?: {
'titel'?: string;
'description'?: string;
'icon'?: string;
}
}

export function apiIntroduceAddIntroducePost$Json(http: HttpClient, rootUrl: string, params?: ApiIntroduceAddIntroducePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
  const rb = new RequestBuilder(rootUrl, apiIntroduceAddIntroducePost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Introduce>;
    })
  );
}

apiIntroduceAddIntroducePost$Json.PATH = '/api/Introduce/AddIntroduce';
