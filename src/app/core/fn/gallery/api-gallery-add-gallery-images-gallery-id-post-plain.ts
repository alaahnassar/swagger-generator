/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gallery } from '../../models/gallery';

export interface ApiGalleryAddGalleryImagesGalleryIdPost$Plain$Params {
  GalleryId: number;
      body?: {
'images'?: Array<Blob>;
}
}

export function apiGalleryAddGalleryImagesGalleryIdPost$Plain(http: HttpClient, rootUrl: string, params: ApiGalleryAddGalleryImagesGalleryIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryAddGalleryImagesGalleryIdPost$Plain.PATH, 'post');
  if (params) {
    rb.path('GalleryId', params.GalleryId, {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Gallery>;
    })
  );
}

apiGalleryAddGalleryImagesGalleryIdPost$Plain.PATH = '/api/Gallery/AddGalleryImages/{GalleryId}';
