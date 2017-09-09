import {Component, Input, ViewChild} from '@angular/core';
import {MenuController, Nav} from "ionic-angular";


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

  constructor(public menu: MenuController) {
    console.log('Hello NavSidemenuComponent Component');
  }


  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page);
  }
}
