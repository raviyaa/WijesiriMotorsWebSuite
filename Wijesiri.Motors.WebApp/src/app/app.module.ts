import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';
import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule } from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationService } from './core/authentication.service';
import { DefaultLayoutComponent } from './shared/components/default-layout/default-layout.component';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader } from 'ng2-translate';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IAppConfig } from './app-config/app-config.interface';
import { APP_CONFIG, APP_DI_CONFIG } from './app-config/app-config.constants';
import { SharedService } from './shared/shared.service';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatStepperModule,
  MatFormFieldModule
} from '@angular/material';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}



@NgModule({
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    ChartsModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    LoginModule
  ],
  exports: [DefaultLayoutComponent],
  declarations: [
    AppComponent,
    DefaultLayoutComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }, {
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  },
  { provide: APP_BASE_HREF, useValue: '/' },
    SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  lang: any;

  constructor(translateService: TranslateService,
    @Inject(APP_CONFIG) config: IAppConfig,
    sharedService: SharedService) {

    this.lang = { id: config.LANGUAGE_DEFAULT.ID, title: config.LANGUAGE_DEFAULT.NAME };
    sharedService.setSelectedLanguage(this.lang);

    const langs = [];
    config.LANGUAGES.map(ln => {
      langs.push(ln.ID);
    });
    translateService.addLangs(langs);
    translateService.setDefaultLang(config.LANGUAGE_DEFAULT.ID);
    translateService.use(this.lang.id);
    sharedService.langUpdated.subscribe(
      (lang) => {
        translateService.use(lang.id);
      }
    );

  }
}
