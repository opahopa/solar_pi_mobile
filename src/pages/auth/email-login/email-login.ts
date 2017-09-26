import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {AuthServiceProvider} from "../../../providers/api/auth/auth-service";
import {AlertService} from "../../../services/alert-service/alert-service";
import {UserData} from "../../../app/core/user-data";

/**
 * Generated class for the EmailLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-email-login',
  templateUrl: 'email-login.html',
})
export class EmailLoginPage {
  credentials: any = { };

  constructor(public authService: AuthServiceProvider, private alertService: AlertService, public navCtrl: NavController, public navParams: NavParams
  ,private toastCtrl: ToastController ,private storage: Storage,private userData: UserData) {
  }

  doLogin() {
    this.authService.login(this.credentials)
      .subscribe(
        data => {
          console.log(data);
          if (data.authenticated == true) {
            this.presentToast("logged In", "toast-success");

            console.log(data);
            this.storage.set('last_login:email', this.credentials.email);
            this.storage.set('jwt_token', data.token);

            this.userData.setAuthState(true);

            this.navCtrl.setRoot('MainPage');
          } else if (data.message != null) {
            this.alertService.presentError("Login Error", data.message);
          } else if (data.errorMessage != null) {
            if (data.errorMessage.indexOf("Bad credentials") >= 0)
              this.alertService.presentError("Login Error", "Invalid username or password");
            else {
              this.alertService.presentError("Login Error", data.errorMessage)
            }
          }
        },
        error => {
          console.log(error);
          this.presentToast("Login Failed", "toast-error");
        }
      );
  }

  presentToast(msg, cssClass): Promise<any> {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true,
      cssClass: cssClass
    });

    return toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailLoginPage');
  }

}
