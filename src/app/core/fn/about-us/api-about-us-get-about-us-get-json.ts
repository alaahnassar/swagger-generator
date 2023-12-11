/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AboutUs } from '../../models/about-us';

export interface ApiAboutUsGetAboutUsGet$Json$Params {
}

export function apiAboutUsGetAboutUsGet$Json(http: HttpClient, rootUrl: string, params?: ApiAboutUsGetAboutUsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUs>> {
  const rb = new RequestBuilder(rootUrl, apiAboutUsGetAboutUsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AboutUs>;
    })
  );
}

apiAboutUsGetAboutUsGet$Json.PATH = '/api/AboutUs/GetAboutUs';
