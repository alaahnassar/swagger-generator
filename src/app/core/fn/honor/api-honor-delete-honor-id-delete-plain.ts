/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HonorImage } from '../../models/honor-image';

export interface ApiHonorDeleteHonorIdDelete$Plain$Params {
  id: number;
}

export function apiHonorDeleteHonorIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiHonorDeleteHonorIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorImage>> {
  const rb = new RequestBuilder(rootUrl, apiHonorDeleteHonorIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HonorImage>;
    })
  );
}

apiHonorDeleteHonorIdDelete$Plain.PATH = '/api/Honor/DeleteHonor/{id}';
