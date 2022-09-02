import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as lodash from 'lodash';
import { DecoratorService } from './decorator.service';

@Injectable({
    providedIn: 'root',
})
export class ErrorMessageService {
    public static toDisplayMessage(error: any): string {
        if (error.error) {
            error = error.error;
        }

        const translateService = DecoratorService.getService();

        const messages = Object.entries<any>(error).map(([field, val]) => {
            const name = lodash.startCase(
                lodash.camelCase(field),
            );

            if (lodash.isPlainObject(val)) {
                return this.toDisplayMessage(val);
            }

            if (lodash.isArray(val)) {
                return `${translateService.instant(name)}: ${val.join(', ')}`;
            }

            return `${translateService.instant(name)}: ${val}`;
        });

        return messages.join('\n');
    }

}
