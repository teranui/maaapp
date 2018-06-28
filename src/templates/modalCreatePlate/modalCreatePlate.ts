import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { groupeUnApiService } from '../../services/groupeUnApi.service';
import { modalTraitMenuPage } from '../modalTraitMenu/modalTraitMenu';
import { Http, Headers, RequestOptions } from '@angular/http';

// Native Components

import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';



@Component({
    selector: 'modalCreatePlate-home',
    templateUrl: 'modalCreatePlate.html'
})
export class modalCreatePlatePage {

    newMealName: string;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, private view: ViewController, private GUAS: groupeUnApiService, private http:Http, private nativeStorage: NativeStorage, private camera: Camera) {
        
        console.log('token', localStorage.getItem('token'));
    }

    closeModal() {
        this.view.dismiss();
    }

    createNewPlate(){
        this.GUAS.post('meal/create', {'name': this.newMealName})
        .then((data)=>{
            console.log (data);
        })
        console.log ('PLAT ENVOYE')
    }


}