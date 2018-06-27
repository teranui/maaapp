import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//Menu Tabs = Page
import { CollaborateurPage } from '../collaborateur/collaborateur';
import { TraiteurPage } from '../traiteur/traiteur';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TraiteurPage;
  tab3Root = CollaborateurPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }
  
}