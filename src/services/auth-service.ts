import {Inject, Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import {APP_CONFIG, IAppConfig} from "../app/app.config";

import {Facebook, Google} from 'ng2-cordova-oauth/core';

//replace for build!!!
import {OauthCordova} from 'ng2-cordova-oauth/platform/cordova'
// import {OauthBrowser} from 'ng2-cordova-oauth/platform/browser'


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class AuthServiceProvider {

  private oauth = new OauthCordova();
  // private oauth = new OauthBrowser();
  private fBprovider = new Facebook({
    clientId: "862087237254270",
    appScope: ['email']
  });

  constructor(public http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  login(credentials) {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    //archaic, but required by back-end
    let params = "username="+credentials.email+"&password="+credentials.password;

    return this.http.post(this.config.apiEndpoint + 'authentication', params, options)
      .map(res => res.json())
      .catch((err:Response) => {
        return Observable.throw(err.json());
      });
  }

  fbLogin() {
    return this.oauth.logInVia(this.fBprovider);
  }

  confirmProviderLogin(name:string, token: string){
    let params = {
      provider: name,
      token: token
    }

    switch (name) {
      case 'facebook':
        return this.http.post(this.config.apiEndpoint + 'authentication/token_sign_in', params)
          .map(res => res.json())
          .catch((err:Response) => {
            return Observable.throw(err.json());
          });
    }
  }


  register(data) {
  }

  logout() {}
}
