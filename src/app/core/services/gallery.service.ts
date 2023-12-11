/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiGalleryAddGalleryImagesGalleryIdPost$Json } from '../fn/gallery/api-gallery-add-gallery-images-gallery-id-post-json';
import { ApiGalleryAddGalleryImagesGalleryIdPost$Json$Params } from '../fn/gallery/api-gallery-add-gallery-images-gallery-id-post-json';
import { apiGalleryAddGalleryImagesGalleryIdPost$Plain } from '../fn/gallery/api-gallery-add-gallery-images-gallery-id-post-plain';
import { ApiGalleryAddGalleryImagesGalleryIdPost$Plain$Params } from '../fn/gallery/api-gallery-add-gallery-images-gallery-id-post-plain';
import { apiGalleryAddGalleryPost$Json } from '../fn/gallery/api-gallery-add-gallery-post-json';
import { ApiGalleryAddGalleryPost$Json$Params } from '../fn/gallery/api-gallery-add-gallery-post-json';
import { apiGalleryAddGalleryPost$Plain } from '../fn/gallery/api-gallery-add-gallery-post-plain';
import { ApiGalleryAddGalleryPost$Plain$Params } from '../fn/gallery/api-gallery-add-gallery-post-plain';
import { apiGalleryAddGalleryVideoGalleryIdPost$Json } from '../fn/gallery/api-gallery-add-gallery-video-gallery-id-post-json';
import { ApiGalleryAddGalleryVideoGalleryIdPost$Json$Params } from '../fn/gallery/api-gallery-add-gallery-video-gallery-id-post-json';
import { apiGalleryAddGalleryVideoGalleryIdPost$Plain } from '../fn/gallery/api-gallery-add-gallery-video-gallery-id-post-plain';
import { ApiGalleryAddGalleryVideoGalleryIdPost$Plain$Params } from '../fn/gallery/api-gallery-add-gallery-video-gallery-id-post-plain';
import { apiGalleryDeleteGalleryDelete } from '../fn/gallery/api-gallery-delete-gallery-delete';
import { ApiGalleryDeleteGalleryDelete$Params } from '../fn/gallery/api-gallery-delete-gallery-delete';
import { apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json } from '../fn/gallery/api-gallery-delete-gallery-image-gallery-id-image-id-delete-json';
import { ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json$Params } from '../fn/gallery/api-gallery-delete-gallery-image-gallery-id-image-id-delete-json';
import { apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain } from '../fn/gallery/api-gallery-delete-gallery-image-gallery-id-image-id-delete-plain';
import { ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain$Params } from '../fn/gallery/api-gallery-delete-gallery-image-gallery-id-image-id-delete-plain';
import { apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json } from '../fn/gallery/api-gallery-delete-gallery-video-gallery-id-video-id-delete-json';
import { ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json$Params } from '../fn/gallery/api-gallery-delete-gallery-video-gallery-id-video-id-delete-json';
import { apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain } from '../fn/gallery/api-gallery-delete-gallery-video-gallery-id-video-id-delete-plain';
import { ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain$Params } from '../fn/gallery/api-gallery-delete-gallery-video-gallery-id-video-id-delete-plain';
import { apiGalleryEditGalleryPost$Json } from '../fn/gallery/api-gallery-edit-gallery-post-json';
import { ApiGalleryEditGalleryPost$Json$Params } from '../fn/gallery/api-gallery-edit-gallery-post-json';
import { apiGalleryEditGalleryPost$Plain } from '../fn/gallery/api-gallery-edit-gallery-post-plain';
import { ApiGalleryEditGalleryPost$Plain$Params } from '../fn/gallery/api-gallery-edit-gallery-post-plain';
import { apiGalleryGetAllGalleryForAdminPost$Json } from '../fn/gallery/api-gallery-get-all-gallery-for-admin-post-json';
import { ApiGalleryGetAllGalleryForAdminPost$Json$Params } from '../fn/gallery/api-gallery-get-all-gallery-for-admin-post-json';
import { apiGalleryGetAllGalleryForAdminPost$Plain } from '../fn/gallery/api-gallery-get-all-gallery-for-admin-post-plain';
import { ApiGalleryGetAllGalleryForAdminPost$Plain$Params } from '../fn/gallery/api-gallery-get-all-gallery-for-admin-post-plain';
import { apiGalleryGetAllGalleryPost$Json } from '../fn/gallery/api-gallery-get-all-gallery-post-json';
import { ApiGalleryGetAllGalleryPost$Json$Params } from '../fn/gallery/api-gallery-get-all-gallery-post-json';
import { apiGalleryGetAllGalleryPost$Plain } from '../fn/gallery/api-gallery-get-all-gallery-post-plain';
import { ApiGalleryGetAllGalleryPost$Plain$Params } from '../fn/gallery/api-gallery-get-all-gallery-post-plain';
import { apiGalleryGetGalleryByIdForAdminGet$Json } from '../fn/gallery/api-gallery-get-gallery-by-id-for-admin-get-json';
import { ApiGalleryGetGalleryByIdForAdminGet$Json$Params } from '../fn/gallery/api-gallery-get-gallery-by-id-for-admin-get-json';
import { apiGalleryGetGalleryByIdForAdminGet$Plain } from '../fn/gallery/api-gallery-get-gallery-by-id-for-admin-get-plain';
import { ApiGalleryGetGalleryByIdForAdminGet$Plain$Params } from '../fn/gallery/api-gallery-get-gallery-by-id-for-admin-get-plain';
import { apiGalleryGetGalleryByIdGet$Json } from '../fn/gallery/api-gallery-get-gallery-by-id-get-json';
import { ApiGalleryGetGalleryByIdGet$Json$Params } from '../fn/gallery/api-gallery-get-gallery-by-id-get-json';
import { apiGalleryGetGalleryByIdGet$Plain } from '../fn/gallery/api-gallery-get-gallery-by-id-get-plain';
import { ApiGalleryGetGalleryByIdGet$Plain$Params } from '../fn/gallery/api-gallery-get-gallery-by-id-get-plain';
import { Gallery } from '../models/gallery';
import { GalleryData } from '../models/gallery-data';
import { GalleryDataListPaginationResult } from '../models/gallery-data-list-pagination-result';
import { GalleryDto } from '../models/gallery-dto';
import { GalleryListPaginationResult } from '../models/gallery-list-pagination-result';

