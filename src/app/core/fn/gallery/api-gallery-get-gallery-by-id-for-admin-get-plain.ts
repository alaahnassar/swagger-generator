/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GalleryDto } from '../../models/gallery-dto';

export interface ApiGalleryGetGalleryByIdForAdminGet$Plain$Params {
  Id?: number;
}

export function apiGalleryGetGalleryByIdForAdminGet$Plain(http: HttpClient, rootUrl: string, params?: ApiGalleryGetGalleryByIdForAdminGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDto>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryGetGalleryByIdForAdminGet$Plain.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GalleryDto>;
    })
  );
}

apiGalleryGetGalleryByIdForAdminGet$Plain.PATH = '/api/Gallery/GetGalleryByIdForAdmin';
