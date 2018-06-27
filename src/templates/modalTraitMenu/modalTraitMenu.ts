import { Component } from '@angular/core';
import { NavController, Platform, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { groupeUnApiService } from '../../services/groupeUnApi.service'


@Component({
    selector: 'modalTraitMenu-home',
    templateUrl: 'modalTraitMenu.html'
})
export class modalTraitMenuPage {

    constructor(public navCtrl: NavController, private platform: Platform, public modalCtrl: ModalController, private view: ViewController, private GUAS: groupeUnApiService) {

    }

    // createPlate() {
    //     this.GUAS.addPlate();
    // }
    closeModal() {
        this.view.dismiss();
    }


}