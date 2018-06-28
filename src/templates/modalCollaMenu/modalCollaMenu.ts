import { Component } from '@angular/core';
import { NavController, Platform, AlertController, NavParams,ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular'

;@Component({
   selector: 'modalTraitMenu-home',
   templateUrl: 'modalTraitMenu.html'
 })

 export class modalTraitMenuPage {    constructor(public navCtrl: NavController, private platform: Platform, public modalCtrl: ModalController,  private view: ViewController) {    }    
 closeModal() {
       this.view.dismiss();
     }      
 }