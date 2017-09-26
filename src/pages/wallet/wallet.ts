import {Component, Inject} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {APP_CONFIG, IAppConfig} from "../../app/app.config";
import {Broadcaster, Ng2Cable} from "ng2-cable";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, @Inject(APP_CONFIG) private config: IAppConfig,
              private ng2cable: Ng2Cable, private broadcaster: Broadcaster) {
    // this.cableHost = 'https://solarpi.herokuapp.com/cable'; //this.config.apiEndpoint.replace('http', 'ws').replace('https', 'ws');
    this.cableHost = 'https://localhost:3000/cable';
    this.initWebsock();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  ionViewDidLeave() {
    this.ng2cable.unsubscribe();
  }

  initWebsock() {
    this.ng2cable.subscribe(this.cableHost, 'WalletChannel');
    //By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}

    this.broadcaster.on<string>('WalletChannelTest').subscribe(
      message => {
        console.log(message);
      }
    );
  }

  testWebsock() {

  }
}
