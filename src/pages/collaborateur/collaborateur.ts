import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { ModalCollaMenuPage } from '../../templates/modalCollaMenu/modalCollaMenu';
=======
<<<<<<< HEAD
import { NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

=======
import { NavController, NavParams, Platform } from 'ionic-angular';
>>>>>>> 5c27ba298c453e560c564dafe8aabb258b7592ad
>>>>>>> heimana1

@Component({
 selector: 'page-collaborateur',
 templateUrl: 'collaborateur.html',
})

<<<<<<< HEAD
export class CollaborateurPage {  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public modalCtrl: ModalController) {

   platform.ready().then(() => {

   });

 }  ionViewDidLoad() {
   console.log('ionViewDidLoad TraiteurPage');

 }  openModal() {

   const modal = this.modalCtrl.create(ModalCollaMenuPage, {});

   modal.present();

 }
=======
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform:Platform) {
  }




  openModal(i){
    console.log(i);
    this.navCtrl.push(MenuPage, {"jour":i});
  };
>>>>>>> heimana1

}
