import {Inject, Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import {APP_CONFIG, IAppConfig} from "../app/app.config";
import {Angular2TokenService} from "angular2-token-ionic3";

@Injectable()
export class DeviseAuthServiceProvider {


  constructor(public http: Http, @Inject(APP_CONFIG) private config: IAppConfig, private tokenService: Angular2TokenService) {

    //newWindow for ionic serve
    this.tokenService.init({
        oAuthWindowType: 'newWindow',
    });
  }

  login(credentials) {
    // let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    // let options = new RequestOptions({headers: headers, withCredentials: true});
    //
    // //archaic, but required by back-end
    // let params = "username="+credentials.email+"&password="+credentials.password;
    //
    // return this.http.post(this.config.apiEndpoint + 'authentication', params, options)
    //   .map(res => res.json())
    //   .catch((err:Response) => {
    //     return Observable.throw(err.json());
    //   });
  }

  fbLogin() {
    this.tokenService.signInOAuth(
      'facebook'
    );
  }

}
