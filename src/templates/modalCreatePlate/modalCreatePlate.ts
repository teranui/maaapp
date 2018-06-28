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

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, private view: ViewController, private GUAS: groupeUnApiService, private nativeStorage: NativeStorage, private camera: Camera) {

    }

    closeModal() {
        this.view.dismiss();
    }

    createNewPlate() {
        this.GUAS.post('meal/create', {'name': this.newMealName })
            .then((data) => {
                console.log(data);
            })
        console.log('PLAT ENVOYE')
    }

    
    // add photo create plate

    addPhoto() {

        const options      : CameraOptions = {
            quality        : 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType   : this.camera.EncodingType.JPEG,
            mediaType      : this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
           }, (err) => {
            // Handle error
           });
    }

    // Send Photo

    // postPhoto(){
    //     this.GUAS.post('meal/uploadPicture', { 'meal_id': this.newMealName, 'picture': this.base64Image },)
    //         .then((data) => {
    //             console.log(data);
    //         })
    //     console.log('IMAGE ENVOYEE')
    // }

}