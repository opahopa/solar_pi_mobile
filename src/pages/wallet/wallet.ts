import {Component, Inject} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {APP_CONFIG, IAppConfig} from "../../app/app.config";
import {Broadcaster, Ng2Cable} from "ng2-cable";
import {WalletProvider} from "../../providers/wallet/wallet";

/**
 * Generated class for the WalletPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  cableHost: string ;
  device_id:number = 1;

  balance: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, @Inject(APP_CONFIG) private config: IAppConfig,
              private ng2cable: Ng2Cable, private broadcaster: Broadcaster, private walletProvider: WalletProvider) {
    this.cableHost = this.config.apiEndpoint + '/cable';
    this.initWebsock();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  ionViewDidLeave() {
    this.ng2cable.unsubscribe();
  }

  initWebsock() {
    this.ng2cable.subscribe(this.cableHost, 'WalletChannel',  { device_id: this.device_id });
    console.log("Here #0")
    //By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}

    this.broadcaster.on<string>(`device_${this.device_id}`).subscribe(
      message => {
        console.log("Here #1")
        console.log(message);
        if (message['type'] === 'balance:responce') {
          this.balance = message['data'];
        }
      }
    );
  }


  requestBalance() {
    this.walletProvider.requestBalance(1).subscribe((data)=>{
      console.log(data)
    });
    console.log("Here #3")
  }
}
