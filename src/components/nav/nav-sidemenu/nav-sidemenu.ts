import {Component, Input, ViewChild} from '@angular/core';
import {MenuController, ModalController, Nav} from "ionic-angular";
import { Storage } from '@ionic/storage';


/**
 * Generated class for the NavSidemenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'nav-sidemenu',
  templateUrl: 'nav-sidemenu.html'
})
export class NavSidemenuComponent {
  @ViewChild(Nav) nav: Nav;
  @Input() rootPage:any;

  constructor(public menu: MenuController, public modalCtrl: ModalController, private storage: Storage) {
  }


  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page);
  }

  openModal(page) {
    let myModal = this.modalCtrl.create(page);
    myModal.present();
  }
}
