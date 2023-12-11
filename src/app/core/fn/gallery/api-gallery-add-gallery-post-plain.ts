/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GalleryDto } from '../../models/gallery-dto';

export interface ApiGalleryAddGalleryPost$Plain$Params {
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

export function apiGalleryAddGalleryPost$Plain(http: HttpClient, rootUrl: string, params?: ApiGalleryAddGalleryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDto>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryAddGalleryPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

apiGalleryAddGalleryPost$Plain.PATH = '/api/Gallery/AddGallery';
