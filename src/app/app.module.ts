import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import {CoreModule} from "./core.module";
import { StatsProvider } from '../providers/stats/stats';
import {DummyDataProvider} from "../providers/dummydata";
import {APP_CONFIG, AppConfig} from "./app.config";
import {HttpModule} from "@angular/http";
import {Ng2CableModule} from "ng2-cable";

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
    StatsProvider,
    DummyDataProvider,
    StatsProvider
  ]
})
export class AppModule {}
