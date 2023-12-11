/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AboutUs } from '../../models/about-us';

export interface ApiAboutUsUpdateAboutUsPatch$Plain$Params {
      body?: {
'id'?: number;
'whoIs'?: string;
'bref'?: string;
'brefTitel1'?: string;
'brefIcon1'?: string;
'brefTitel2'?: string;
'brefIcon2'?: string;
'brefTitel3'?: string;
'brefIcon3'?: string;
'brefTitel4'?: string;
'brefIcon4'?: string;
'description1'?: string;
'description2'?: string;
'description3'?: string;
'description4'?: string;
'vision'?: string;
'Mission'?: string;
}
}

export function apiAboutUsUpdateAboutUsPatch$Plain(http: HttpClient, rootUrl: string, params?: ApiAboutUsUpdateAboutUsPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUs>> {
  const rb = new RequestBuilder(rootUrl, apiAboutUsUpdateAboutUsPatch$Plain.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AboutUs>;
    })
  );
}

apiAboutUsUpdateAboutUsPatch$Plain.PATH = '/api/AboutUs/UpdateAboutUs';
