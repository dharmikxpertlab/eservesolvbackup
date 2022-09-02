import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'orderByKey',
  pure: false
})
export class OrderByKeyPipe implements PipeTransform {

  transform(value: any[], key: string, direction: any = 'asc'): any {
    if (!key) {
      return value;
    }

    return _.orderBy(value, key, direction);
  }

}
