import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginModalPage } from './login-modal';

import { NavHeaderMainComponentModule } from '../../../components/nav/nav-header-main/nav-header-main.module'

@NgModule({
  declarations: [
    LoginModalPage,
  ],
  imports: [
    NavHeaderMainComponentModule,
    IonicPageModule.forChild(LoginModalPage)
  ],
  exports: [
    LoginModalPage
  ]
})
export class LoginModalPageModule {}
