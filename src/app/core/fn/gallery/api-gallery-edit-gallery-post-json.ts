/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Gallery } from '../../models/gallery';

export interface ApiGalleryEditGalleryPost$Json$Params {
      body?: {
'Id'?: number;
'CategoryTitleAr'?: string;
'CategoryTitleEn'?: string;
'Videos'?: Array<Blob>;
'Images'?: Array<Blob>;
'ImagesUrl'?: Array<string>;
'VideosUrl'?: Array<string>;
}
}

export function apiGalleryEditGalleryPost$Json(http: HttpClient, rootUrl: string, params?: ApiGalleryEditGalleryPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryEditGalleryPost$Json.PATH, 'post');
  if (params) {
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

apiGalleryEditGalleryPost$Json.PATH = '/api/Gallery/EditGallery';
