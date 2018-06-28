import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ModalController } from 'ionic-angular';


import { MenuPage } from '../menu/menu';




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

   // constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public modalCtrl: ModalController) {

  //   platform.ready().then(() => {

  //   });

  // } ionViewDidLoad() {
  //   console.log('ionViewDidLoad TraiteurPage');

  // } openModal() {

  //   const modal = this.modalCtrl.create(ModalCollaMenuPage, {});

  //   modal.present();

  // }
}
