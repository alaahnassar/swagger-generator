/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationDtoPaginationResult } from '../../models/notification-dto-pagination-result';

export interface ApiNotificationReadNotificationPatch$Json$Params {
  notifId?: number;
}

export function apiNotificationReadNotificationPatch$Json(http: HttpClient, rootUrl: string, params?: ApiNotificationReadNotificationPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiNotificationReadNotificationPatch$Json.PATH, 'patch');
  if (params) {
    rb.query('notifId', params.notifId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NotificationDtoPaginationResult>;
    })
  );
}

apiNotificationReadNotificationPatch$Json.PATH = '/api/Notification/ReadNotification';
