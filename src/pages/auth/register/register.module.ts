import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import {NavHeaderTextComponentModule} from "../../../components/nav/nav-header-text/nav-header-text.module";

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    NavHeaderTextComponentModule,
    IonicPageModule.forChild(RegisterPage),
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}
