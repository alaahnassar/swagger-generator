/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IntroduceDto } from '../../models/introduce-dto';

export interface ApiIntroduceEditIntroducePost$Plain$Params {
      body?: {
'Id'?: number;
'titel'?: string;
'description'?: string;
'icon'?: string;
}
}

export function apiIntroduceEditIntroducePost$Plain(http: HttpClient, rootUrl: string, params?: ApiIntroduceEditIntroducePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<IntroduceDto>> {
  const rb = new RequestBuilder(rootUrl, apiIntroduceEditIntroducePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<IntroduceDto>;
    })
  );
}

apiIntroduceEditIntroducePost$Plain.PATH = '/api/Introduce/EditIntroduce';
