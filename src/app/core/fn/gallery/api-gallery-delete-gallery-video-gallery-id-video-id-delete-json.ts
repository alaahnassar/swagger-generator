/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gallery } from '../../models/gallery';

export interface ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json$Params {
  GalleryId: number;
  videoId: number;
}

export function apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json.PATH, 'delete');
  if (params) {
    rb.path('GalleryId', params.GalleryId, {});
    rb.path('videoId', params.videoId, {});
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

apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json.PATH = '/api/Gallery/DeleteGalleryVideo/{GalleryId}/{videoId}';
