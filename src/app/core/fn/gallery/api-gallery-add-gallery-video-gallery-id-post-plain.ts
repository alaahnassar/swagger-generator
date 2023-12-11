/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gallery } from '../../models/gallery';

export interface ApiGalleryAddGalleryVideoGalleryIdPost$Plain$Params {
  GalleryId: number;
      body?: {
'videos'?: Array<Blob>;
}
}

export function apiGalleryAddGalleryVideoGalleryIdPost$Plain(http: HttpClient, rootUrl: string, params: ApiGalleryAddGalleryVideoGalleryIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryAddGalleryVideoGalleryIdPost$Plain.PATH, 'post');
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

apiGalleryAddGalleryVideoGalleryIdPost$Plain.PATH = '/api/Gallery/AddGalleryVideo/{GalleryId}';
