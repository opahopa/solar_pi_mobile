import {ConnectionBackend, Http, RequestOptions, RequestOptionsArgs, Response,Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do'
import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';

import {LoadingService} from "../../services/loading-service";


@Injectable()
export class MyHttpWrapper extends Http {


  constructor(connectionBackend: ConnectionBackend, requestOptions: RequestOptions, public loadingService: LoadingService, public storage: Storage) {
    super(connectionBackend, requestOptions);
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.loadingService.show();


    return super.get(url, this.getRequestOptionArgs(options))
      .finally<Response>(() => {
        this.loadingService.hide();
      });
  }

  public post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    this.loadingService.show();

    return super.post(url, body, this.getRequestOptionArgs(options))
      .finally<Response>(() => {
        this.loadingService.hide();
      });
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    this.loadingService.show();

    return super.put(url, body, this.getRequestOptionArgs(options))
      .finally<Response>(() => {
        this.loadingService.hide();
      });
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.loadingService.show();

    return super.delete(url, this.getRequestOptionArgs(options))
      .finally<Response>(() => {
        this.loadingService.hide();
      });
  }


  private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
    return this.storage.get('jwt_token').then((token) => {
      if (options == null) {
        options = new RequestOptions();
      }
      if (options.headers == null) {
        options.headers = new Headers();
      }
      if (token !== null) {
        options.headers.append('Authorization', 'Bearer ' + token);
      }
      options.headers.append('Content-Type', 'application/json');

      return options;
    });
  }
}
