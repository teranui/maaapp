import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';


        //page
import { AuthPage } from "../../pages/auth/auth";

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  progress = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private splashScreen: SplashScreen, public loadingCtrl: LoadingController) {}
  ionViewDidLoad() {
    this.redirectToAuth();
    console.log('ionViewDidLoad SplashPage');
  }


  redirectToAuth() {
    let limit = 2;
    let counter = 0;
    this.progress = 0;
    let myInterval = setInterval(() => {
      counter++;
      console.log('count', counter);
      this.progress = counter * 100 / limit;
      console.log('progress', this.progress);
      if (counter == limit) {
        clearInterval(myInterval);
        this.presentLoading();
      }
    }, 1000);
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "chargement patientez...",
      duration: 2000
    });
    loader.present();
    this.navCtrl.push(AuthPage)
  }
}
