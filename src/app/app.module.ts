import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import {CoreModule} from "./core/core.module";
import {APP_CONFIG, AppConfig} from "./app.config";
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {Ng2CableModule} from "ng2-cable";

import {LoadingService} from "../services/loading-service";
import {MyHttpWrapper} from "./core/my-http.extend";
import {IonicStorageModule} from "@ionic/storage";

export function httpInterceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, loadingService: LoadingService) {
  return new MyHttpWrapper(xhrBackend, requestOptions, loadingService);
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2CableModule,
    CoreModule.forRoot(),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: APP_CONFIG, useValue: AppConfig},
    {
      provide: Http,
      useFactory: httpInterceptorFactory,
      deps: [XHRBackend, RequestOptions, LoadingService]
    }
  ]
})
export class AppModule {}
