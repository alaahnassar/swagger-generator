/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GalleryDataListPaginationResult } from '../../models/gallery-data-list-pagination-result';

export interface ApiGalleryGetAllGalleryPost$Plain$Params {
  lang?: string;
  pageNume?: number;
  pageSize?: number;
}

export function apiGalleryGetAllGalleryPost$Plain(http: HttpClient, rootUrl: string, params?: ApiGalleryGetAllGalleryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDataListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryGetAllGalleryPost$Plain.PATH, 'post');
  if (params) {
    rb.query('lang', params.lang, {});
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GalleryDataListPaginationResult>;
    })
  );
}

apiGalleryGetAllGalleryPost$Plain.PATH = '/api/Gallery/GetAllGallery';
