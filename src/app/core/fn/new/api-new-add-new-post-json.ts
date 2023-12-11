/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { New } from '../../models/new';

export interface ApiNewAddNewPost$Json$Params {
      body?: {
'Id'?: number;
'Title'?: string;
'Description'?: string;
'Image'?: string;
'ImageFile'?: Blob;
}
}

export function apiNewAddNewPost$Json(http: HttpClient, rootUrl: string, params?: ApiNewAddNewPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<New>> {
  const rb = new RequestBuilder(rootUrl, apiNewAddNewPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<New>;
    })
  );
}

apiNewAddNewPost$Json.PATH = '/api/New/AddNew';
