import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { ModalCollaMenuPage } from '../../templates/modalCollaMenu/modalCollaMenu';

@Component({
 selector: 'page-collaborateur',
 templateUrl: 'collaborateur.html',
})

export class CollaborateurPage {  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public modalCtrl: ModalController) {

   platform.ready().then(() => {

   });

 }  ionViewDidLoad() {
   console.log('ionViewDidLoad TraiteurPage');

 }  openModal() {

   const modal = this.modalCtrl.create(ModalCollaMenuPage, {});

   modal.present();

 }

}
