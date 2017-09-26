import { NgModule } from '@angular/core';

//components
import { NavSidemenuComponentModule }  from '../../components/nav-sidemenu/nav-sidemenu.module'
import {DummyDataProvider} from "../../providers/dummydata";
import {StatsProvider} from "../../providers/stats/stats";

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
      ]
    }
  }
}
