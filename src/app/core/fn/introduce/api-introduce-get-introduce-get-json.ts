/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IntroduceListPaginationResult } from '../../models/introduce-list-pagination-result';

export interface ApiIntroduceGetIntroduceGet$Json$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiIntroduceGetIntroduceGet$Json(http: HttpClient, rootUrl: string, params?: ApiIntroduceGetIntroduceGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<IntroduceListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiIntroduceGetIntroduceGet$Json.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<IntroduceListPaginationResult>;
    })
  );
}

apiIntroduceGetIntroduceGet$Json.PATH = '/api/Introduce/GetIntroduce';
