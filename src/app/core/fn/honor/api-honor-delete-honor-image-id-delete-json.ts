/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HonorImage } from '../../models/honor-image';

export interface ApiHonorDeleteHonorImageIdDelete$Json$Params {
  id: number;
}

export function apiHonorDeleteHonorImageIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiHonorDeleteHonorImageIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorImage>> {
  const rb = new RequestBuilder(rootUrl, apiHonorDeleteHonorImageIdDelete$Json.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HonorImage>;
    })
  );
}

apiHonorDeleteHonorImageIdDelete$Json.PATH = '/api/Honor/DeleteHonorImage/{id}';
