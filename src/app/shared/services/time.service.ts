import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  calculateTimeFromNow(hours: number, time: string, format = 'HH:MM, MMM Do, YYYY') {
    return moment(time).add(hours, 'hours').format(format);
  }

  formatTime(time: string, format = 'HH:MM, MMM Do, YYYY') {
    return moment(time).format(format);
  }
}
