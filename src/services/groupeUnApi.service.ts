// Core components
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NativeStorage } from '@ionic-native/native-storage';


@Injectable()
export class groupeUnApiService {

    private baseUrl: string = 'http://groupe1.motjo.io/api/';
    newMeal: string;
    user: any;
    options: any;

    constructor(private http: Http, private nativeStorage: NativeStorage) {
        this.setHeaders();
    }

    public get(url): any {
        return this.http.get(this.baseUrl + url,  this.options)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(error => console.log('Une erreur est survenue ' + error))
    }

    public post(url, data): any {
        console.log('post launched')
        return this.http.post(this.baseUrl + url, data, this.options)
        .toPromise()
        .then(res => {
            console.log('envoie');
            console.log(res);
            // resolve(res.json());
            return res.json();
        }).catch ((err) => {
            console.log('erreur add plate', err);
            // reject(err);
        });
    }


    public setHeaders() {
        this.nativeStorage.getItem('user')
            .then(
                data => {
                    this.user = data;
                    let headers = new Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', 'Bearer ' + this.user.token);
                    this.options = new RequestOptions({ headers: headers });
                    console.log(data);
                },
                error => console.error(error)
            )
    }

    // public addPlateApi() {

    //     this.http.post('http://groupe1.api/api/meal/create', {'name': this.newMeal }, this.options)
    //         .map(res => res.json())
    //         .subscribe(res => {
    //             console.log('envoie');
    //             console.log(res);
    //             // resolve(res.json());
    //         }, (err) => {
    //             console.log('erreur add plate', err);
    //             // reject(err);
    //         });
    // }
}
