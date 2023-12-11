/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Programs } from '../../models/programs';

export interface ApiContactInfoDeleteContactInfoDelete$Json$Params {
  id?: number;
}

export function apiContactInfoDeleteContactInfoDelete$Json(http: HttpClient, rootUrl: string, params?: ApiContactInfoDeleteContactInfoDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
  const rb = new RequestBuilder(rootUrl, apiContactInfoDeleteContactInfoDelete$Json.PATH, 'delete');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Programs>;
    })
  );
}

apiContactInfoDeleteContactInfoDelete$Json.PATH = '/api/ContactInfo/DeleteContactInfo';
