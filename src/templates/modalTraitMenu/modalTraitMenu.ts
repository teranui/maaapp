import { Component } from '@angular/core';
import { NavController, Platform, ViewController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { modalCreatePlatePage } from '../modalCreatePlate/modalCreatePlate';

import { groupeUnApiService } from '../../services/groupeUnApi.service';
import { groupeUnApiMeals } from '../../pages/models/groupeUnApi-meals.model';

@Component({
    selector: 'page-modalTraitMenu',
    templateUrl: 'modalTraitMenu.html'
})
export class modalTraitMenuPage {

    meals : any;

    constructor(public navCtrl: NavController, private platform: Platform, public modalCtrl: ModalController, private view: ViewController, private GUAS: groupeUnApiService, private navParams: NavParams ) {
        
    }

    ionViewWillEnter(){
        this.GUAS.get('traiteur/myMeals')
            .then((data) => {
                this.meals = data.data
                console.log('meals',this.meals);
            })
        console.log('')
    }

    // modifyPlate(){
    //     this.GUAS.post('')
    // }

    openModal() {
        const modal = this.modalCtrl.create(modalCreatePlatePage, {});
        modal.present();
    }

    closeModal() {
        this.view.dismiss();
    }

}