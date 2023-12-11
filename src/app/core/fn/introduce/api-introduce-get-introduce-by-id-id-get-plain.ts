/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Introduce } from '../../models/introduce';

export interface ApiIntroduceGetIntroduceByIdIdGet$Plain$Params {
  id: number;
}

export function apiIntroduceGetIntroduceByIdIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiIntroduceGetIntroduceByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
  const rb = new RequestBuilder(rootUrl, apiIntroduceGetIntroduceByIdIdGet$Plain.PATH, 'get');
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

apiIntroduceGetIntroduceByIdIdGet$Plain.PATH = '/api/Introduce/GetIntroduceById/{id}';
