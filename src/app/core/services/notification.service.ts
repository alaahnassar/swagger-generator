/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiNotificationGetAdminNotifcationsGet$Json } from '../fn/notification/api-notification-get-admin-notifcations-get-json';
import { ApiNotificationGetAdminNotifcationsGet$Json$Params } from '../fn/notification/api-notification-get-admin-notifcations-get-json';
import { apiNotificationGetAdminNotifcationsGet$Plain } from '../fn/notification/api-notification-get-admin-notifcations-get-plain';
import { ApiNotificationGetAdminNotifcationsGet$Plain$Params } from '../fn/notification/api-notification-get-admin-notifcations-get-plain';
import { apiNotificationReadAllNotificationPatch$Json } from '../fn/notification/api-notification-read-all-notification-patch-json';
import { ApiNotificationReadAllNotificationPatch$Json$Params } from '../fn/notification/api-notification-read-all-notification-patch-json';
import { apiNotificationReadAllNotificationPatch$Plain } from '../fn/notification/api-notification-read-all-notification-patch-plain';
import { ApiNotificationReadAllNotificationPatch$Plain$Params } from '../fn/notification/api-notification-read-all-notification-patch-plain';
import { apiNotificationReadNotificationPatch$Json } from '../fn/notification/api-notification-read-notification-patch-json';
import { ApiNotificationReadNotificationPatch$Json$Params } from '../fn/notification/api-notification-read-notification-patch-json';
import { apiNotificationReadNotificationPatch$Plain } from '../fn/notification/api-notification-read-notification-patch-plain';
import { ApiNotificationReadNotificationPatch$Plain$Params } from '../fn/notification/api-notification-read-notification-patch-plain';
import { apiNotificationUnReadNotificationCountGet$Json } from '../fn/notification/api-notification-un-read-notification-count-get-json';
import { ApiNotificationUnReadNotificationCountGet$Json$Params } from '../fn/notification/api-notification-un-read-notification-count-get-json';
import { apiNotificationUnReadNotificationCountGet$Plain } from '../fn/notification/api-notification-un-read-notification-count-get-plain';
import { ApiNotificationUnReadNotificationCountGet$Plain$Params } from '../fn/notification/api-notification-un-read-notification-count-get-plain';
import { NotificationDtoListPaginationResult } from '../models/notification-dto-list-pagination-result';
import { NotificationDtoPaginationResult } from '../models/notification-dto-pagination-result';

@Injectable({ providedIn: 'root' })
export class NotificationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiNotificationGetAdminNotifcationsGet()` */
  static readonly ApiNotificationGetAdminNotifcationsGetPath = '/api/Notification/GetAdminNotifcations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationGetAdminNotifcationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationGetAdminNotifcationsGet$Plain$Response(params?: ApiNotificationGetAdminNotifcationsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoListPaginationResult>> {
    return apiNotificationGetAdminNotifcationsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotificationGetAdminNotifcationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationGetAdminNotifcationsGet$Plain(params?: ApiNotificationGetAdminNotifcationsGet$Plain$Params, context?: HttpContext): Observable<NotificationDtoListPaginationResult> {
    return this.apiNotificationGetAdminNotifcationsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationDtoListPaginationResult>): NotificationDtoListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationGetAdminNotifcationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationGetAdminNotifcationsGet$Json$Response(params?: ApiNotificationGetAdminNotifcationsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoListPaginationResult>> {
    return apiNotificationGetAdminNotifcationsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotificationGetAdminNotifcationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationGetAdminNotifcationsGet$Json(params?: ApiNotificationGetAdminNotifcationsGet$Json$Params, context?: HttpContext): Observable<NotificationDtoListPaginationResult> {
    return this.apiNotificationGetAdminNotifcationsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationDtoListPaginationResult>): NotificationDtoListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiNotificationUnReadNotificationCountGet()` */
  static readonly ApiNotificationUnReadNotificationCountGetPath = '/api/Notification/UnReadNotificationCount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationUnReadNotificationCountGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationUnReadNotificationCountGet$Plain$Response(params?: ApiNotificationUnReadNotificationCountGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return apiNotificationUnReadNotificationCountGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotificationUnReadNotificationCountGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationUnReadNotificationCountGet$Plain(params?: ApiNotificationUnReadNotificationCountGet$Plain$Params, context?: HttpContext): Observable<number> {
    return this.apiNotificationUnReadNotificationCountGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationUnReadNotificationCountGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationUnReadNotificationCountGet$Json$Response(params?: ApiNotificationUnReadNotificationCountGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return apiNotificationUnReadNotificationCountGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotificationUnReadNotificationCountGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationUnReadNotificationCountGet$Json(params?: ApiNotificationUnReadNotificationCountGet$Json$Params, context?: HttpContext): Observable<number> {
    return this.apiNotificationUnReadNotificationCountGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `apiNotificationReadAllNotificationPatch()` */
  static readonly ApiNotificationReadAllNotificationPatchPath = '/api/Notification/ReadAllNotification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationReadAllNotificationPatch$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationReadAllNotificationPatch$Plain$Response(params?: ApiNotificationReadAllNotificationPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoPaginationResult>> {
    return apiNotificationReadAllNotificationPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotificationReadAllNotificationPatch$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationReadAllNotificationPatch$Plain(params?: ApiNotificationReadAllNotificationPatch$Plain$Params, context?: HttpContext): Observable<NotificationDtoPaginationResult> {
    return this.apiNotificationReadAllNotificationPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationDtoPaginationResult>): NotificationDtoPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationReadAllNotificationPatch$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationReadAllNotificationPatch$Json$Response(params?: ApiNotificationReadAllNotificationPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoPaginationResult>> {
    return apiNotificationReadAllNotificationPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotificationReadAllNotificationPatch$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationReadAllNotificationPatch$Json(params?: ApiNotificationReadAllNotificationPatch$Json$Params, context?: HttpContext): Observable<NotificationDtoPaginationResult> {
    return this.apiNotificationReadAllNotificationPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationDtoPaginationResult>): NotificationDtoPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiNotificationReadNotificationPatch()` */
  static readonly ApiNotificationReadNotificationPatchPath = '/api/Notification/ReadNotification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationReadNotificationPatch$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationReadNotificationPatch$Plain$Response(params?: ApiNotificationReadNotificationPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoPaginationResult>> {
    return apiNotificationReadNotificationPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotificationReadNotificationPatch$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationReadNotificationPatch$Plain(params?: ApiNotificationReadNotificationPatch$Plain$Params, context?: HttpContext): Observable<NotificationDtoPaginationResult> {
    return this.apiNotificationReadNotificationPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationDtoPaginationResult>): NotificationDtoPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationReadNotificationPatch$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationReadNotificationPatch$Json$Response(params?: ApiNotificationReadNotificationPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDtoPaginationResult>> {
    return apiNotificationReadNotificationPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotificationReadNotificationPatch$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationReadNotificationPatch$Json(params?: ApiNotificationReadNotificationPatch$Json$Params, context?: HttpContext): Observable<NotificationDtoPaginationResult> {
    return this.apiNotificationReadNotificationPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationDtoPaginationResult>): NotificationDtoPaginationResult => r.body)
    );
  }

}
