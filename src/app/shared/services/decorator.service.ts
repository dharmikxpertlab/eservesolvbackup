import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class DecoratorService {
     private static service: TranslateService | undefined = undefined;
     public constructor(service: TranslateService) {
         DecoratorService.service = service;
     }
     public static getService(): TranslateService {
         if (!DecoratorService.service) {
             throw new Error('DecoratorService not initialized');
         }
         return DecoratorService.service;
     }
}
