import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-collaborateur',
  templateUrl: 'collaborateur.html',
})
export class CollaborateurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }




  openModal(i){
    console.log(i);
    this.navCtrl.push(MenuPage, {"jour":i});
  };

}
