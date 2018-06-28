import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-collaborateur',
  templateUrl: 'collaborateur.html',
})
export class CollaborateurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // doLogout() {
  //   console.log('doLogin this.loginData', this.loginData);
  //   this.showLoader();
  //   this.authService.logout(this.loginData)

  //     .then((result) => {
  //       this.loading.dismiss();
  //       this.data = result;
  //       if (this.data.success.userstype_id == 1) {
  //         localStorage.setItem('token', this.data.access_token);
  //         this.navCtrl.setRoot(TraiteurPage);
  //         console.log('result Traiteur', this.data)
  //       }
  //       if (this.data.success.userstype_id == 2) {
  //         localStorage.setItem('token', this.data.access_token);
  //         this.navCtrl.setRoot(CollaborateurPage);
  //         console.log('result Traiteur', this.data)
  //       }
  //       // console.log('resultat');
  //       // localStorage.setItem('token', this.data.access_token);
  //       // this.navCtrl.setRoot(HomePage);
  //     },

  //       (err) => {
  //         this.loading.dismiss();
  //         this.presentToast(err);
  //       });
  // }

}
