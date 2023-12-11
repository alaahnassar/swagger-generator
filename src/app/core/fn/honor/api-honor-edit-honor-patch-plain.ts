/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HonorDto } from '../../models/honor-dto';

export interface ApiHonorEditHonorPatch$Plain$Params {
      body?: {
'Id'?: number;
'titel'?: string;
'description'?: string;
'date'?: string;
}
}

export function apiHonorEditHonorPatch$Plain(http: HttpClient, rootUrl: string, params?: ApiHonorEditHonorPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorDto>> {
  const rb = new RequestBuilder(rootUrl, apiHonorEditHonorPatch$Plain.PATH, 'patch');
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

apiHonorEditHonorPatch$Plain.PATH = '/api/Honor/EditHonor';
