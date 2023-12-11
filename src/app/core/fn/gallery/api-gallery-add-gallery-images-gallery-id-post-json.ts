/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gallery } from '../../models/gallery';

export interface ApiGalleryAddGalleryImagesGalleryIdPost$Json$Params {
  GalleryId: number;
      body?: {
'images'?: Array<Blob>;
}
}

export function apiGalleryAddGalleryImagesGalleryIdPost$Json(http: HttpClient, rootUrl: string, params: ApiGalleryAddGalleryImagesGalleryIdPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryAddGalleryImagesGalleryIdPost$Json.PATH, 'post');
  if (params) {
    rb.path('GalleryId', params.GalleryId, {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Gallery>;
    })
  );
}

apiGalleryAddGalleryImagesGalleryIdPost$Json.PATH = '/api/Gallery/AddGalleryImages/{GalleryId}';
