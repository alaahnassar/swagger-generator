/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Introduce } from '../../models/introduce';

export interface ApiIntroduceGetIntroduceByIdIdGet$Json$Params {
  id: number;
}

export function apiIntroduceGetIntroduceByIdIdGet$Json(http: HttpClient, rootUrl: string, params: ApiIntroduceGetIntroduceByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Introduce>> {
  const rb = new RequestBuilder(rootUrl, apiIntroduceGetIntroduceByIdIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

apiIntroduceGetIntroduceByIdIdGet$Json.PATH = '/api/Introduce/GetIntroduceById/{id}';
