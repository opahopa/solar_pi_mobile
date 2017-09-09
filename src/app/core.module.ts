import { NgModule } from '@angular/core';

//components
import { NavSidemenuComponentModule }  from '../components/nav-sidemenu/nav-sidemenu.module'


@NgModule({
  imports: [NavSidemenuComponentModule],
  exports: [NavSidemenuComponentModule]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [

      ]
    }
  }
}
