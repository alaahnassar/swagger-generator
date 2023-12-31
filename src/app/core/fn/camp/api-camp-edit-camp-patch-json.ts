/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EditCampDto } from '../../models/edit-camp-dto';

export interface ApiCampEditCampPatch$Json$Params {
      body?: {
'id'?: number;
'titel'?: string;
'date'?: string;
}
}

export function apiCampEditCampPatch$Json(http: HttpClient, rootUrl: string, params?: ApiCampEditCampPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EditCampDto>> {
  const rb = new RequestBuilder(rootUrl, apiCampEditCampPatch$Json.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EditCampDto>;
    })
  );
}

apiCampEditCampPatch$Json.PATH = '/api/Camp/EditCamp';
