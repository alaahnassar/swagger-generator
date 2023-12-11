/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HonorImage } from '../../models/honor-image';

export interface ApiHonorAddHonorImagePost$Json$Params {
      body?: {
'honorId'?: number;
'image'?: Blob;
}
}

export function apiHonorAddHonorImagePost$Json(http: HttpClient, rootUrl: string, params?: ApiHonorAddHonorImagePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorImage>> {
  const rb = new RequestBuilder(rootUrl, apiHonorAddHonorImagePost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

apiHonorAddHonorImagePost$Json.PATH = '/api/Honor/AddHonorImage';
