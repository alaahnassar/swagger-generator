/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsInfo } from '../../models/contact-us-info';

export interface ApiContactInfoEditContactInfoPatch$Json$Params {
      body?: {
'Id'?: number;
'address'?: string;
'phone'?: string;
'email'?: string;
'image'?: Blob;
'map'?: string;
}
}

export function apiContactInfoEditContactInfoPatch$Json(http: HttpClient, rootUrl: string, params?: ApiContactInfoEditContactInfoPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsInfo>> {
  const rb = new RequestBuilder(rootUrl, apiContactInfoEditContactInfoPatch$Json.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContactUsInfo>;
    })
  );
}

apiContactInfoEditContactInfoPatch$Json.PATH = '/api/ContactInfo/EditContactInfo';
