/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormInfo } from '../../models/form-info';

export interface ApiFormDeleteFormInfoIdDelete$Json$Params {
  id: number;
}

export function apiFormDeleteFormInfoIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiFormDeleteFormInfoIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
  const rb = new RequestBuilder(rootUrl, apiFormDeleteFormInfoIdDelete$Json.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FormInfo>;
    })
  );
}

apiFormDeleteFormInfoIdDelete$Json.PATH = '/api/Form/DeleteFormInfo/{id}';
