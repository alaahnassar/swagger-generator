/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HomeData } from '../../models/home-data';

export interface ApiHomeGetHomeDataGet$Json$Params {
}

export function apiHomeGetHomeDataGet$Json(http: HttpClient, rootUrl: string, params?: ApiHomeGetHomeDataGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HomeData>> {
  const rb = new RequestBuilder(rootUrl, apiHomeGetHomeDataGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HomeData>;
    })
  );
}

apiHomeGetHomeDataGet$Json.PATH = '/api/Home/GetHomeData';
