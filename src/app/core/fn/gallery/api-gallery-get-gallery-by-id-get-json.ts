/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GalleryData } from '../../models/gallery-data';

export interface ApiGalleryGetGalleryByIdGet$Json$Params {
  Id?: number;
  lang?: string;
}

export function apiGalleryGetGalleryByIdGet$Json(http: HttpClient, rootUrl: string, params?: ApiGalleryGetGalleryByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryData>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryGetGalleryByIdGet$Json.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
    rb.query('lang', params.lang, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GalleryData>;
    })
  );
}

apiGalleryGetGalleryByIdGet$Json.PATH = '/api/Gallery/GetGalleryById';
