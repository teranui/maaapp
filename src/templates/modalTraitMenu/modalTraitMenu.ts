import { Component } from '@angular/core';
import { NavController, Platform, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { modalCreatePlatePage } from '../modalCreatePlate/modalCreatePlate';

import { groupeUnApiService } from '../../services/groupeUnApi.service';
import { groupeUnApiMeals } from '../../pages/models/groupeUnApi-meals.model';

@Component({
    selector: 'page-modalTraitMenu',
    templateUrl: 'modalTraitMenu.html'
})
export class modalTraitMenuPage {

    meals : string[];

    constructor(public navCtrl: NavController, private platform: Platform, public modalCtrl: ModalController, private view: ViewController, private GUAS: groupeUnApiService, ) {
        
    }


    openModal() {
        const modal = this.modalCtrl.create(modalCreatePlatePage, {});
        modal.present();
    }

    closeModal() {
        this.view.dismiss();
    }

    public showMeal() {
        this.GUAS.get('traiteur/myMeals')
            .then((data) => {
                console.log(data);
            })
        console.log('PLAT ENVOYE')
    }

}