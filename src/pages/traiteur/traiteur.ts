import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { modalTraitMenuPage } from '../../templates/modalTraitMenu/modalTraitMenu';

@Component({
  selector: 'page-traiteur',
  templateUrl: 'traiteur.html',
})
export class TraiteurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    platform.ready().then(() => {
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TraiteurPage');
  }

}
