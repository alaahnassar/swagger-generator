/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Introduce } from '../../models/introduce';

export interface ApiIntroduceDeleteIntroduceIdDelete$Plain$Params {
  id: number;
}

export function apiIntroduceDeleteIntroduceIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiIntroduceDeleteIntroduceIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
  const rb = new RequestBuilder(rootUrl, apiIntroduceDeleteIntroduceIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
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

apiIntroduceDeleteIntroduceIdDelete$Plain.PATH = '/api/Introduce/DeleteIntroduce/{id}';
