/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HonorDto } from '../../models/honor-dto';

export interface ApiHonorAddHonorPost$Plain$Params {
      body?: {
'Id'?: number;
'titel'?: string;
'description'?: string;
'date'?: string;
}
}

export function apiHonorAddHonorPost$Plain(http: HttpClient, rootUrl: string, params?: ApiHonorAddHonorPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorDto>> {
  const rb = new RequestBuilder(rootUrl, apiHonorAddHonorPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HonorDto>;
    })
  );
}

apiHonorAddHonorPost$Plain.PATH = '/api/Honor/AddHonor';
