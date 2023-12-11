/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AboutUsService } from './services/about-us.service';
import { AuthService } from './services/auth.service';
import { CampService } from './services/camp.service';
import { ContactInfoService } from './services/contact-info.service';
import { ContactUserService } from './services/contact-user.service';
import { DashboardService } from './services/dashboard.service';
import { FormService } from './services/form.service';
import { GalleryService } from './services/gallery.service';
import { HomeService } from './services/home.service';
import { HonorService } from './services/honor.service';
import { IntroduceService } from './services/introduce.service';
import { NewService } from './services/new.service';
import { NotificationService } from './services/notification.service';
import { PlayerManagementService } from './services/player-management.service';
import { ProgramsService } from './services/programs.service';
import { TeamService } from './services/team.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AboutUsService,
    AuthService,
    CampService,
    ContactInfoService,
    ContactUserService,
    DashboardService,
    FormService,
    GalleryService,
    HomeService,
    HonorService,
    IntroduceService,
    NewService,
    NotificationService,
    PlayerManagementService,
    ProgramsService,
    TeamService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