@Injectable({ providedIn: 'root' })
export class GalleryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGalleryAddGalleryPost()` */
  static readonly ApiGalleryAddGalleryPostPath = '/api/Gallery/AddGallery';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryAddGalleryPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryPost$Plain$Response(params?: ApiGalleryAddGalleryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDto>> {
    return apiGalleryAddGalleryPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryAddGalleryPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryPost$Plain(params?: ApiGalleryAddGalleryPost$Plain$Params, context?: HttpContext): Observable<GalleryDto> {
    return this.apiGalleryAddGalleryPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryDto>): GalleryDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryAddGalleryPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryPost$Json$Response(params?: ApiGalleryAddGalleryPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDto>> {
    return apiGalleryAddGalleryPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryAddGalleryPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryPost$Json(params?: ApiGalleryAddGalleryPost$Json$Params, context?: HttpContext): Observable<GalleryDto> {
    return this.apiGalleryAddGalleryPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryDto>): GalleryDto => r.body)
    );
  }

  /** Path part for operation `apiGalleryEditGalleryPost()` */
  static readonly ApiGalleryEditGalleryPostPath = '/api/Gallery/EditGallery';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryEditGalleryPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryEditGalleryPost$Plain$Response(params?: ApiGalleryEditGalleryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryEditGalleryPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryEditGalleryPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryEditGalleryPost$Plain(params?: ApiGalleryEditGalleryPost$Plain$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryEditGalleryPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryEditGalleryPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryEditGalleryPost$Json$Response(params?: ApiGalleryEditGalleryPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryEditGalleryPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryEditGalleryPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryEditGalleryPost$Json(params?: ApiGalleryEditGalleryPost$Json$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryEditGalleryPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

  /** Path part for operation `apiGalleryGetAllGalleryPost()` */
  static readonly ApiGalleryGetAllGalleryPostPath = '/api/Gallery/GetAllGallery';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryGetAllGalleryPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetAllGalleryPost$Plain$Response(params?: ApiGalleryGetAllGalleryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDataListPaginationResult>> {
    return apiGalleryGetAllGalleryPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryGetAllGalleryPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetAllGalleryPost$Plain(params?: ApiGalleryGetAllGalleryPost$Plain$Params, context?: HttpContext): Observable<GalleryDataListPaginationResult> {
    return this.apiGalleryGetAllGalleryPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryDataListPaginationResult>): GalleryDataListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryGetAllGalleryPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetAllGalleryPost$Json$Response(params?: ApiGalleryGetAllGalleryPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDataListPaginationResult>> {
    return apiGalleryGetAllGalleryPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryGetAllGalleryPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetAllGalleryPost$Json(params?: ApiGalleryGetAllGalleryPost$Json$Params, context?: HttpContext): Observable<GalleryDataListPaginationResult> {
    return this.apiGalleryGetAllGalleryPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryDataListPaginationResult>): GalleryDataListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiGalleryGetAllGalleryForAdminPost()` */
  static readonly ApiGalleryGetAllGalleryForAdminPostPath = '/api/Gallery/GetAllGalleryForAdmin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryGetAllGalleryForAdminPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetAllGalleryForAdminPost$Plain$Response(params?: ApiGalleryGetAllGalleryForAdminPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryListPaginationResult>> {
    return apiGalleryGetAllGalleryForAdminPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryGetAllGalleryForAdminPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetAllGalleryForAdminPost$Plain(params?: ApiGalleryGetAllGalleryForAdminPost$Plain$Params, context?: HttpContext): Observable<GalleryListPaginationResult> {
    return this.apiGalleryGetAllGalleryForAdminPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryListPaginationResult>): GalleryListPaginationResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryGetAllGalleryForAdminPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetAllGalleryForAdminPost$Json$Response(params?: ApiGalleryGetAllGalleryForAdminPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryListPaginationResult>> {
    return apiGalleryGetAllGalleryForAdminPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryGetAllGalleryForAdminPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetAllGalleryForAdminPost$Json(params?: ApiGalleryGetAllGalleryForAdminPost$Json$Params, context?: HttpContext): Observable<GalleryListPaginationResult> {
    return this.apiGalleryGetAllGalleryForAdminPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryListPaginationResult>): GalleryListPaginationResult => r.body)
    );
  }

  /** Path part for operation `apiGalleryGetGalleryByIdGet()` */
  static readonly ApiGalleryGetGalleryByIdGetPath = '/api/Gallery/GetGalleryById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryGetGalleryByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetGalleryByIdGet$Plain$Response(params?: ApiGalleryGetGalleryByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryData>> {
    return apiGalleryGetGalleryByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryGetGalleryByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetGalleryByIdGet$Plain(params?: ApiGalleryGetGalleryByIdGet$Plain$Params, context?: HttpContext): Observable<GalleryData> {
    return this.apiGalleryGetGalleryByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryData>): GalleryData => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryGetGalleryByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetGalleryByIdGet$Json$Response(params?: ApiGalleryGetGalleryByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryData>> {
    return apiGalleryGetGalleryByIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryGetGalleryByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetGalleryByIdGet$Json(params?: ApiGalleryGetGalleryByIdGet$Json$Params, context?: HttpContext): Observable<GalleryData> {
    return this.apiGalleryGetGalleryByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryData>): GalleryData => r.body)
    );
  }

  /** Path part for operation `apiGalleryGetGalleryByIdForAdminGet()` */
  static readonly ApiGalleryGetGalleryByIdForAdminGetPath = '/api/Gallery/GetGalleryByIdForAdmin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryGetGalleryByIdForAdminGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetGalleryByIdForAdminGet$Plain$Response(params?: ApiGalleryGetGalleryByIdForAdminGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDto>> {
    return apiGalleryGetGalleryByIdForAdminGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryGetGalleryByIdForAdminGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetGalleryByIdForAdminGet$Plain(params?: ApiGalleryGetGalleryByIdForAdminGet$Plain$Params, context?: HttpContext): Observable<GalleryDto> {
    return this.apiGalleryGetGalleryByIdForAdminGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryDto>): GalleryDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryGetGalleryByIdForAdminGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetGalleryByIdForAdminGet$Json$Response(params?: ApiGalleryGetGalleryByIdForAdminGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GalleryDto>> {
    return apiGalleryGetGalleryByIdForAdminGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryGetGalleryByIdForAdminGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryGetGalleryByIdForAdminGet$Json(params?: ApiGalleryGetGalleryByIdForAdminGet$Json$Params, context?: HttpContext): Observable<GalleryDto> {
    return this.apiGalleryGetGalleryByIdForAdminGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GalleryDto>): GalleryDto => r.body)
    );
  }

  /** Path part for operation `apiGalleryDeleteGalleryDelete()` */
  static readonly ApiGalleryDeleteGalleryDeletePath = '/api/Gallery/DeleteGallery';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryDeleteGalleryDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryDelete$Response(params?: ApiGalleryDeleteGalleryDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiGalleryDeleteGalleryDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryDeleteGalleryDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryDelete(params?: ApiGalleryDeleteGalleryDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiGalleryDeleteGalleryDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiGalleryAddGalleryImagesGalleryIdPost()` */
  static readonly ApiGalleryAddGalleryImagesGalleryIdPostPath = '/api/Gallery/AddGalleryImages/{GalleryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryAddGalleryImagesGalleryIdPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryImagesGalleryIdPost$Plain$Response(params: ApiGalleryAddGalleryImagesGalleryIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryAddGalleryImagesGalleryIdPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryAddGalleryImagesGalleryIdPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryImagesGalleryIdPost$Plain(params: ApiGalleryAddGalleryImagesGalleryIdPost$Plain$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryAddGalleryImagesGalleryIdPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryAddGalleryImagesGalleryIdPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryImagesGalleryIdPost$Json$Response(params: ApiGalleryAddGalleryImagesGalleryIdPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryAddGalleryImagesGalleryIdPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryAddGalleryImagesGalleryIdPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryImagesGalleryIdPost$Json(params: ApiGalleryAddGalleryImagesGalleryIdPost$Json$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryAddGalleryImagesGalleryIdPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

  /** Path part for operation `apiGalleryDeleteGalleryImageGalleryIdImageIdDelete()` */
  static readonly ApiGalleryDeleteGalleryImageGalleryIdImageIdDeletePath = '/api/Gallery/DeleteGalleryImage/{GalleryId}/{imageId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain$Response(params: ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain(params: ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json$Response(params: ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json(params: ApiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryDeleteGalleryImageGalleryIdImageIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

  /** Path part for operation `apiGalleryAddGalleryVideoGalleryIdPost()` */
  static readonly ApiGalleryAddGalleryVideoGalleryIdPostPath = '/api/Gallery/AddGalleryVideo/{GalleryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryAddGalleryVideoGalleryIdPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryVideoGalleryIdPost$Plain$Response(params: ApiGalleryAddGalleryVideoGalleryIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryAddGalleryVideoGalleryIdPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryAddGalleryVideoGalleryIdPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryVideoGalleryIdPost$Plain(params: ApiGalleryAddGalleryVideoGalleryIdPost$Plain$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryAddGalleryVideoGalleryIdPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryAddGalleryVideoGalleryIdPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryVideoGalleryIdPost$Json$Response(params: ApiGalleryAddGalleryVideoGalleryIdPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryAddGalleryVideoGalleryIdPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryAddGalleryVideoGalleryIdPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiGalleryAddGalleryVideoGalleryIdPost$Json(params: ApiGalleryAddGalleryVideoGalleryIdPost$Json$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryAddGalleryVideoGalleryIdPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

  /** Path part for operation `apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete()` */
  static readonly ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDeletePath = '/api/Gallery/DeleteGalleryVideo/{GalleryId}/{videoId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain$Response(params: ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain(params: ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json$Response(params: ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Gallery>> {
    return apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json(params: ApiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json$Params, context?: HttpContext): Observable<Gallery> {
    return this.apiGalleryDeleteGalleryVideoGalleryIdVideoIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Gallery>): Gallery => r.body)
    );
  }

}
