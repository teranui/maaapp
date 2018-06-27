import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private splashScreen: SplashScreen, public loadingCtrl: LoadingController) {}
  ionViewDidLoad() {
    this.presentLoading();
    console.log('ionViewDidLoad SplashPage');
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "chargement patientez...",
      duration: 5000
    });
    loader.present();
  }
}
