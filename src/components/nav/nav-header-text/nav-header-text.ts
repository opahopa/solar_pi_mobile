import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the NavHeaderTextComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'nav-header-text',
  templateUrl: 'nav-header-text.html'
})
export class NavHeaderTextComponent {

  @Input() title: string;
  @Input() isTransparent: boolean;

  constructor(public nav: NavController) {}


}
