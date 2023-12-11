/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GalleryListPaginationResult } from '../../models/gallery-list-pagination-result';

export interface ApiGalleryGetAllGalleryForAdminPost$Json$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiGalleryGetAllGalleryForAdminPost$Json(http: HttpClient, rootUrl: string, params?: ApiGalleryGetAllGalleryForAdminPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiGalleryGetAllGalleryForAdminPost$Json.PATH, 'post');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GalleryListPaginationResult>;
    })
  );
}

apiGalleryGetAllGalleryForAdminPost$Json.PATH = '/api/Gallery/GetAllGalleryForAdmin';
