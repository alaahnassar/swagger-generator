/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Programs } from '../../models/programs';

export interface ApiContactInfoDeleteContactInfoDelete$Plain$Params {
  id?: number;
}

export function apiContactInfoDeleteContactInfoDelete$Plain(http: HttpClient, rootUrl: string, params?: ApiContactInfoDeleteContactInfoDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Programs>> {
  const rb = new RequestBuilder(rootUrl, apiContactInfoDeleteContactInfoDelete$Plain.PATH, 'delete');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Programs>;
    })
  );
}

apiContactInfoDeleteContactInfoDelete$Plain.PATH = '/api/ContactInfo/DeleteContactInfo';
