/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationDtoPaginationResult } from '../../models/notification-dto-pagination-result';

export interface ApiNotificationReadAllNotificationPatch$Plain$Params {
  type?: string;
}

export function apiNotificationReadAllNotificationPatch$Plain(http: HttpClient, rootUrl: string, params?: ApiNotificationReadAllNotificationPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiNotificationReadAllNotificationPatch$Plain.PATH, 'patch');
  if (params) {
    rb.query('type', params.type, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NotificationDtoPaginationResult>;
    })
  );
}

apiNotificationReadAllNotificationPatch$Plain.PATH = '/api/Notification/ReadAllNotification';
