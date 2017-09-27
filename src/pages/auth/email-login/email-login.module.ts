import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailLoginPage } from './email-login';
import {NavHeaderTextComponentModule} from "../../../components/nav/nav-header-text/nav-header-text.module";

@NgModule({
  declarations: [
    EmailLoginPage,
  ],
  imports: [
    NavHeaderTextComponentModule,
    IonicPageModule.forChild(EmailLoginPage),
  ],
  exports: [
    EmailLoginPage
  ]
})
export class EmailLoginPageModule {}
