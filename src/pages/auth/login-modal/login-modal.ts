import { Component } from '@angular/core';
import {
  IonicPage, NavController, ToastController,
  ViewController
} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {UserData} from "../../../app/core/user-data";
import {AuthFirebaseServiceProvider} from "../../../providers/api/auth/auth-firebase-service";
import {LoadingService} from "../../../services/loading-service";


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

  constructor(private authFbService: AuthFirebaseServiceProvider, public viewCtrl: ViewController, public navCtrl: NavController,private toastCtrl: ToastController
    ,private storage: Storage,private userData: UserData, public loadingService: LoadingService) {
  }


  fbLogin() {
    this.loadingService.show();

    this.authFbService.fbLogin().then((res)=>{
        if(!res.user) {
          this.presentToast("Login Failed. Try Later.", "toast-error");
          this.loadingService.hide();
        }
        else {
          this.authFbService.getUserToken().then((token)=>{
            this.authFbService.confirmFirebaseAuth(res, token).subscribe((data)=>{
              this._parseAuthConfirm(data);
              this.storage.set('last_login:social:fb_name', res.user.displayName);
              this.loadingService.hide();
            })
          })
        }
      },
      (err)=>{
        console.log(err);
        this.presentToast("Login Failed. Please try again Later.", "toast-error");
        this.loadingService.hide();
      }
    );
  }

  googleLogin() {
    this.loadingService.show();

    this.authFbService.googleLogin().then((res)=>{
      console.log(res)

        if(!res.user) {
          this.presentToast("Login Failed. Try Later.", "toast-error");
          this.loadingService.hide();
        }
        else {
          this.authFbService.getUserToken().then((token)=>{
            this.authFbService.confirmFirebaseAuth(res, token).subscribe((data)=>{
              this._parseAuthConfirm(data);
              this.storage.set('last_login:social:google_name', res.user.displayName);
              this.loadingService.hide();
            })
          })
        }
      },
      (err)=>{
        console.log(err)
        this.presentToast("Login Failed. Please try again Later.", "toast-error");
        this.loadingService.hide();
      }
    );
  }

  _parseAuthConfirm(data){
    if (data.status === "success"){
      this.storage.set('jwt_token', data.token);
      this.userData.setAuthState(true);

      this.presentToast("logged In", "toast-success");

      this.navCtrl.setRoot('MainPage');
    }
    else {
      this.presentToast("Login Failed. Try Later.", "toast-error");
    }
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
