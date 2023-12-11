/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationDtoListPaginationResult } from '../../models/notification-dto-list-pagination-result';

export interface ApiNotificationGetAdminNotifcationsGet$Json$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiNotificationGetAdminNotifcationsGet$Json(http: HttpClient, rootUrl: string, params?: ApiNotificationGetAdminNotifcationsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiNotificationGetAdminNotifcationsGet$Json.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NotificationDtoListPaginationResult>;
    })
  );
}

apiNotificationGetAdminNotifcationsGet$Json.PATH = '/api/Notification/GetAdminNotifcations';
