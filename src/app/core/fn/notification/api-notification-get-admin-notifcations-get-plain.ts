/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationDtoListPaginationResult } from '../../models/notification-dto-list-pagination-result';

export interface ApiNotificationGetAdminNotifcationsGet$Plain$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiNotificationGetAdminNotifcationsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiNotificationGetAdminNotifcationsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiNotificationGetAdminNotifcationsGet$Plain.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NotificationDtoListPaginationResult>;
    })
  );
}

apiNotificationGetAdminNotifcationsGet$Plain.PATH = '/api/Notification/GetAdminNotifcations';
