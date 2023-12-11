/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GalleryListPaginationResult } from '../../models/gallery-list-pagination-result';

export interface ApiGalleryGetAllGalleryForAdminPost$Plain$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiGalleryGetAllGalleryForAdminPost$Plain(http: HttpClient, rootUrl: string, params?: ApiGalleryGetAllGalleryForAdminPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryGetAllGalleryForAdminPost$Plain.PATH, 'post');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GalleryListPaginationResult>;
    })
  );
}

apiGalleryGetAllGalleryForAdminPost$Plain.PATH = '/api/Gallery/GetAllGalleryForAdmin';
