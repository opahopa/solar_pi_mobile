import { NgModule } from '@angular/core';

//components
import { NavSidemenuComponentModule }  from '../../components/nav/nav-sidemenu/nav-sidemenu.module'

//providers
import {DummyDataProvider} from "../../providers/dummydata";
import {StatsProvider} from "../../providers/stats/stats";
import {LoadingService} from "../../services/loading-service";
import {UserData} from "./user-data";
import {AuthServiceProvider} from "../../services/auth-service";

@NgModule({
  imports: [NavSidemenuComponentModule],
  exports: [NavSidemenuComponentModule]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        StatsProvider,
        DummyDataProvider,
        LoadingService,
        AuthServiceProvider,

        UserData
      ]
    }
  }
}
