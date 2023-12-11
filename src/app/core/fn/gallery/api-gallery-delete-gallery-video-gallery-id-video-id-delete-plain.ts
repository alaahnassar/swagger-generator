/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gallery } from '../../models/gallery';

export interface ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain$Params {
  GalleryId: number;
  videoId: number;
}

export function apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('GalleryId', params.GalleryId, {});
    rb.path('videoId', params.videoId, {});
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

apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain.PATH = '/api/Gallery/DeleteGalleryVideo/{GalleryId}/{videoId}';
