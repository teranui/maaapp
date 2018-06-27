import { Component } from '@angular/core';
import { NavController, NavParams,Platform, ModalController, App } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { ModalCollaRecapPage } from '../../templates/modalCollaRecap/modalCollaRecap';


@Component({
  selector: 'page-collaborateur',
  templateUrl: 'collaborateur.html',
})
export class CollaborateurPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private platform:Platform, public modalCtrl: ModalController, public app: App) {    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CollaborateurPage');
  }



  openModal(id) {
    const modal = this.modalCtrl.create(ModalCollaRecapPage, { enterId: id });
    modal.present();
  }



  logout(){
    // Remove API token 
    const root = this.app.getRootNav();
    root.popToRoot();
}
}
