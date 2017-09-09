import {Inject, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {APP_CONFIG, IAppConfig} from "../../app/app.config";

/*
  Generated class for the StatsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StatsProvider {

  constructor(public http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {
    console.log('Hello StatsProvider Provider');

  }

}
