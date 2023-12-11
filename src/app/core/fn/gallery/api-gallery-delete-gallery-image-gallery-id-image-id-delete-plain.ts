/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gallery } from '../../models/gallery';

export interface ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain$Params {
  GalleryId: number;
  imageId: number;
}

export function apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('GalleryId', params.GalleryId, {});
    rb.path('imageId', params.imageId, {});
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

apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain.PATH = '/api/Gallery/DeleteGalleryImage/{GalleryId}/{imageId}';
