import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginModalPage } from './login-modal';


@NgModule({
  declarations: [
    LoginModalPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginModalPage)
  ],
  exports: [
    LoginModalPage
  ]
})
export class LoginModalPageModule {}
