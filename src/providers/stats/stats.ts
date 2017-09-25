import {Inject, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {APP_CONFIG, IAppConfig} from "../../app/app.config";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import {ConsumptionStats} from "../../models/consumption-stats";

/*import 'rxjs/add/operator/catch';
  Generated class for the StatsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StatsProvider {

  constructor(public http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {
    console.log('Hello StatsProvider Provider');

  }

  getHourlyData() {}

  getMonthlyData() {
    let currentDate = new Date();

    let to = {
      month: currentDate.getUTCMonth() + 1,
      day: currentDate.getUTCDate(),
      year: currentDate.getUTCFullYear()
    };
    let from = {
      month: currentDate.getUTCMonth() + 1,
      day: currentDate.getUTCDate(),
      year: currentDate.getUTCFullYear() - 1
    };


    return this.http.get(this.config.apiEndpoint + `/stat/date?from_date=${from.year}-${from.month}-${from.day}&to_date=${to.year}-${to.month}-${to.day}&limit=5`)
      .map(res => <ConsumptionStats[]>res.json())
      .catch((err:Response) => {
        return Observable.throw(err.json());
      });
  }

  getYearlyData() {}

}
