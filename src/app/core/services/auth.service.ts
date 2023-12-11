/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAuthAddUserPost$Json } from '../fn/auth/api-auth-add-user-post-json';
import { ApiAuthAddUserPost$Json$Params } from '../fn/auth/api-auth-add-user-post-json';
import { apiAuthAddUserPost$Plain } from '../fn/auth/api-auth-add-user-post-plain';
import { ApiAuthAddUserPost$Plain$Params } from '../fn/auth/api-auth-add-user-post-plain';
import { apiAuthGetAccountGet$Json } from '../fn/auth/api-auth-get-account-get-json';
import { ApiAuthGetAccountGet$Json$Params } from '../fn/auth/api-auth-get-account-get-json';
import { apiAuthGetAccountGet$Plain } from '../fn/auth/api-auth-get-account-get-plain';
import { ApiAuthGetAccountGet$Plain$Params } from '../fn/auth/api-auth-get-account-get-plain';
import { apiAuthLoginPost$Json } from '../fn/auth/api-auth-login-post-json';
import { ApiAuthLoginPost$Json$Params } from '../fn/auth/api-auth-login-post-json';
import { apiAuthLoginPost$Plain } from '../fn/auth/api-auth-login-post-plain';
import { ApiAuthLoginPost$Plain$Params } from '../fn/auth/api-auth-login-post-plain';
import { AuthModel } from '../models/auth-model';
import { UserModel } from '../models/user-model';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthAddUserPost()` */
  static readonly ApiAuthAddUserPostPath = '/api/Auth/AddUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthAddUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAddUserPost$Plain$Response(params?: ApiAuthAddUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthModel>> {
    return apiAuthAddUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthAddUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAddUserPost$Plain(params?: ApiAuthAddUserPost$Plain$Params, context?: HttpContext): Observable<AuthModel> {
    return this.apiAuthAddUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthModel>): AuthModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthAddUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAddUserPost$Json$Response(params?: ApiAuthAddUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthModel>> {
    return apiAuthAddUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthAddUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAddUserPost$Json(params?: ApiAuthAddUserPost$Json$Params, context?: HttpContext): Observable<AuthModel> {
    return this.apiAuthAddUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthModel>): AuthModel => r.body)
    );
  }

  /** Path part for operation `apiAuthLoginPost()` */
  static readonly ApiAuthLoginPostPath = '/api/Auth/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLoginPost$Plain$Response(params?: ApiAuthLoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthModel>> {
    return apiAuthLoginPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLoginPost$Plain(params?: ApiAuthLoginPost$Plain$Params, context?: HttpContext): Observable<AuthModel> {
    return this.apiAuthLoginPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthModel>): AuthModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLoginPost$Json$Response(params?: ApiAuthLoginPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthModel>> {
    return apiAuthLoginPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLoginPost$Json(params?: ApiAuthLoginPost$Json$Params, context?: HttpContext): Observable<AuthModel> {
    return this.apiAuthLoginPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthModel>): AuthModel => r.body)
    );
  }

  /** Path part for operation `apiAuthGetAccountGet()` */
  static readonly ApiAuthGetAccountGetPath = '/api/Auth/GetAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthGetAccountGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthGetAccountGet$Plain$Response(params?: ApiAuthGetAccountGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserModel>> {
    return apiAuthGetAccountGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthGetAccountGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthGetAccountGet$Plain(params?: ApiAuthGetAccountGet$Plain$Params, context?: HttpContext): Observable<UserModel> {
    return this.apiAuthGetAccountGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserModel>): UserModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthGetAccountGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthGetAccountGet$Json$Response(params?: ApiAuthGetAccountGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserModel>> {
    return apiAuthGetAccountGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthGetAccountGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthGetAccountGet$Json(params?: ApiAuthGetAccountGet$Json$Params, context?: HttpContext): Observable<UserModel> {
    return this.apiAuthGetAccountGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserModel>): UserModel => r.body)
    );
  }

}
