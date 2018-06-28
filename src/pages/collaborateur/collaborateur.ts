import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

=======
import { NavController, NavParams, Platform } from 'ionic-angular';
>>>>>>> 5c27ba298c453e560c564dafe8aabb258b7592ad

@Component({
  selector: 'page-collaborateur',
  templateUrl: 'collaborateur.html',
})
export class CollaborateurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform:Platform) {
  }




  openModal(i){
    console.log(i);
    this.navCtrl.push(MenuPage, {"jour":i});
  };

}
