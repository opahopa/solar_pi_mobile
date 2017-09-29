import { Component } from '@angular/core';
import {
  IonicPage, NavController, ToastController,
  ViewController
} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {UserData} from "../../../app/core/user-data";
import {LoadingService} from "../../../services/loading-service";
import {AuthServiceProvider} from "../../../services/auth-service";
import {DeviseAuthServiceProvider} from "../../../services/devise-auth-service";


/**
 * Generated class for the LoginModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
})
export class LoginModalPage {

  data: any;
  display_name:any = {
    fb: '',
    google: ''
  };

  constructor(public viewCtrl: ViewController, public navCtrl: NavController,private toastCtrl: ToastController
    ,private storage: Storage,private userData: UserData, public loadingService: LoadingService, private authService: AuthServiceProvider) {
  }


  fbLogin() {
    this.loadingService.show();
    this.authService.fbLogin().then(success => {
      console.log("RESULT: " + JSON.stringify(success));
      this.loadingService.hide();
      this.presentToast("logged In", "toast-success");

      this.confirmOauth('facebook', success['access_token']);
    }, error => {
      console.log("ERROR: ", error);
      this.loadingService.hide();
      this.presentToast("Login Failed. Try Later.", "toast-error");
    });
  }

  googleLogin() {
    this.loadingService.show();

  }

  _parseAuthConfirm(data){
    if (data.status === "success"){
      this.storage.set('jwt_token', data.token);
      this.userData.isAuthenticated = true;

      this.presentToast("logged In", "toast-success");

      this.navCtrl.setRoot('MainPage');
    }
    else {
      this.presentToast("Login Failed. Try Later.", "toast-error");
    }
  }

  confirmOauth(provider:string, token:string) {
    this.authService.confirmProviderLogin(provider, token).subscribe((data)=>{
      console.log(data);
    });
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
    this.storage.get('last_login:social:google_name').then((val) => {
      this.display_name.google = val;
    });
    this.storage.get('last_login:social:fb_name').then((val) => {
      this.display_name.fb = val;
    });
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

  openPage(page) {
     this.navCtrl.push(page);
  }
}
