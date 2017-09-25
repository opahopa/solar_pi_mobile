import {Inject, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

import {APP_CONFIG, IAppConfig} from "../../app/app.config";

/*
  Generated class for the WalletProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WalletProvider {

  constructor(public http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {
    console.log('Hello WalletProvider Provider');
  }

  requestBalance(device_id:number){
    return this.http.get(this.config.apiEndpoint + `wallet/${device_id}/balance`)
      .map(res =>  res.json())
      .catch((err:Response) => {
        return Observable.throw(err);
      });
  }
}
