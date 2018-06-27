import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

@Component({
  selector: 'page-collaborateur',
  templateUrl: 'collaborateur.html',
})
export class CollaborateurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform:Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollaborateurPage');
  }

}
