import { Injectable } from '@angular/core';
import { AlertController } from "ionic-angular";

/*
  Generated class for the AlertServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AlertService {

  constructor(private alertCtrl: AlertController) {

  }

  presentError(title, message){
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['OK']
    });

    alert.present();
  }
}
