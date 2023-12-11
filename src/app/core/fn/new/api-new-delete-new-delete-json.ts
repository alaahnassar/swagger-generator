/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NewDto } from '../../models/new-dto';

export interface ApiNewDeleteNewDelete$Json$Params {
  Id?: number;
}

export function apiNewDeleteNewDelete$Json(http: HttpClient, rootUrl: string, params?: ApiNewDeleteNewDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<NewDto>> {
  const rb = new RequestBuilder(rootUrl, apiNewDeleteNewDelete$Json.PATH, 'delete');
  if (params) {
    rb.query('Id', params.Id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NewDto>;
    })
  );
}

apiNewDeleteNewDelete$Json.PATH = '/api/New/DeleteNew';
