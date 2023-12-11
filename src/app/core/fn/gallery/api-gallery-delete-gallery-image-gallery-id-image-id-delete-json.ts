/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gallery } from '../../models/gallery';

export interface ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json$Params {
  GalleryId: number;
  imageId: number;
}

export function apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json.PATH, 'delete');
  if (params) {
    rb.path('GalleryId', params.GalleryId, {});
    rb.path('imageId', params.imageId, {});
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

apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json.PATH = '/api/Gallery/DeleteGalleryImage/{GalleryId}/{imageId}';
