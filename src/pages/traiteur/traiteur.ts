import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { modalTraitMenuPage } from '../../templates/modalTraitMenu/modalTraitMenu';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-traiteur',
  templateUrl: 'traiteur.html',
})
export class TraiteurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public modalCtrl: ModalController, private nativeStorage: NativeStorage) {
    platform.ready().then(() => {
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TraiteurPage');
    this.nativeStorage.getItem('user')
    .then(
      data=>{
        console.log('NativeStorage',data);
      },
      error => console.error(error)
    )
  }

  openModal() {
    const modal = this.modalCtrl.create(modalTraitMenuPage);
    modal.present();
  }
}
