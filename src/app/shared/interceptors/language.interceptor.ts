import { HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

  constructor(private translateService: TranslateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const language = this.translateService.currentLang;

    const headers = req.headers
      .set('Accept-Language', language);
    const requestClone = req.clone({
      headers
    });

    return next.handle(requestClone);
  }
}

