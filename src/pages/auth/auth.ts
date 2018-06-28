import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
// import { HomePage } from '../home/home';

//page
import { CollaborateurPage } from './../collaborateur/collaborateur';
import { TraiteurPage } from './../traiteur/traiteur';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  loading: any;
  loginData = { email: 'heimana@gmail.com', password: 'test' };
  data: any;
  goToPage = [null, TraiteurPage, CollaborateurPage];

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private nativeStorage: NativeStorage, private platform: Platform) {
  }


  ionViewWillEnter() {
    // this.nativeStorage.remove('user');
    this.platform.ready().then(() => {
      this.nativeStorage.getItem('user')
        .then(
          data => {
            this.navCtrl.setRoot(this.goToPage[data.userstype_id]);
          },
          error => {
            console.log('error nativeStorage', error)
          }
        );
      })
    }



doLogin() {
  console.log('doLogin this.loginData', this.loginData);
  this.showLoader();
  this.authService.login(this.loginData)

    .then((result) => {
      this.loading.dismiss();
      this.data = result;
      this.nativeStorage.setItem('user', this.data.success);
      this.navCtrl.setRoot(this.goToPage[this.data.success.userstype_id]);
    },

      (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });
}

showLoader() {
  this.loading = this.loadingCtrl.create({
    content: 'Authenticafication en cours...'
  });

  this.loading.present();
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 5000,
    position: 'bottom',
    dismissOnPageChange: true
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
}
