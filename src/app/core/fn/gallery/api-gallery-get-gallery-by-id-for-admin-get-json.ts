/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GalleryDto } from '../../models/gallery-dto';

export interface ApiGalleryGetGalleryByIdForAdminGet$Json$Params {
  Id?: number;
}

export function apiGalleryGetGalleryByIdForAdminGet$Json(http: HttpClient, rootUrl: string, params?: ApiGalleryGetGalleryByIdForAdminGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDto>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryGetGalleryByIdForAdminGet$Json.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GalleryDto>;
    })
  );
}

apiGalleryGetGalleryByIdForAdminGet$Json.PATH = '/api/Gallery/GetGalleryByIdForAdmin';
