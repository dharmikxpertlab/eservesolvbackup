import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApiModule } from 'src/api/api.module';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './shared/services/auth.service';
import { SideMenuComponent } from './shared/components/menu/side-menu/side-menu.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgPipesModule } from 'ngx-pipes';
import { NgxSignaturePadModule } from '@eve-sama/ngx-signature-pad';
import { DecoratorService } from './shared/services/decorator.service';
import { LanguageInterceptor } from './shared/interceptors/language.interceptor';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ApiModule.forRoot({ rootUrl: environment.apiUrl }),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          const authService = new AuthService(null, null, null, null);
          return authService.getToken();
        },
        allowedDomains: [/localhost(?:$|:\d+)/, 'api.thomas-becker.yukari.viperdev.io', '192.168.1.18:8000', 'api.eservsol.yukari.viperdev.io'],
        authScheme: 'Token '
      },
    }),
    NgxPermissionsModule.forRoot(),
    NgPipesModule,
    NgxSignaturePadModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    DecoratorService,
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
