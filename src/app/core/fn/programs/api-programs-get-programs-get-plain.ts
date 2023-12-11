/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProgramsListPaginationResult } from '../../models/programs-list-pagination-result';

export interface ApiProgramsGetProgramsGet$Plain$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiProgramsGetProgramsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiProgramsGetProgramsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProgramsListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiProgramsGetProgramsGet$Plain.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProgramsListPaginationResult>;
    })
  );
}

apiProgramsGetProgramsGet$Plain.PATH = '/api/Programs/GetPrograms';
